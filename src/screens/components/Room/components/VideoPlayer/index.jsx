import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import socket from 'socket';

import TransitionModal from 'components/TransitionModal';
import Search from 'screens/components/Search';
import { updateRoom, getVideoUrlByRoom } from 'services/room';

import { Placeholder, Player, PlayIcon } from './styles';

const VideoPlayer = ({ roomId }) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

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

  return (
    <>
      {!showVideo ? (
        <Placeholder>
          <PlayIcon onClick={handleOpenPlaylist} />
        </Placeholder>
      ) : (
        <>
          <Player onEnded={handleEndVideo} playing={showVideo} url={videoUrl} />
          <button onClick={handleEndVideo}>Clear</button>
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
