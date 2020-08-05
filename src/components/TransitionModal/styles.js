import styled from 'styled-components';
import { Modal } from '@material-ui/core';

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  overflow-y: auto;

  & > div {
    outline: none;
  }
`;
