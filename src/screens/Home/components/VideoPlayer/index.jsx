import React, { useEffect, useState } from 'react';
import socket from '../../../../socket';

import {
  Placeholder,
  Player,
  PlayIcon,
} from './styles';

const VideoPlayer = () => {
  const [videoId, setVideoId] = useState('3K8FpaITAF0');
  const [showVideo, setShowVideo] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  useEffect(() => {
    const handleInitVideo = ({ initial }) => {
      setShowVideo(true);
    };
    socket.on('video.init', handleInitVideo);

    return () => socket.off('video.init', handleInitVideo)
  }, [videoTime]);

  const playVideo = () => {
    const date = new Date().getTime();
    socket.emit('video.init', ({ roomId: 1, initial: date }));
  };

  return (
    !showVideo ? (
      <Placeholder>
        <PlayIcon onClick={playVideo} />
      </Placeholder>
    ) : (
        <Player
          allow="autoplay"
          title="Youtube video player"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&start=${videoTime}`}
        />
      )
  );
};

export default VideoPlayer;
