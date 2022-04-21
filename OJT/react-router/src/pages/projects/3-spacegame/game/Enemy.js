import img from "./image/enemyShip.png";
import GameObject from "./GameObject";

export class Enemy extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 98;
    this.height = 50;
    this.speed = 5;

    setInterval(() => {
      if (this.y < 768 - this.height / 2) {
        this.y += this.speed;
      } else {
        this.dead = true;
      }
    }, 1000)
  }

  draw = (ctx) => {
    const image = new Image();
    image.src = img;
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
  };

  update = (player, laser) => {
    if (this.dead) return;

    if (!this.dead) {
      laser.forEach((laser) => {
        if (
          laser.x > this.x &&
          Math.abs(laser.x - this.x) < this.width &&
          Math.abs(laser.y - this.y) < this.height
        ) {
          player.incresePoints();
          this.dead = true;
          laser.dead = true;
        }
      });
      if (
        player.x > this.x &&
        Math.abs(this.x - player.x) < this.width &&
        Math.abs(this.y - player.y) < this.height
      ) {
        this.dead = true;
        player.decreseLife();
      }
    }
  };
}

export default Enemy;
