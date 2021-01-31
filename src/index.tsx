import React from 'react';
import ReactDOM from 'react-dom';

import { StoreProvider } from 'easy-peasy';
import Routes from 'routes';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'theme';

import { ToastProvider } from 'components/Toast/toastContext';
import WebSocketContextProvider from 'hooks/useSockets';

import { GlobalStyle } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <WebSocketContextProvider>
        <ThemeProvider theme={Theme}>
          <>
            <GlobalStyle />
            <ToastProvider>
              <Routes />
            </ToastProvider>
          </>
        </ThemeProvider>
      </WebSocketContextProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
