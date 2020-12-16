import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';

import { useStoreState } from 'easy-peasy';
import PropTypes from 'prop-types';
import socket from 'socket';

import ExpandButton from 'components/ExpandButton';
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
  const [openPlaylist, setOpenPlaylist] = useState(false);
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
        <PlaylistContainer show={openPlaylist}>
          <ExpandButton
            componentName="playlist"
            fromLeft
            expanded={openPlaylist}
            switchExpanded={() => setOpenPlaylist(!openPlaylist)}
          />
          <Playlist
            expanded={openPlaylist}
            switchExpanded={() => setOpenPlaylist(!openPlaylist)}
            playlist={playlist}
            onUpdatePlaylist={handleUpdatePlaylist}
          />
        </PlaylistContainer>
        <VideoContainer>
          <VideoPlayer roomId={id} onShowPlaylist={handleOpenPlaylist} />
        </VideoContainer>
        <ChatContainer show={openChat}>
          <ExpandButton
            componentName="chat"
            fromRight
            expanded={openChat}
            switchExpanded={() => setOpenChat(!openChat)}
          />
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
