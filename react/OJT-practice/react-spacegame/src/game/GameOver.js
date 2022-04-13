import React, { useEffect } from "react";

const GameOver = (gameLoop) => {
  let canvas, ctx;
  const displayMessage = (message, color = "white") => {
    ctx.font = "25px Arial";
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);
  };

  // clearInterval(gameLoop);

  useEffect(() => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      displayMessage(
        "You died !!! Press [Enter] to start a new game <Captain Pew Pew>"
      );
    }, 100);
  });

  return (
    <div>
      <canvas id="canvas" width="1024" height="768" />
    </div>
  );
};

export default GameOver;
