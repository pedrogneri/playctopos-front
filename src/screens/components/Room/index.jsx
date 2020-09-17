import React, { useState, useEffect } from 'react';

import Chat from 'features/components/Chat';
import SimpleRegister from 'features/SimpleRegister';
import VideoPlayer from 'features/VideoPlayer';
import PropTypes from 'prop-types';

import { getUsername } from 'utils/username';

import { Container, VideoContainer, ChatContainer } from './styles';

const Room = ({ id }) => {
  const [showRegister, setShowRegister] = useState();
  const username = getUsername();

  useEffect(() => {
    setShowRegister(!username);
  }, [username]);

  const handleOpenRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <Container>
      <VideoContainer>
        <VideoPlayer roomId={id} />
      </VideoContainer>
      <ChatContainer>
        {showRegister ? (
          <SimpleRegister roomId={id} onClose={handleCloseRegister} />
        ) : (
          <Chat roomId={id} onOpenRegister={handleOpenRegister} />
        )}
      </ChatContainer>
    </Container>
  );
};

Room.propTypes = {
  id: PropTypes.string,
};

export default Room;
