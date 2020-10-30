import React, { createContext, useContext } from 'react';

import { useStoreActions } from 'easy-peasy';
import PropTypes from 'prop-types';
import socket from 'socket';

import { sendMessage } from 'services/chat';

const WebSocketContext = createContext(null);

export const useSockets = () => useContext(WebSocketContext);

const WebSocketContextProvider = ({ children }) => {
  const addMessage = useStoreActions(({ addMessage }) => addMessage);

  const handleSendMessage = (roomId, message) => {
    sendMessage(roomId, message);
  };

  socket.on('room.message', ({ message }) => {
    addMessage(message);
  });

  return <WebSocketContext.Provider value={{ handleSendMessage }}>{children}</WebSocketContext.Provider>;
};

WebSocketContextProvider.propTypes = {
  children: PropTypes.node,
};

export default WebSocketContextProvider;
