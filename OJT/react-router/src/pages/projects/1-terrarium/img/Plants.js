import React, { Component } from "react";
import Draggable from "react-draggable";
import { Link } from "react-router-dom";

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

import homeImg from "../../home.png";

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
          <Link to="/">
            <img className="tohome" src={homeImg} alt="to home" />
          </Link>
          {left_img.map((image) => (
            <div key={image} className="plant-holder">
              <Draggable>
                <img
                  className="plant"
                  alt="plant"
                  id={`${image}`}
                  src={image}
                  onClick={onClick}
                />
              </Draggable>
            </div>
          ))}
        </div>
        <div className="container" id="right-container">
          {right_img.map((image) => (
            <div key={image} className="plant-holder">
              <Draggable>
                <img
                  className="plant"
                  alt="plant"
                  id={`${image}`}
                  src={image}
                  draggable={true}
                  onClick={onClick}
                />
              </Draggable>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Plants;
