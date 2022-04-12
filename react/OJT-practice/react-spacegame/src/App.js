import React, { useEffect } from "react";
import Player from "./game/Player";
import Enemy from "./game/Enemy";
import Laser from "./game/Laser";
import "./App.css";

const App = () => {
  let canvas, ctx;
  const MONSTER_TOTAL = 5;
  const MONSTER_WIDTH = MONSTER_TOTAL * 98;
  const START_X = (1024 - MONSTER_WIDTH) / 2;
  const STOP_X = START_X + MONSTER_WIDTH;

  useEffect(() => {
    canvas = document.getElementById("canvas");
    let enemies = [];

    // player
    const player = new Player(
      canvas.width / 2 - 45,
      canvas.height - canvas.height / 6
    );

    // enemy 5*5
    for (let x = START_X; x < STOP_X; x += 98) {
      for (let y = 0; y < 50 * 5; y += 50) {
        enemies.push(new Enemy(x, y));
      }
    }

    // laser
    let lasers = [];
    const lasercb = (x, y) => lasers.push(new Laser(x, y));

    setInterval(() => {
      ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      player.update(lasercb);
      player.draw(ctx);

      enemies = enemies.filter((enemy) => !enemy.dead);
      enemies.forEach((enemy) => {
        enemy.draw(ctx);
      });

      lasers = lasers.filter((laser) => !laser.dead);
      lasers.forEach((laser) => {
        laser.draw(ctx);
      });
      // end of setInterval
    }, 100);
  });

  return (
    <div className="canvas">
      <canvas id="canvas" width="1024" height="768" />
    </div>
  );
};

export default App;
