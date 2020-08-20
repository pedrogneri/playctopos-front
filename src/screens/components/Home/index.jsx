import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, StyledInput, WelcomeMessage, Button, StyledForm } from './styles';

const Home = () => {
  const history = useHistory();
  const [roomId, setRoomId] = useState('');

  const handleEnterRoom = (event) => {
    event.preventDefault();
    if (roomId.trim()) {
      history.push(`room/${roomId}`);
    }
  };

  const handleChangeRoomId = (event) => {
    setRoomId(event.target.value);
  };

  return (
    <Container>
      <WelcomeMessage>Aroldo</WelcomeMessage>
      <StyledForm onSubmit={handleEnterRoom}>
        <StyledInput value={roomId} onChange={handleChangeRoomId} placeholder="Room name" />
        <Button type="submit">START</Button>
      </StyledForm>
    </Container>
  );
};

export default Home;
