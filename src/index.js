import React from 'react';
import ReactDOM from 'react-dom';

import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'theme';

import { ToastProvider } from 'components/Toast/toastContext';

import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
