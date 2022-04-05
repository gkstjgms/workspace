import React, { Component } from "react";

class Languages extends Component {
  render() {
    return (
      <div className="text-div">
        <p className="text-title">
        <span className="textGray">&lt;</span>
          <span className="textBlue">h1</span>
          <span className="textGray">&gt;</span>
          Learning Languages
          <span className="textGray">&lt;</span>
          <span className="textBlue">/h1</span>
          <span className="textGray">&gt;</span>
          <span className="blink">|</span>
        </p>
        <p className="text-content">
          C++
          <br />
          Python
          <br />
          HTML/CSS
          <br />
          JavaScript
        </p>
      </div>
    );
  }
}

export default Languages;
