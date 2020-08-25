import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { Hidden } from '@material-ui/core';
import PropTypes from 'prop-types';
import socket from 'socket';

import TransitionModal from 'components/TransitionModal';
import Playlist from 'screens/components/Playlist';
import { updateActualVideo, getVideoUrlByRoom, updatePlaylist } from 'services/room';

import Overlay from './components/Overlay';
import VideoInfo from './components/VideoInfo';
import { Placeholder, Player, PlayIcon, PlayerContainer, VideoInfoContainer } from './styles';

const VideoPlayer = ({ roomId }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const [videoUrl, setVideoUrl] = useState('');
  const [lastPlayDate, setLastPlayDate] = useState(0);
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
          if (lastPlayDate !== room.lastPlayDate) {
            setLastPlayDate(room.lastPlayDate);
            setShowVideo(true);
            setVideoInfo(room.actualVideo);
            setVideoUrl(url);
          }
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

  const handleUpdatePlaylist = async (video) => {
    const newPlaylist = [...playlist, video];
    await updatePlaylist(roomId, newPlaylist);
  };

  const handleUpdateActualVideo = async (actualVideo) => {
    await updateActualVideo(roomId, actualVideo);
  };

  const handleOpenPlaylist = () => {
    setShowPlaylist(true);
  };

  const handleAddToPlaylist = async (video) => {
    setShowPlaylist(false);
    await handleUpdatePlaylist(video);
    changeVideoState();
  };

  const handleEndVideo = async () => {
    setShowVideo(false);
    await handleUpdateActualVideo({ id: '', title: '', channel: '', thumbnail: '' });
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
                <VideoInfo {...videoInfo} onShowPlaylist={handleOpenPlaylist} onSkip={handleEndVideo} />
              </VideoInfoContainer>
            </Hidden>
          </PlayerContainer>
          <Hidden smDown>
            <VideoInfo {...videoInfo} onShowPlaylist={handleOpenPlaylist} onSkip={handleEndVideo} />
          </Hidden>
        </>
      )}
      <TransitionModal show={showPlaylist} onClose={() => setShowPlaylist(false)}>
        <Playlist playlist={playlist} onAddToPlaylist={handleAddToPlaylist} />
      </TransitionModal>
    </>
  );
};

VideoPlayer.propTypes = {
  roomId: PropTypes.string,
};

export default VideoPlayer;
