import React, { Component } from "react";
import Plants from "./Plants";

class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
    };
  }

  // don't use
  handlePointerDown = (e) => {
    this.setState({
      pos3: e.clientX,
      pos4: e.clientY,
    });
  };

  handleDrag = (e) => {
    const { pos1, pos2, pos3, pos4 } = this.state;

    this.setState({
      pos1: pos3 - e.clientX,
      pos2: pos4 - e.clientY,
      pos3: e.clientX,
      pos4: e.clientY,
    });

    e.target.style.left = `${e.target.offsetLeft - pos1}px`;
    e.target.style.top = `${e.target.offsetTop - pos2}px`;
  };

  handleDragEnd = (e) => {
    this.setState({
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
    });
  };

  // use
  handleDbclick = (e) => {
    const plants = document.querySelectorAll(".plant");
    const maxPriority =
      (plants.length > 0
        ? Math.max.apply(
            null,
            Array.from(plants).map((plant) => plant.getAttribute("z-index"))
          )
        : 9999) + 2;
    switch (e.detail) {
      case 2:
        e.target.setAttribute("z-index", maxPriority);
        e.target.style.zIndex = maxPriority;
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div>
        <Plants
          onClick={this.handleDbclick}
        />
      </div>
    );
  }
}

export default Drag;
