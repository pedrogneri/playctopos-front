import React, { useEffect, useState } from 'react';
import socket from '../../../../socket';

import TransitionModal from '../../../../components/TransitionModal';
import Search from '../../../Search';

import { getRoom, updateRoom } from '../../../../services/room'; 

import {
  Placeholder,
  Player,
  PlayIcon,
} from './styles';

const VideoPlayer = () => {
  const [videoId, setVideoId] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  useEffect(() => {
    getRoom('5f28c42f6239e613afc82b12').then(({ actualVideoId, lastPlayDate }) => {
      setVideoId(actualVideoId);
      setShowVideo(true);
      setVideoTime(Math.round((new Date().getTime() - lastPlayDate) / 1000));
    });

    const handleInitVideo = ({ actualVideoId, lastPlayDate }) => {
      setVideoId(actualVideoId);
      setVideoTime(lastPlayDate);
      setShowVideo(true);
    };
    socket.on('video.init', handleInitVideo);

    return () => socket.off('video.init', handleInitVideo)
  }, []);

  const playVideo = () => {
    const date = new Date().getTime();
    socket.emit('video.init', ({ roomId: 1, initial: date }));
  };

  const handleOpenPlaylist = () => {
    setShowPlaylist(true);
  };

  const handleAddToPlaylist = (id) => {
    updateRoom('5f28c42f6239e613afc82b12', {
      actualVideoId: id,
      lastPlayDate: new Date().getTime(),
    });
    setVideoId(id);
    setShowPlaylist(false);
    playVideo();
  };

  return (
    <>
    {!showVideo ? (
        <Placeholder>
          <PlayIcon onClick={handleOpenPlaylist} />
        </Placeholder>
      ) : (
        <Player
          allow="autoplay"
          title="Youtube video player"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&start=${videoTime}`}
        />
      )}
      <TransitionModal show={showPlaylist} onClose={() => setShowPlaylist(false)}>
        <Search onAddToPlaylist={handleAddToPlaylist} />
      </TransitionModal>
    </>
  );
};

export default VideoPlayer;
