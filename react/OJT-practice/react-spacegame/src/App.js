import React, { useEffect, useState } from "react";
import GameOver from "./game/GameOver";
import Player from "./game/Player";
import Enemy from "./game/Enemy";
import Laser from "./game/Laser";
import "./App.css";

const App = (props) => {
  const [isStart, setIsStart] = useState(false);

  let canvas, ctx;
  let enemies = [];
  const MONSTER_TOTAL = 5;
  const MONSTER_WIDTH = MONSTER_TOTAL * 98;
  let lasers = [];

  useEffect(() => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    // player
    const player = new Player(
      canvas.width / 2 - 45,
      canvas.height - canvas.height / 6
    );

    // enemy 5*5
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    for (let x = START_X; x < STOP_X; x += 98) {
      for (let y = 0; y < 50 * 5; y += 50) {
        enemies.push(new Enemy(x, y));
      }
    }

    // laser
    const lasercb = (x, y) => lasers.push(new Laser(x, y));

    const gameLoop = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // player
      if (player.life !== true) {
        player.update(lasercb, canvas.width);
        player.draw(ctx, canvas.width, canvas.height);
      }

      // enemies
      enemies = enemies.filter((enemy) => !enemy.dead);
      enemies.forEach((enemy) => {
        enemy.update(player, lasers);
        enemy.draw(ctx);
      });

      // lasers
      lasers = lasers.filter((laser) => !laser.dead);
      lasers.forEach((laser) => {
        laser.draw(ctx);
      });

      // end of setInterval
    }, 100);
  });

  return (
    <div className="canvas">
      {isStart ? (
        <div>
          <canvas id="canvas" width="1024" height="768" />
        </div>
      ) : (
        <GameOver />
      )}
    </div>
  );
};

export default App;
