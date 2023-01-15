import settings from '../../config/settings.json';

/** Class representing a Player. */
export default class Player {
  constructor(p5, x, y, r, color, role) {
    this.p5 = p5;
    this.x = x
    this.y = y
    this.color = color
    this.radius = r;
    this.role = role;
  }

  //method that draws the player to the canvas
  draw() {
    const { Speed } = settings.player;
    this.p5.fill(this.color.hex());
    this.p5.circle(this.x, this.y, this.radius * 2);
    this.p5.textSize(this.r / 3);
    this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
    this.p5.fill('white');
    this.p5.stroke('black');
    this.p5.strokeWeight(this.r / 32);
    this.p5.text(settings.game.username, this.x, this.y);
    this.p5.textSize(this.r / 5);
    this.p5.circle(this.x, this.y, this.r * 2);
  }
  
  //method for checking for collisions to die (returns true)
  collides(other) {
  }
}
