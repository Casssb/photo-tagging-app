import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
