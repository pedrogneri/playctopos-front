import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import Toast from '..';

const ToastContext = React.createContext({});

export const ToastProvider = ({ children }) => {
  const [toasts, setToast] = useState([]);

  const generateID = () => {
    const first = String(Math.random() * 46656);
    const second = String(Math.random() * 46656);

    return first + second;
  };

  const add = (content) => {
    const id = generateID();
    setToast([...toasts, { id, content }]);
  };

  const remove = (id) => {
    setToast(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ add, remove }}>
      {createPortal(
        toasts.map((toast) => (
          <Toast
            key={toast.id}
            remove={() => remove(toast.id)}
            message={toast.content.message || 'Error'}
            type={toast.content.type}
          />
        )),
        document.body,
      )}
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.element,
};

export default ToastContext;
