import React, { ReactElement } from 'react';

import { Backdrop, Fade } from '@material-ui/core';

import { StyledModal as Modal } from './styles';

type Props = {
  children: ReactElement,
  show: boolean,
  onClose: () => void,
}

const TransitionModal = ({ children, show, onClose }: Props) => (
  <Modal
    open={show}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={show}>{children}</Fade>
  </Modal>
);

export default TransitionModal;
