import React, { Component } from "react";
import Drag from "./img/Drag";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div> 
        <h1 className="terrarium-text">My Terrarium</h1>
        <p className="terrarium-text">with react</p>
        <Drag />
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
}

export default App;
