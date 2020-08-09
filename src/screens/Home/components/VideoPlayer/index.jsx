import React, { useEffect, useState } from 'react';

import socket from 'socket';

import TransitionModal from 'components/TransitionModal';
import Search from 'screens/Search';
import { getRoom, updateRoom } from 'services/room';

import { Placeholder, Player, PlayIcon } from './styles';

const VideoPlayer = () => {
  const [videoId, setVideoId] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  const calculateVideoTime = (lastPlayDate) => {
    setVideoTime(Math.round((new Date().getTime() - lastPlayDate) / 1000));
  };

  useEffect(() => {
    getRoom('5f28c42f6239e613afc82b12').then(({ actualVideoId, lastPlayDate }) => {
      if (actualVideoId && lastPlayDate) {
        setVideoId(actualVideoId);
        setShowVideo(true);
        calculateVideoTime(lastPlayDate);
      }
    });

    const handleInitVideo = ({ actualVideoId, lastPlayDate }) => {
      setVideoId(actualVideoId);
      setShowVideo(true);
      calculateVideoTime(lastPlayDate);
    };
    socket.on('video.init', handleInitVideo);

    return () => socket.off('video.init', handleInitVideo);
  }, []);

  const playVideo = (videoId) => {
    const date = new Date().getTime();
    socket.emit('video.init', { roomId: '5f28c42f6239e613afc82b12', actualVideoId: videoId, lastPlayDate: date });
  };

  const handleUpdateRoom = (videoId, playDate) => {
    updateRoom('5f28c42f6239e613afc82b12', {
      actualVideoId: videoId,
      lastPlayDate: playDate,
    });
  };

  const handleOpenPlaylist = () => {
    setShowPlaylist(true);
  };

  const handleAddToPlaylist = (id) => {
    handleUpdateRoom(id, new Date().getTime());
    setShowPlaylist(false);
    playVideo(id);
  };

  const handleEndVideo = () => {
    handleUpdateRoom('', '');
    setShowVideo(false);
  };

  return (
    <>
      {!showVideo ? (
        <Placeholder>
          <PlayIcon onClick={handleOpenPlaylist} />
        </Placeholder>
      ) : (
        <>
          <Player
            onEnded={handleEndVideo}
            playing={showVideo}
            url={`https://www.youtube.com/embed/${videoId}?controls=0&rel=0&cc_load_policy=0&showinfo=0&start=${videoTime}`}
          />
          <button onClick={handleEndVideo}>Clean</button>
        </>
      )}
      <TransitionModal show={showPlaylist} onClose={() => setShowPlaylist(false)}>
        <Search onAddToPlaylist={handleAddToPlaylist} />
      </TransitionModal>
    </>
  );
};

export default VideoPlayer;
