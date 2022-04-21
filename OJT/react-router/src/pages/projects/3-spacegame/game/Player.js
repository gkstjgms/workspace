import img from "./image/player.png";
import leftImg from "./image/playerLeft.png";
import rightImg from "./image/playerRight.png";
import DamagedImg from "./image/playerDamaged.png";
import lifeImg from "./image/life.png";
import GameObject from "./GameObject";

export class Player extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
    this.speed = 15;
    this.points = 0;
    this.life = 3;
    this.cooltime = Date.now();
    this.image = new Image();
  }

  draw = (ctx, width, height) => {
    if (this.life === 3) {
      this.image.src = img;
    } else {
      this.image.src = DamagedImg;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    this.drawPoints(ctx, height);
    this.drawLife(ctx, width, height);
  };

  update = (ctx, lasercb, width) => {
    document.onkeydown = (e) => {
      // left
      if (e.keyCode === 37) {
        this.image.src = leftImg;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.x = this.x > 0 ? this.x - this.speed : (this.x = -2);
      }
      // right
      if (e.keyCode === 39) {
        this.image.src = rightImg;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        this.x = this.x + this.width < width ? this.x + this.speed : this.x;
      }
      document.addEventListener("keypress", (e) => {
        if (e.keyCode === 32) {
          if (Date.now() - this.cooltime > 800) {
            lasercb(this.x + 45, this.y - 15);
            this.cooltime = Date.now();
          }
        }
        if (e.key = "Enter") {
          window.location.reload();
        }
      });
    };
    if (this.life < 0) {
      this.dead = true;
    }
  };

  drawPoints = (ctx, height) => {
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "left";
    ctx.fillText("Points: " + this.points, 15, height - 15);
  };

  incresePoints = () => {
    this.points += 50;
  };

  drawLife = (ctx, width, height) => {
    const START_POS = width - 180;
    const image = new Image();
    image.src = lifeImg;
    for (let i = 0; i < this.life; i++) {
      ctx.drawImage(image, START_POS + 45 * (i + 1), height - 37);
    }
  };

  decreseLife = () => {
    this.life--;
  };
}

export default Player;
