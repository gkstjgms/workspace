import img from "./image/laserRed.png";
import GameObject from "./GameObject";

export class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.image = img;
    this.speed = 10;
  }

  draw = (ctx) => {
    if (this.y > 0) {
      this.y -= this.speed;
    } else {
      this.dead = true;
    }

    const image = new Image();
    image.src = img;
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
  };
}

export default Laser;
