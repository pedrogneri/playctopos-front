import { Modal } from '@material-ui/core';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  overflow-y: auto;

  & > div {
    outline: none;
  }
`;
