import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from './TodoContext';

import { BrowserRouter as Routes, Route, RouteComponentProps } from 'react-router-dom';

import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

import TodoLoginTemplate from './components/login/TodoLoginTemplate';
import TodoLogin from './components/login/TodoLogin';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;
const App = () => {
    return (
        <TodoProvider>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </TodoProvider>
    );
};

export default App;
