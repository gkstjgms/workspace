import { Routes, Route } from "react-router-dom";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";

const routes = () => {
  return (
    <Routes>
      <Route path="/page1" element={<Page1/>} />
      <Route path="/page2" element={<Page2/>} />
    </Routes>
  )
}

export default routes;