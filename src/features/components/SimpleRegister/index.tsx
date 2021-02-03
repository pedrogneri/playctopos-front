import React, {
  useState, useEffect, ChangeEvent, FormEvent,
} from 'react';

import { sendWarn } from 'services/chat';
import { changeUsername, getUsername } from 'utils/username';

import {
  Container, Button, StyledForm, StyledInput, Label, UserIcon,
} from './styles';

type Props = {
  roomId: string;
  onClose: () => void;
}

const SimpleRegister = ({ roomId, onClose }: Props) => {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    setUsername(getUsername());
  }, []);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const oldUsername = getUsername() || 'Someone';
    if (oldUsername !== username && username?.trim()) {
      sendWarn(roomId, `${oldUsername} changed his name to ${username}`);
      changeUsername(username.trim());
    }
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

export default SimpleRegister;
