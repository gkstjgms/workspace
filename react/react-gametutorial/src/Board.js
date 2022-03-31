import React, { Component } from "react";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component {
  renderSquare = (i) => {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  };

  generateRow = (index, max) => {
    let rows = [];

    for (index; index < max; index++) {
      rows.push(this.renderSquare(index));
    }
    return rows;
  }

  generateBoard = (columns, rows) => {
    let board = [];

    for (let i = 0; i < columns * rows; i++) {
      if (i % columns === 0) {
        board.push(
          <div className="board-row" key={i}>
            {this.generateRow(i, i + columns)}
          </div>
        )
      }
    }
    return board;
  };

  render() {
    return (
      <div>
        <div>{this.generateBoard(3,3)}</div>
      </div>
    );
  }
}

export default Board;
