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
  const [videoProgress, setVideoProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const handleFetchVideoUrl = () => {
      getVideoUrlByRoom(roomId).then(({ url }) => {
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

  const handleUpdateRoom = async (videoId) => {
    await updateRoom(roomId, {
      actualVideoId: videoId,
    });
  };

  const handleOpenPlaylist = () => {
    setShowPlaylist(true);
  };

  const handleAddToPlaylist = async (id) => {
    setShowPlaylist(false);
    await handleUpdateRoom(id);
    changeVideoState();
  };

  const handleEndVideo = async () => {
    setShowVideo(false);
    await handleUpdateRoom('');
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
          <PlayerContainer onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
            <Player
              playing={showVideo}
              url={videoUrl}
              onProgress={handleProgress}
              onDuration={handleVideoDuration}
              onEnded={handleEndVideo}
            />
            {showOverlay && <Overlay value={videoProgress} maxValue={videoDuration} />}

            <Hidden smUp>
              <VideoInfoContainer show={showOverlay}>
                <VideoInfo
                  title="Vale nada vale tudo"
                  channel="Ednaldo Pereira"
                  thumbnail="https://i.ytimg.com/vi/2lkBFpyo1Mc/hqdefault.jpg"
                  onShowPlaylist={handleOpenPlaylist}
                  onSkip={handleEndVideo}
                />
              </VideoInfoContainer>
            </Hidden>
          </PlayerContainer>
          <Hidden smDown>
            <VideoInfo
              title="Vale nada vale tudo"
              channel="Ednaldo Pereira"
              thumbnail="https://i.ytimg.com/vi/2lkBFpyo1Mc/hqdefault.jpg"
              onShowPlaylist={handleOpenPlaylist}
              onSkip={handleEndVideo}
            />
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
