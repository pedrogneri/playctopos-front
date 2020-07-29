import React, { useEffect, useState } from 'react';
import socket from '../../socket';

import {
  Container,
  VideoPlayer,
  VideoContainer,
  VideoMask,
} from './styles';

socket.on('connect', () => {
  console.log('[IO] Connect => New connection');
});

const Home = () => {
  const [videoId, setVideoId] = useState('TOypSnKFHrE');
  const [showVideo, setShowVideo] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  useEffect(() => {
    socket.emit('room.join', 1);
    const handleInitVideo = ({ roomId, initial }) => {
      const actualDate = new Date();
      setShowVideo(true);
      setVideoTime(Math.abs(actualDate.getTime() - initial));
    };
    socket.on('video.init', handleInitVideo);

    return () => socket.off('video.init', handleInitVideo)
  }, [videoTime]);

  const playVideo = () => {
    const date = new Date().getTime();
    socket.emit('video.init', ({ roomId: 1, initial: date }));
  };

  return (
    <Container>
      <VideoContainer>
        {!showVideo ? (
          <VideoMask />
        ) : (
          <VideoPlayer
            allow="autoplay"
            title="Youtube video player"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&start=${videoTime}`}>
          </VideoPlayer>
        )}
        <button type="button" onClick={playVideo}>Clique para começar o vídeo</button>
      </VideoContainer>
    </Container>
  );
};

export default Home;
