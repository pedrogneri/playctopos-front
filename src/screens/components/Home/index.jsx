import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Container, StyledInput, WelcomeMessage, Button, StyledForm } from './styles';

const Home = ({ onSubmitRoomId }) => {
  const [roomId, setRoomId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitRoomId(roomId);
  };

  const handleChangeRoomId = (event) => {
    setRoomId(event.target.value);
  };

  return (
    <Container>
      <WelcomeMessage>Aroldo</WelcomeMessage>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput value={roomId} onChange={handleChangeRoomId} placeholder="Room name" />
        <Button type="submit">START</Button>
      </StyledForm>
    </Container>
  );
};

Home.propTypes = {
  onSubmitRoomId: PropTypes.func,
};

export default Home;
