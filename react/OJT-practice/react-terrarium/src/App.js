import React from "react";
import Plants from "./img/Plants";
import "./App.css";

function App() {
  return (
    <div>
      <h1>My Terrarium</h1>
      <Plants />
      <div id="terrarium">
        <div className="jar-top"></div>
        <div className="jar-walls">
          <div className="jar-glossy-long"></div>
          <div className="jar-glossy-short"></div>
        </div>
        <div className="dirt"></div>
        <div className="jar-bottom"></div>
      </div>
    </div>
  );
}

export default App;
