import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';

import PropTypes from 'prop-types';

import Chat from 'features/components/Chat';
import SimpleRegister from 'features/components/SimpleRegister';
import VideoPlayer from 'features/components/VideoPlayer';
import { getUsername } from 'utils/username';

import { Container, VideoContainer, ChatContainer } from './styles';

const Room = ({ id, name }) => {
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
    <>
      <Helmet title={name} />
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
    </>
  );
};

Room.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Room;
