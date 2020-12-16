import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 14px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.white};
  width: calc(100% - 40px);

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.gray};
  }
  &:-moz-placeholder {
    color: ${({ theme }) => theme.gray};
    opacity: 1;
  }
  &::-moz-placeholder {
    color: ${({ theme }) => theme.gray};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.gray};
  }
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.gray};
  }
  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.primary.default};
`;

export const StyledIconButton = styled(IconButton)`
  padding: 5px !important;
`;
