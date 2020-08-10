import React from 'react';

import PropTypes from 'prop-types';

import Chat from './components/Chat';
import VideoPlayer from './components/VideoPlayer';
import { Container, VideoContainer, ChatContainer } from './styles';

const Room = (id) => (
  <Container>
    <VideoContainer>
      <VideoPlayer />
    </VideoContainer>
    <ChatContainer>
      <Chat />
    </ChatContainer>
  </Container>
);

Room.propTypes = {
  id: PropTypes.string,
};

export default Room;
