export class GameObject {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 0;
    this.height = 0;
    this.speed = 0;
    this.dead = false;
    this.image = undefined;
  }
}

export default GameObject;
