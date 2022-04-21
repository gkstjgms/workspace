import React, { Component } from "react";

class Typing extends Component {
  render() {
    const { onInput } = this.props;
    return (
      <div>
        <input
            type="text"
            className="typed-value"
            onInput={onInput}
          />
      </div>
    );
  }
}

export default Typing;
