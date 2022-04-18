import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./main/App";
import Terrarium from "./main/routes/1-terrarium/App";
import Typinggame from "./main/routes/2-typinggame/App"
import Spacegame from "./main/routes/3-spacegame/App";
import Bank from "./main/routes/4-bank/App";
import Dashboard from "./main/routes/4-bank/dashboard/Dashboard";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="terrarium" element={<Terrarium />} />
      <Route path="typinggame" element={<Typinggame />} />
      <Route path="spacegame" element={<Spacegame />} />
      <Route path="bank" element={<Bank />} />
      <Route path="bank/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
