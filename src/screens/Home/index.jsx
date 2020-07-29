import React, { useEffect } from 'react';
import socket from '../../socket';

import VideoPlayer from './components/VideoPlayer';

import {
  Container,
  VideoContainer,
} from './styles';

const Home = () => {
  useEffect(() => {
    socket.emit('room.join', 1);
  }, []);

  return (
    <Container>
      <VideoContainer>
        <VideoPlayer />
      </VideoContainer>
    </Container>
  );
};

export default Home;
