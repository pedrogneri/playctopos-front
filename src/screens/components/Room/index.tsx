import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';

import { Hidden } from '@material-ui/core';
import socket from 'socket';

import ExpandButton from 'components/ExpandButton';
import TransitionModal from 'components/TransitionModal';
import Chat from 'features/components/Chat';
import Playlist from 'features/components/Playlist';
import SimpleRegister from 'features/components/SimpleRegister';
import VideoPlayer from 'features/components/VideoPlayer';
import { updatePlaylist } from 'services/room';
import { getUsername } from 'utils/username';
import { Video } from 'models/video';

import {
  Container, VideoContainer, ChatContainer, PlaylistContainer,
} from './styles';

type Props = {
  id: string,
  name: string,
}

const Room = ({ id, name }: Props) => {
  const [showRegister, setShowRegister] = useState(false);
  const username = getUsername();
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

  const handleClosePlaylist = () => {
    setOpenPlaylist(false);
  };

  const handleUpdatePlaylist = async (playlist: Video[]) => {
    await updatePlaylist(id, playlist);
    socket.emit('video.changeState', id);
  };

  return (
    <>
      <Helmet title={name} />
      <Container>
        <Hidden smUp>
          <TransitionModal show={openPlaylist} onClose={handleClosePlaylist}>
            <Playlist onUpdatePlaylist={handleUpdatePlaylist} onClose={handleClosePlaylist} />
          </TransitionModal>
        </Hidden>

        <Hidden xsDown>
          <PlaylistContainer $show={openPlaylist}>
            <ExpandButton
              componentName="playlist"
              left
              expanded={openPlaylist}
              switchExpanded={() => setOpenPlaylist(!openPlaylist)}
            />
            <Playlist onUpdatePlaylist={handleUpdatePlaylist} onClose={handleClosePlaylist} />
          </PlaylistContainer>
        </Hidden>

        <VideoContainer>
          <VideoPlayer roomId={id} onShowPlaylist={handleOpenPlaylist} />
        </VideoContainer>
        <ChatContainer $show={openChat}>
          <Hidden xsDown>
            <ExpandButton
              componentName="chat"
              right
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

export default Room;
