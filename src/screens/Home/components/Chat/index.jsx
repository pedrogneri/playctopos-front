import React, { useEffect, useState } from 'react';
import socket from '../../../../socket';

import {
  Container,
  Footer,
  MessagesArea,
  StyledInput,
  Message,
  InputContainer,
  SendIcon,
  SubmitButton,
} from './styles';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const handleSendMessage = ({ message }) => {
      setMessageList([...messageList, message]);
    };
    socket.on('room.message', handleSendMessage);

    return () => socket.off('room.message', handleSendMessage)
  }, [message, messageList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(message.trim()) {
      socket.emit('room.message', { roomId: 1, message });
    }
    setMessage('');
  };

  const handleChangeInput = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Container>
      <MessagesArea>
        {messageList.map((message) => (
          <Message>
            <b>User: </b>
            {message}
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
              value={message}
            />
            <SubmitButton type="submit">
              <SendIcon />
            </SubmitButton>
          </InputContainer>
        </form> 
      </Footer>
    </Container>
  );
};

export default Chat;
