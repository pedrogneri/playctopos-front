import React from 'react';

import {
  Container,
  InputContainer,
  MessagesArea,
  StyledInput,
} from './styles';

const Chat = () => {
  return (
    <Container>
      <MessagesArea>
      </MessagesArea>
      <InputContainer>
        <StyledInput type="text" placeholder="Type a message..." />
      </InputContainer>
    </Container>
  );
};

export default Chat;
