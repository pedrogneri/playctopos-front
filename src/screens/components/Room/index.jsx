import React, { useEffect } from 'react';

import socket from 'socket';

import Chat from './components/Chat';
import VideoPlayer from './components/VideoPlayer';
import { Container, VideoContainer, ChatContainer } from './styles';

const Room = () => {
  useEffect(() => {
    socket.emit('room.join', '5f28c42f6239e613afc82b12');
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

export default Room;