import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./main/App";
import Terrarium from "./main/routes/1-terrarium/App";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="terrarium" element={<Terrarium />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
