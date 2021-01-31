import React from 'react';

import { InputContainer, StyledInput, StyledIconButton } from './styles';

type Props = {
  inputRef: React.RefObject<HTMLInputElement>,
  endAdornment?: React.ReactNode,
  value: any,
  placeholder: string,
  onChange: () => void,
  onBlur: () => void,
  onClick?: () => void,
}

const Input = ({
  inputRef, onClick, endAdornment, ...inputProps
}: Props) => (
  <InputContainer>
    <StyledInput ref={inputRef} {...inputProps} />
    <StyledIconButton type={onClick ? 'button' : 'submit'} onClick={onClick}>
      {endAdornment}
    </StyledIconButton>
  </InputContainer>
);

export default Input;
