import React, { useState } from 'react';

import { changeUsername } from 'utils/username';

import { Container, Button, StyledForm, StyledInput, Label, UserIcon } from './styles';

const SimpleRegister = () => {
  const [username, setUsername] = useState('');

  const handleChangeInput = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    changeUsername(username);
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

export default SimpleRegister;
