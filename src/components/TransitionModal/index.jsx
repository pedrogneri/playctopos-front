import React from 'react';

import { Backdrop, Fade } from '@material-ui/core';
import PropTypes from 'prop-types';

import { StyledModal as Modal } from './styles';

const TransitionModal = ({ children, show, onClose }) => (
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

TransitionModal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TransitionModal;
