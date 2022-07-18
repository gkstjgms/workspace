import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/login/LoginPage";
import MainPage from "./views/main/MainPage";

import { TodoProvider } from "./components/TodoContext";

import { createGlobalStyle } from "styled-components";
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
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
};

export default App;
