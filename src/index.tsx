import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import App from './App';

const GlobalStyles = () => (
  <Global
    styles={`
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #888;
        height: 5px;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
        width: 2px;
      }
    `}
  />
);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyles />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
