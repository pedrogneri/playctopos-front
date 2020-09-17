import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Hidden } from '@material-ui/core';
import Playlist from 'features/components/Playlist';
import PropTypes from 'prop-types';
import socket from 'socket';

import TransitionModal from 'components/TransitionModal';
import { updateActualVideo, getVideoUrlByRoom, updatePlaylist } from 'services/room';

import Overlay from './components/Overlay';
import VideoInfo from './components/VideoInfo';
import { Placeholder, Player, PlayIcon, PlayerContainer, VideoInfoContainer } from './styles';

const VideoPlayer = ({ roomId }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const [videoUrl, setVideoUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState({});
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(isMobile);

  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const handleFetchVideoUrl = () => {
      getVideoUrlByRoom(roomId).then(({ room, url }) => {
        setPlaylist(room.playlist);

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

  const handleOpenPlaylist = () => {
    setShowPlaylist(true);
  };

  const handleUpdatePlaylist = async (playlist) => {
    await updatePlaylist(roomId, playlist);
    changeVideoState();
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
    if (isMobile) {
      setShowOverlay(!showOverlay);
    }
  };

  const videoInfoProps = {
    title: videoInfo.title || '',
    channel: videoInfo.channel || '',
    thumbnail: videoInfo.thumbnail || '',
    addedBy: videoInfo.addedBy || '',
  };

  return (
    <>
      {!showVideo ? (
        <Placeholder>
          <PlayIcon onClick={handleOpenPlaylist} />
        </Placeholder>
      ) : (
        <>
          <PlayerContainer
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
            onClick={handleClickPlayer}
          >
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
            {showOverlay && (
              <Overlay
                time={videoProgress}
                duration={videoDuration}
                volume={volume}
                isMuted={isMuted}
                onChangeIsMuted={() => setIsMuted(!isMuted)}
                onChangeVolume={(value) => setVolume(value)}
              />
            )}

            <Hidden mdUp>
              <VideoInfoContainer show={showOverlay}>
                <VideoInfo {...videoInfoProps} onShowPlaylist={handleOpenPlaylist} onSkip={handleSkipVideo} />
              </VideoInfoContainer>
            </Hidden>
          </PlayerContainer>
          <Hidden smDown>
            <VideoInfo {...videoInfoProps} onShowPlaylist={handleOpenPlaylist} onSkip={handleSkipVideo} />
          </Hidden>
        </>
      )}
      <TransitionModal show={showPlaylist} onClose={() => setShowPlaylist(false)}>
        <Playlist playlist={playlist} onUpdatePlaylist={handleUpdatePlaylist} />
      </TransitionModal>
    </>
  );
};

VideoPlayer.propTypes = {
  roomId: PropTypes.string,
};

export default VideoPlayer;
