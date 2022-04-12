import img from "./image/enemyShip.png";

export class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 98;
    this.height = 50;
    this.dead = false;

    setInterval(() => {
      if (this.y < 768 - this.height) {
        this.y += 5;
      } else {
        this.dead = true;
      }
    }, 1000);
  }

  draw = (ctx) => {
    const image = new Image();
    image.src = img;
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
  };
}

export default Enemy;
