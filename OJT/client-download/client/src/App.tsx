import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/login/login";
import Main from "./features/posts/main";
import Dbm from "./features/posts/tab/dbm";
import Gui from "./features/posts/tab/gui";
import Scm from "./features/posts/tab/scm";
import Smm from "./features/posts/tab/smm";
import Tcm from "./features/posts/tab/tcm";

import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/dbm" element={<Dbm />} />
        <Route path="/gui" element={<Gui />} />
        <Route path="/scm" element={<Scm />} />
        <Route path="/smm" element={<Smm />} />
        <Route path="/tcm" element={<Tcm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
