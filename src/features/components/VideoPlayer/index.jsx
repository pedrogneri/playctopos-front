import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Hidden } from '@material-ui/core';
import { useStoreActions } from 'easy-peasy';
import PropTypes from 'prop-types';
import socket from 'socket';

import ExpandButton from 'components/ExpandButton';
import { updateActualVideo, getVideoUrlByRoom } from 'services/room';

import VideoDashboard from './components/VideoDashboard';
import { Placeholder, Player, PlayIcon, PlayerContainer, VideoInfoContainer, EmptyText, PlayerWrapper } from './styles';

const VideoPlayer = ({ roomId, onShowPlaylist }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showVideoDashboard, setShowVideoDashboard] = useState(false);

  const [videoUrl, setVideoUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState({});
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(isMobile);
  const changePlaylist = useStoreActions(({ changePlaylist }) => changePlaylist);

  useEffect(() => {
    const handleFetchVideoUrl = () => {
      getVideoUrlByRoom(roomId).then(({ room, url }) => {
        changePlaylist(room.playlist);

        if (!!url) {
          setShowVideo(true);
          setVideoInfo(room.actualVideo);
          setVideoUrl(url);
        } else {
          setShowVideo(false);
          setVideoUrl('');
        }
      });
    };

    handleFetchVideoUrl();
    socket.on('video.changeState', handleFetchVideoUrl);
    // eslint-disable-next-line
  }, []);

  const changeVideoState = () => {
    socket.emit('video.changeState', roomId);
  };

  const handleUpdateActualVideo = async (actualVideo) => {
    await updateActualVideo(roomId, actualVideo);
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

  const handleProgress = ({ playedSeconds }) => {
    setVideoProgress(playedSeconds);
  };

  const handleVideoDuration = (duration) => {
    setVideoDuration(duration);
  };

  const handleClickPlayer = () => {
    setShowVideoDashboard(!showVideoDashboard);
  };

  const VideoDashboardProps = {
    title: videoInfo.title || '',
    channel: videoInfo.channel || '',
    thumbnail: videoInfo.thumbnail || '',
    addedBy: videoInfo.addedBy || '',
    time: videoProgress,
    duration: videoDuration,
    volume,
    isMuted,
    onChangeVolume: (value) => setVolume(value),
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

VideoPlayer.propTypes = {
  roomId: PropTypes.string,
  onShowPlaylist: PropTypes.func,
};

export default VideoPlayer;
