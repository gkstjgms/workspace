import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./views/login/LoginPage";

import { TodoProvider } from "./components/TodoContext";

import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
