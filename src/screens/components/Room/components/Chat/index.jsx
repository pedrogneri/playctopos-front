import React, { useEffect, useState, useRef } from 'react';

import { IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import socket from 'socket';

import { Container, Footer, MessagesArea, StyledInput, Message, InputContainer, SendIcon } from './styles';

const Chat = ({ roomId }) => {
  const chatRef = useRef();
  const [message, setMessage] = useState('');
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
    if (message.trim()) {
      socket.emit('room.message', { roomId, message });
    }
    setMessage('');
  };

  const handleChangeInput = (event) => {
    setMessage(event.target.value);
  };

  const scrollChatToBottom = () => {
    const scroll = chatRef.current.scrollHeight - chatRef.current.clientHeight;
    chatRef.current.scrollTo(0, scroll);
  };

  return (
    <Container>
      <MessagesArea ref={chatRef}>
        {messageList.map((message, index) => (
          <Message key={index.toString()}>
            <b>User: </b>
            {message}
          </Message>
        ))}
      </MessagesArea>
      <Footer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <StyledInput type="text" placeholder="Type a message..." onChange={handleChangeInput} value={message} />
            <IconButton type="submit">
              <SendIcon />
            </IconButton>
          </InputContainer>
        </form>
      </Footer>
    </Container>
  );
};

Chat.propTypes = {
  roomId: PropTypes.string,
};

export default Chat;
