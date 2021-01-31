import React, { useEffect, useRef } from 'react';

import { Alert } from '@material-ui/lab';

import { ToastContainer } from './styles';

type Props = {
  message?: string,
  remove: () => void,
  type: 'success' | 'info' | 'warning' | 'error',
}

const Toast = ({ message, remove, type }: Props) => {
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

export default Toast;
