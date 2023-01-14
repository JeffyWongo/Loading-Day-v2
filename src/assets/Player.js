import settings from '../../config/settings.json';
import p5 from '../p5-instantiate';

/** Class representing a Player. */
export default class Player {
  constructor(x, y, r, color) {
    this.x = x
    this.y = y
    this.color = color
    this.radius = r;
  }

  //method that draws the player to the canvas
  draw() {
    const { Speed } = settings.player;
    p5.fill(this.color.hex());
    p5.circle(this.x, this.y, this.r * 2);
    p5.textSize(this.r / 3);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.fill('white');
    p5.stroke('black');
    p5.strokeWeight(this.r / 32);
    p5.text(settings.game.username, this.x, this.y);
    p5.textSize(this.r / 5);
    p5.circle(this.x, this.y, this.r * 2);
  }
  
  //listens for movement, not sure if this should be handled by the game
  movement() {
  }
  //method for checking for collisions to die (returns true)
  collides(other) {
  }
}
