import React, { useState } from 'react';

import {
  Container, StyledInput, WelcomeMessage, Button, StyledForm,
} from './styles';

type Props = {
  onSubmitRoomName: (name: string) => void,
}

const Home = ({ onSubmitRoomName }: Props) => {
  const [roomName, setRoomName] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitRoomName(roomName);
    setRoomName('');
  };

  const handleChangeRoomId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  return (
    <Container>
      <WelcomeMessage>Playctopos</WelcomeMessage>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput value={roomName} onChange={handleChangeRoomId} placeholder="Room name" />
        <Button type="submit">Enter</Button>
      </StyledForm>
    </Container>
  );
};

export default Home;
