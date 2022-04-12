import img from "./image/laserRed.png";

export class Laser {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 9;
    this.height = 33;
    this.speed = 10;
    this.dead = false;

    setInterval(() => {
      if (this.y > 0) {
        this.y -= this.speed;
      } else {
        this.dead = true;
      }
    }, 100);
  }

  draw = (ctx) => {
    const image = new Image();
    image.src = img;
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
  };
}

export default Laser;
