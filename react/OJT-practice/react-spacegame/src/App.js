import React, { useEffect, useState } from "react";
import Player from "./game/Player";
import Enemy from "./game/Enemy";
import Laser from "./game/Laser";
import "./App.css";

const App = (props) => {
  const [isStart, setIsStart] = useState({
    win: "",
    game: true,
  });

  let gameLoop, gameOver;

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

    if (isStart) {
      clearTimeout(gameOver);

      gameLoop = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // player
        if (!player.dead) {
          player.update(ctx, lasercb, canvas.width);
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

        if (player.points === 2500) {
          setIsStart({
            win: "win",
            game: false,
          });
          clearInterval(gameLoop);
        } else if (player.dead) {
          setIsStart({
            win: "lose",
            game: false,
          });
          clearInterval(gameLoop);
        } else if (enemies.length === 0 && 0 < player.points < 2500) {
          setIsStart({
            win: "lose",
            game: false,
          });
          clearInterval(gameLoop);
        }
      }, 100);
    }

    // Gameover
    if (!isStart.game) {
      clearInterval(gameLoop);

      gameOver = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const displayMessage = (message, color = "red") => {
          ctx.font = "25px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        };

        if (isStart.win === "win") {
          displayMessage(
            "Victory !!! Press [Enter] to start a new game <Captain Pew Pew>",
            "green"
          );
        } else {
          displayMessage(
            "You losed !!! Press [Enter] to start a new game <Captain Pew Pew>"
          );
        }
        document.onkeydown = (e) => {
          document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
              window.location.reload();
            }
          });
        };
      }, 500);
    }
  });

  return (
    <div className="canvas">
      <canvas id="canvas" width="1024" height="768" />
    </div>
  );
};

export default App;
