import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './TodoContext';

import { BrowserRouter } from 'react-router-dom';

import Routes from './pages/Routes';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;
const App = () => {
    return (
        <BrowserRouter>
            <TodoProvider>
                <GlobalStyle />
                <Routes />
            </TodoProvider>
        </BrowserRouter>
    );
};

export default App;
