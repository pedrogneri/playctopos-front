import React, { useEffect } from 'react';
import socket from '../../socket';

import VideoPlayer from './components/VideoPlayer';
import Chat from './components/Chat';

import {
  Container,
  VideoContainer,
  ChatContainer,
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
      <ChatContainer>
        <Chat />
      </ChatContainer>
    </Container>
  );
};

export default Home;
