import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./features/posts/main";
import Dbm from "./features/posts/tab/dbm";
import Gui from "./features/posts/tab/gui";
import Scm from "./features/posts/tab/scm";
import Smm from "./features/posts/tab/smm";
import Tcm from "./features/posts/tab/tcm";

import Navbar from "./app/Navbar";
import React from "react";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/dbm" element={<Dbm />} />
          <Route exact path="/gui" element={<Gui />} />
          <Route exact path="/scm" element={<Scm />} />
          <Route exact path="/smm" element={<Smm />} />
          <Route exact path="/tcm" element={<Tcm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
