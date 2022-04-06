import React, { Component } from "react";
import {
  plant1,
  plant2,
  plant3,
  plant4,
  plant5,
  plant6,
  plant7,
  plant8,
  plant9,
  plant10,
  plant11,
  plant12,
  plant13,
  plant14,
} from "./Images";

class Plants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 0,
      posY: 0,
    };
  }

  handleDragStart = (e) => {
    this.setState(
      {
        posX: e.clientX,
        posY: e.clientY,
      },
      console.log(e.clientX, e.clientY)
    );
  };

  handleDrag = (e) => {
    const { posX, posY } = this.state;

    e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
    e.target.style.top = `${e.target.offsetLTop + e.clientY - posY}px`;

    this.setState({
      posX: e.clientX,
      posY: e.clientY,
    });
  };

  render() {
    const left_img = [plant1, plant2, plant3, plant4, plant5, plant6, plant7];
    const right_img = [
      plant8,
      plant9,
      plant10,
      plant11,
      plant12,
      plant13,
      plant14,
    ];

    return (
      <div>
        <div className="container" id="left-container">
          {left_img.map((image) => (
            <div key={image} className="plant-holder">
              <img
                className="plant"
                alt="plant"
                id={`${image}`}
                src={image}
                draggable={true}
                onDragStart={this.handleDragStart}
                onDrag={this.handleDrag}
              />
            </div>
          ))}
        </div>
        <div className="container" id="right-container">
          {right_img.map((image) => (
            <div className="plant-holder">
              <img className="plant" alt="plant" id={`${image}`} src={image} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Plants;
