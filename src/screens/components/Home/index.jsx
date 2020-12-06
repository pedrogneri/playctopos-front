import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Container, StyledInput, WelcomeMessage, Button, StyledForm } from './styles';

const Home = ({ onSubmitRoomName }) => {
  const [roomName, setRoomName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitRoomName(roomName);
    setRoomName('');
  };

  const handleChangeRoomId = (event) => {
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

Home.propTypes = {
  onSubmitRoomName: PropTypes.func,
};

export default Home;
