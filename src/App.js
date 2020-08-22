import React from 'react';

import Routes from 'routes';

import { ToastProvider } from 'components/Toast/toastContext';

function App() {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
}

export default App;
