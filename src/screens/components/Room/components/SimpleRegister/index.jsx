import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { changeUsername, getUsername } from 'utils/username';

import { Container, Button, StyledForm, StyledInput, Label, UserIcon } from './styles';

const SimpleRegister = ({ onClose }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(getUsername());
  }, []);

  const handleChangeInput = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    changeUsername(username);
    onClose();
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <UserIcon />
        <Label>Type a username: </Label>
        <StyledInput value={username} onChange={handleChangeInput} />
        <Button type="submit">Let&apos;s party!</Button>
      </StyledForm>
    </Container>
  );
};

SimpleRegister.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SimpleRegister;
