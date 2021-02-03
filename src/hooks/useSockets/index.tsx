import React, { createContext, useContext } from 'react';

import { useStoreActions } from 'easy-peasy';
import socket from 'socket';
import { Message } from 'models/message';
import { Store } from 'store';
import { sendMessage } from 'services/chat';

type ContextValue = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleSendMessage: Function;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const WebSocketContext = createContext<ContextValue>({ handleSendMessage: () => {} });

export const useSockets = () => useContext(WebSocketContext);

type Props = {
  children: React.ReactNode,
}

const WebSocketContextProvider = ({ children }: Props) => {
  const addMessageAction = useStoreActions<Store>(({ addMessage }) => addMessage);

  const handleSendMessage = (roomId: string, message: Message) => {
    sendMessage(roomId, message);
  };

  socket.on('room.message', ({ message }: { message: Message }) => {
    addMessageAction(message);
  });

  return (
    <WebSocketContext.Provider value={{ handleSendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketContextProvider;
