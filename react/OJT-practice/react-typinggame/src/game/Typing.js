import React, { Component } from "react";

class Typing extends Component {
  render() {
    return (
      <div>
        <div className="typing">
          <p id="quote">example</p>
          <input type="text" id="typed-value" />
        </div>
        <br />
        <p id="message">message</p>
      </div>
    );
  }
}

export default Typing;
