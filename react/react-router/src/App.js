import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostMain from "./page/post/PostMain";
import PostView from "./page/post/PostView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/postView/:no" element={<PostView />} />
          <Route path="/" element={<PostMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
