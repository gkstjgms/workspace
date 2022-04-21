import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main";
import Terrarium from "../pages/projects/1-terrarium/App";
import Typinggame from "../pages/projects/2-typinggame/App";
import Spacegame from "../pages/projects/3-spacegame/App";
import Bank from "../pages/projects/4-bank/App";
import Bank_dashboard from "../pages/projects/4-bank/dashboard/Dashboard";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/terrarium" element={<Terrarium />} />
      <Route path="/typinggame" element={<Typinggame />} />
      <Route path="/spacegame" element={<Spacegame />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/bank/dashboard" element={<Bank_dashboard />} />
    </Routes>
  );
};

export default routes;
