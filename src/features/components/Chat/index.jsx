import React, { useEffect, useState, useRef, useMemo } from 'react';

import { useStoreState } from 'easy-peasy';
import PropTypes from 'prop-types';
import socket from 'socket';

import Input from 'components/Input';
import { useSockets } from 'hooks/useSockets';
import { getRandomColor } from 'utils/colors';
import { getUsername } from 'utils/username';

import { Container, Footer, MessagesArea, Message, SendIcon, ChatHeader, UserIcon, Warn } from './styles';

const Chat = ({ roomId, onOpenRegister }) => {
  const chatRef = useRef();
  const inputRef = useRef();
  const sockets = useSockets();
  const messages = useStoreState((state) => state.messages);

  const username = getUsername();
  const color = useMemo(() => getRandomColor(), []);

  const [message, setMessage] = useState({ username, color, value: '' });

  useEffect(() => {
    scrollChatToBottom();
    socket.on('room.message', scrollChatToBottom);

    return () => socket.off('room.message', scrollChatToBottom);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    inputRef.current.focus();

    if (message.value.trim()) {
      sockets.handleSendMessage(roomId, message);
    }
    setMessage({ ...message, value: '' });
  };

  const handleChangeInput = (event) => {
    setMessage({ ...message, value: event.target.value });
  };

  const scrollChatToBottom = () => {
    const scroll = chatRef.current.scrollHeight - chatRef.current.clientHeight;
    chatRef.current.scrollTo(0, scroll);
  };

  return (
    <Container>
      <ChatHeader>
        <h4>Chat</h4>
        <UserIcon onClick={onOpenRegister} />
      </ChatHeader>
      <MessagesArea ref={chatRef}>
        {messages.map(({ username, type, color, value }, index) =>
          type === 'warn' ? (
            <Warn key={index.toString()}>{value}</Warn>
          ) : (
            <Message key={index.toString()} color={color}>
              <b>{`${username}: `}</b>
              {value}
            </Message>
          ),
        )}
      </MessagesArea>
      <Footer>
        <form onSubmit={handleSubmit}>
          <Input
            inputRef={inputRef}
            placeholder="Type a message..."
            onChange={handleChangeInput}
            value={message.value}
            endAdornment={<SendIcon />}
          />
        </form>
      </Footer>
    </Container>
  );
};

Chat.propTypes = {
  roomId: PropTypes.string.isRequired,
  onOpenRegister: PropTypes.func.isRequired,
};

export default Chat;
