import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Typing game!</h1>
        <p>
          Practice your typing skills with a quote from{" "}
          <cite>
            <b>Sherlock Homes</b>
          </cite>
          . When you press <b>spacebar</b>, <mark>highlight</mark> goes to next
          word.
        </p>
        <p>
          Click&nbsp;
          <button id="start">
            <b>Start</b>
          </button>
          &nbsp;button to begin!
        </p>
        <br></br>
      </div>
    );
  }
}

export default App;
