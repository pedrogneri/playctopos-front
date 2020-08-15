import React, { useEffect, useState } from 'react';

import { Hidden } from '@material-ui/core';
import PropTypes from 'prop-types';
import socket from 'socket';

import TransitionModal from 'components/TransitionModal';
import Search from 'screens/components/Search';
import { updateRoom, getVideoUrlByRoom } from 'services/room';

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

  useEffect(() => {
    const handleFetchVideoUrl = () => {
      getVideoUrlByRoom(roomId).then(({ room, url }) => {
        setVideoInfo(room.actualVideo);
        if (!!url) {
          setShowVideo(true);
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

  const handleUpdateRoom = async (video) => {
    await updateRoom(roomId, {
      actualVideo: video,
    });
  };

  const handleOpenPlaylist = () => {
    setShowPlaylist(true);
  };

  const handleAddToPlaylist = async (video) => {
    setShowPlaylist(false);
    await handleUpdateRoom(video);
    changeVideoState();
  };

  const handleEndVideo = async () => {
    setShowVideo(false);
    await handleUpdateRoom({ id: '', title: '', channel: '', thumbnail: '' });
    changeVideoState();
  };

  const handleProgress = ({ playedSeconds }) => {
    setVideoProgress(playedSeconds);
  };

  const handleVideoDuration = (duration) => {
    setVideoDuration(duration);
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
            onClick={() => setShowOverlay(true)}
          >
            <Player
              playing={showVideo}
              url={videoUrl}
              onProgress={handleProgress}
              onDuration={handleVideoDuration}
              onEnded={handleEndVideo}
            />
            {showOverlay && <Overlay value={videoProgress} maxValue={videoDuration} />}

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
        <Search onAddToPlaylist={handleAddToPlaylist} />
      </TransitionModal>
    </>
  );
};

VideoPlayer.propTypes = {
  roomId: PropTypes.string,
};

export default VideoPlayer;
