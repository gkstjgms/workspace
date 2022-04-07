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

    const { onPointerDown, onDrag, onDragEnd, onClick } = this.props;

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
                onPointerDown={onPointerDown}
                onDrag={onDrag}
                onDragEnd={onDragEnd}
                onClick={onClick}
              />
            </div>
          ))}
        </div>
        <div className="container" id="right-container">
          {right_img.map((image) => (
            <div key={image} className="plant-holder">
              <img
                className="plant"
                alt="plant"
                id={`${image}`}
                src={image}
                draggable={true}
                onPointerDown={onPointerDown}
                onDrag={onDrag}
                onDragEnd={onDragEnd}
                onClick={onClick}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Plants;
