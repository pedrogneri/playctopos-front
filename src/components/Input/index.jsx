import React from 'react';

import PropTypes from 'prop-types';

import { InputContainer, StyledInput, StyledIconButton } from './styles';

const Input = ({ inputRef, onClick, endAdornment, ...inputProps }) => {
  return (
    <InputContainer>
      <StyledInput ref={inputRef} {...inputProps} />
      <StyledIconButton type={onClick ? 'button' : 'submit'} onClick={onClick}>
        {endAdornment}
      </StyledIconButton>
    </InputContainer>
  );
};

Input.propTypes = {
  onClick: PropTypes.func,
  endAdornment: PropTypes.node,
  inputRef: PropTypes.object,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
