import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Hidden } from '@material-ui/core';
import PropTypes from 'prop-types';
import socket from 'socket';

import TransitionModal from 'components/TransitionModal';
import Playlist from 'features/components/Playlist';
import { updateActualVideo, getVideoUrlByRoom, updatePlaylist } from 'services/room';

import VideoDashboard from './components/VideoDashboard';
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
    onShowPlaylist: handleOpenPlaylist,
    onSkip: handleSkipVideo,
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

            <Hidden mdUp>
              <VideoInfoContainer show={showOverlay}>
                <VideoDashboard {...VideoDashboardProps} />
              </VideoInfoContainer>
            </Hidden>
          </PlayerContainer>
          <Hidden smDown>
            <VideoDashboard {...VideoDashboardProps} />
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
