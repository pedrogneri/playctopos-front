import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import Toast from '..';

const ToastContext = React.createContext({});

type Props = {
  children: React.ReactNode,
}

type ToastContent = {
  message: string,
  type: 'success' | 'info' | 'warning' | 'error',
}

export const ToastProvider = ({ children }: Props) => {
  const [toasts, setToast] = useState<{ id: string, content: ToastContent }[]>([]);

  const generateID = () => {
    const first = String(Math.random() * 46656);
    const second = String(Math.random() * 46656);

    return first + second;
  };

  const add = (content: ToastContent) => {
    const id = generateID();
    setToast([...toasts, { id, content }]);
  };

  const remove = (id: string) => {
    setToast(toasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ add, remove }}>
      {createPortal(
        toasts.map(toast => (
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

export default ToastContext;
