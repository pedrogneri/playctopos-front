import React, { useEffect } from 'react';
import socket from '../../socket';

import VideoPlayer from './components/VideoPlayer';
import Chat from './components/Chat';
import TransitionModal from '../../components/TransitionModal';
import Search from '../Search';

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
    <>
    <Container>
      <VideoContainer>
        <VideoPlayer />
      </VideoContainer>
      <ChatContainer>
        <Chat />
      </ChatContainer>
    </Container>
    <TransitionModal show={true} onClose={() => {}}>
      <Search />
    </TransitionModal>
    </>
  );
};

export default Home;
