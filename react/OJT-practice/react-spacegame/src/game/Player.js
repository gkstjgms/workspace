import img from "./image/player.png";

export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 99;
    this.height = 75;
    this.speed = 15;
  }

  lasers = [];

  draw = (ctx) => {
    const image = new Image();
    image.src = img;
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
  };

  update = (lasercb) => {
    document.onkeydown = (e) => {
      // left
      if (e.keyCode === 37) {
        this.x = this.x > 0 ? this.x - this.speed : (this.x = 0);
      }
      // right
      if (e.keyCode === 39) {
        this.x = this.x + this.width < 1024 ? this.x + this.speed : this.x;
      }
      document.addEventListener("keypress", (e) => {
        if (e.keyCode === 32) {
          lasercb(this.x + 45, this.y - 15);
        }
      });
    };
  };
}

export default Player;
