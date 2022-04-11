import React, { Component } from "react";

class Button extends Component {
  render() {
    const { onClick } = this.props;

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
          <button onClick={onClick}>
            <b>Start</b>
          </button>
          &nbsp;button to begin!
        </p>
      </div>
    );
  }
}

export default Button;
