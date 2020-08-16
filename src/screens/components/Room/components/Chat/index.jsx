import React, { useEffect, useState, useRef, useMemo } from 'react';

import PropTypes from 'prop-types';
import socket from 'socket';

import { getRandomColor } from 'utils/colors';
import { getUsername } from 'utils/username';

import {
  Container,
  Footer,
  MessagesArea,
  StyledInput,
  Message,
  InputContainer,
  SendIcon,
  ChatHeader,
  UserIcon,
  StyledIconButton,
} from './styles';

const Chat = ({ roomId, onOpenRegister }) => {
  const chatRef = useRef();

  const username = getUsername();
  const color = useMemo(() => {
    return getRandomColor();
  }, []);

  const [message, setMessage] = useState({ username, color, value: '' });
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const handleSendMessage = ({ message }) => {
      setMessageList([...messageList, message]);
      scrollChatToBottom();
    };
    socket.on('room.message', handleSendMessage);

    return () => socket.off('room.message', handleSendMessage);
  }, [message, messageList]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.value.trim()) {
      socket.emit('room.message', { roomId, message });
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
        {messageList.map(({ username, color, value }, index) => (
          <Message key={index.toString()} color={color}>
            <b>{`${username}: `}</b>
            {value}
          </Message>
        ))}
      </MessagesArea>
      <Footer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <StyledInput
              type="text"
              placeholder="Type a message..."
              onChange={handleChangeInput}
              value={message.value}
            />
            <StyledIconButton type="submit">
              <SendIcon />
            </StyledIconButton>
          </InputContainer>
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
