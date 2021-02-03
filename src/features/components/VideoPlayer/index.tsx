import React, { useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Hidden } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import socket from 'socket';
import { Store } from 'store';

import ExpandButton from 'components/ExpandButton';
import { updateActualVideo, getVideoUrlByRoom } from 'services/room';
import { Video } from 'models/video';

import VideoDashboard from './components/VideoDashboard';
import {
  Placeholder, Player, PlayIcon, PlayerContainer, VideoInfoContainer, EmptyText, PlayerWrapper,
} from './styles';

type Props = {
  roomId: string,
  onShowPlaylist: () => void,
}

const VideoPlayer = ({ roomId, onShowPlaylist }: Props) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showVideoDashboard, setShowVideoDashboard] = useState(false);

  const [videoUrl, setVideoUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState<Video>();
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(isMobile);
  const [, setLastPlayDate] = useState(0);
  const changePlaylist = useStoreActions<Store>((
    { changePlaylist: changePlaylistAction },
  ) => changePlaylistAction);

  const handleFetchVideoUrl = useCallback(() => {
    getVideoUrlByRoom(roomId).then(({ room, url }) => {
      changePlaylist(room.playlist);

      if (url) {
        setLastPlayDate((prev) => {
          if (prev === room.lastPlayDate) {
            return prev;
          }
          setShowVideo(true);
          setVideoInfo(room.actualVideo);
          setVideoUrl(url);
          return room.lastPlayDate;
        });
      } else {
        setShowVideo(false);
        setVideoUrl('');
      }
    });
  }, [changePlaylist, roomId]);

  useEffect(() => {
    handleFetchVideoUrl();
    socket.on('video.changeState', handleFetchVideoUrl);
  }, [handleFetchVideoUrl]);

  const changeVideoState = () => {
    socket.emit('video.changeState', roomId);
  };

  const handleUpdateActualVideo = async (actualVideo: Partial<Video>) => {
    await updateActualVideo(roomId, (actualVideo as Video));
  };

  const handleStart = async () => {
    await handleUpdateActualVideo({ ...videoInfo, duration: videoDuration });
  };

  const handleEndVideo = () => {
    changeVideoState();
  };

  const handleSkipVideo = async () => {
    await handleUpdateActualVideo({ ...videoInfo, duration: 0 });
    changeVideoState();
  };

  const handleProgress = ({ playedSeconds }: { playedSeconds: number }) => {
    setVideoProgress(playedSeconds);
  };

  const handleVideoDuration = (duration: number) => {
    setVideoDuration(duration);
  };

  const handleClickPlayer = () => {
    setShowVideoDashboard(!showVideoDashboard);
  };

  const VideoDashboardProps = {
    title: videoInfo?.title || '',
    channel: videoInfo?.channel || '',
    thumbnail: videoInfo?.thumbnail || '',
    addedBy: videoInfo?.addedBy || '',
    time: videoProgress,
    duration: videoDuration,
    volume,
    isMuted,
    onChangeVolume: (value: number) => setVolume(value),
    onChangeIsMuted: () => setIsMuted(!isMuted),
    onShowPlaylist,
    onSkip: handleSkipVideo,
  };

  return (
    <>
      {!showVideo ? (
        <Placeholder>
          <PlayIcon onClick={onShowPlaylist} />
          <EmptyText>
            <p>The playlist are empty</p>
            <p>Add videos to start the party</p>
          </EmptyText>
        </Placeholder>
      ) : (
        <>
          <PlayerContainer>
            <PlayerWrapper onClick={handleClickPlayer}>
              <Player
                playing={showVideo}
                url={videoUrl}
                muted={isMuted}
                volume={volume}
                onStart={handleStart}
                onProgress={handleProgress}
                onDuration={handleVideoDuration}
                onEnded={handleEndVideo}
              />
            </PlayerWrapper>

            <Hidden mdUp>
              <VideoInfoContainer>
                <ExpandButton
                  top
                  componentName="details"
                  switchExpanded={handleClickPlayer}
                  expanded={showVideoDashboard}
                />
                {showVideoDashboard && <VideoDashboard {...VideoDashboardProps} />}
              </VideoInfoContainer>
            </Hidden>
          </PlayerContainer>
          <Hidden smDown>
            <VideoDashboard {...VideoDashboardProps} />
          </Hidden>
        </>
      )}
    </>
  );
};

export default VideoPlayer;
