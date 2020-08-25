import React, { useEffect, useRef } from 'react';

import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';

import { ToastContainer } from './styles';

const Toast = ({ message, remove, type }) => {
  const removeRef = useRef(remove);

  useEffect(() => {
    const duration = 3000;
    const id = setTimeout(() => removeRef.current(), duration);

    return () => clearTimeout(id);
  }, []);

  return (
    <ToastContainer>
      <Alert severity={type}>{message || 'Error'}</Alert>
    </ToastContainer>
  );
};

Toast.propTypes = {
  message: PropTypes.string,
  remove: PropTypes.any,
  type: PropTypes.string,
};

export default Toast;
