import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          headings: { fontFamily: ` 'VT323', monospace;` },
          colorScheme: 'dark',
        }}
      >
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
