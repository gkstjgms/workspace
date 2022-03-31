import React, { Component } from "react";
import Board from "./Board";
import "./index.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          location: {
            col: 0,
            row: 0,
          },
          active: false,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick = (i) => {
    // 과거로 되돌린 시점에서 새로운 이동이 발생 시, 이전의 미래 기록 삭제
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const columns = 3;

    // click된 square의 (행, 열) 계산
    const col = Math.floor(i % columns) + 1;
    const row = Math.floor(i / columns) + 1;

    // 누군가 승리하거나 square가 이미 채워졌을 경우 변화 X
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      history: history.concat([
        {
          squares: squares,
          location: {
            col: col,
            row: row,
          },
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };

  jumpTo(step) {
    let history = this.state.history;

    history.forEach((item) => {
      item.active = false;
    });
    history[step].active = true;

    this.setState({
      history: history,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    /* 변경점: result 
    -> 승부 결과가 나왔을 경우 status: "win"
    => 비겼을 경우 status: "draw" */
    let result = {
      status: "",
      win: {},
    };

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        result = {
          status: "win",
          win: {
            player: squares[a], // 우승자가 X or O 인지 표시
            squares: [a, b, c], // 승부의 원인이 된 세 개의 사각형 위치
          },
        };
        return result;
      }
    }
    /* 
    squares 내부 item === null일 경우가 반환되는 새 배열 tempSq 
    -> tempSq.length === 0 이면
    null인 item이 없다 = 모든 squares가 차있다 = winner가 없다면 draw
    */
    let tempSq = squares.filter((item) => item === null);
    if (tempSq.length === 0) {
      result = {
        status: "draw",
        win: {},
      };
      return result;
    }
    return null;
  };
  /* return
  first if() result: winner가 있을 경우의 result object
  Secound if() result: draw가 났을 경우의 result object
  두 if()에 해당되지 않을 경우: return null
  */

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const result = this.calculateWinner(current.squares);
    /* 변경점: result의 status에 따른 gameStateus 
    현재 누른 squares의 상태마다 result 값 검사
    -> result && result.status 뭔 뜻이지 ??? 물어보기
    TRUE: result.status
    FALSE: null
    */
    const gameStateus = result && result.status ? result.status : null;

    // moving index
    const moves = history.map((move, index) => {
      const desc = index ? "Go to move #" + index : "Go to game start";

      let active = "";
      if (move.active) {
        active = "active";
      } else {
        active = "normal";
      }
      return (
        <li key={index}>
          <button
            className={active}
            key={`${move.location.col}_${move.location.row}`}
            onClick={() => this.jumpTo(index)}
          >
            {`${desc} (${move.location.col}, ${move.location.row})`}
          </button>
        </li>
      );
    });

    let status;

    /* 변경점: gameStatus가 win이면 result를 통해 winner 표시 */
    if (gameStateus === "win") {
      status = `Winner: ${result.win.player}`;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-info">
          <div>{status}</div>
        </div>
        <br />
        {
          /* 변경점: draw 발생 시 게임 화면을 숨김, 아닐 시 게임 화면을 보임 */
          gameStateus === "draw" ? (
            // draw
            <div className="draw">
              <br />
              <br />
              <br />
              <br />
              <h2>Draw!</h2>
            </div>
          ) : (
            // not draw
            <div className="game-board">
              <Board
                squares={current.squares}
                winningSquares={gameStateus === "win" ? result.win.squares : []}
                onClick={(i, col, row) => this.handleClick(i, col, row)}
              />
            </div>
          )
        }
        <div>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}

export default Game;
