import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';

import { Hidden } from '@material-ui/core';
import { useStoreState } from 'easy-peasy';
import PropTypes from 'prop-types';
import socket from 'socket';

import ExpandButton from 'components/ExpandButton';
import TransitionModal from 'components/TransitionModal';
import Chat from 'features/components/Chat';
import Playlist from 'features/components/Playlist';
import SimpleRegister from 'features/components/SimpleRegister';
import VideoPlayer from 'features/components/VideoPlayer';
import { updatePlaylist } from 'services/room';
import { getUsername } from 'utils/username';

import { Container, VideoContainer, ChatContainer, PlaylistContainer } from './styles';

const Room = ({ id, name }) => {
  const [showRegister, setShowRegister] = useState();
  const username = getUsername();
  const playlist = useStoreState((state) => state.playlist);
  const [openPlaylist, setOpenPlaylist] = useState(true);
  const [openChat, setOpenChat] = useState(true);

  useEffect(() => {
    setShowRegister(!username);
  }, [username]);

  const handleOpenRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  const handleOpenPlaylist = () => {
    setOpenPlaylist(true);
  };

  const handleUpdatePlaylist = async (playlist) => {
    await updatePlaylist(id, playlist);
    socket.emit('video.changeState', id);
  };

  return (
    <>
      <Helmet title={name} />
      <Container>
        <Hidden smUp>
          <TransitionModal show={openPlaylist} onClose={() => setOpenPlaylist(false)}>
            <Playlist playlist={playlist} onUpdatePlaylist={handleUpdatePlaylist} />
          </TransitionModal>
        </Hidden>

        <Hidden xsDown>
          <PlaylistContainer show={openPlaylist}>
            <ExpandButton
              componentName="playlist"
              fromLeft
              expanded={openPlaylist}
              switchExpanded={() => setOpenPlaylist(!openPlaylist)}
            />
            <Playlist playlist={playlist} onUpdatePlaylist={handleUpdatePlaylist} />
          </PlaylistContainer>
        </Hidden>

        <VideoContainer>
          <VideoPlayer roomId={id} onShowPlaylist={handleOpenPlaylist} />
        </VideoContainer>
        <ChatContainer show={openChat}>
          <Hidden xsDown>
            <ExpandButton
              componentName="chat"
              fromRight
              expanded={openChat}
              switchExpanded={() => setOpenChat(!openChat)}
            />
          </Hidden>
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
