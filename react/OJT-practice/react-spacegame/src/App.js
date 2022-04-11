import React, { useEffect } from "react";

function App() {
  let canvas, ctx;

  useEffect(() => {
    canvas = document.getElementById("canvas");
    setInterval(() => {
      ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, 1000 / 30);
  });

  return (
    <div>
      <canvas id="canvas" width="1024" height="768" />
    </div>
  );
}

export default App;
