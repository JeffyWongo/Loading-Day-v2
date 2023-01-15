import Color from 'color';
import P5 from 'p5';
import {
  Player,
} from './assets';
import settings from '../config/settings.json';
import playerColors from './util/Constants.js';
import * as KeyCode from 'keycode-js';

export default class Game {

  constructor() {
    this.p5 = new P5(() => { });
    this.players = [];
    this.gameSetup();
  }

  gameSetup() {
    this.p5.setup = () => this.p5.createCanvas(this.p5.windowWidth, this.p5.windowHeight);
    let color = settings.player.randomColor ? settings.player.color : this.p5.random(playerColors);
    // we will need to create multiple players depending on how many players we want
    const player1 = new Player(this.p5, 100, 100, settings.player.radius, Color(color), 'hunter');
    this.players.push(player1);
    const player2 = new Player(this.p5, 200, 200, settings.player.radius, Color(color), 'survivor');
    this.players.push(player2);
    const player3 = new Player(this.p5, 300, 300, settings.player.radius, Color(color), 'survivor');
    this.players.push(player3);
    const player4 = new Player(this.p5, 400, 400, settings.player.radius, Color(color), 'survivor');
    this.players.push(player4);
    this.p5.draw = () => { // auto loop
      this.drawBackground();
      player1.draw();
    };
    this.p5.keyTyped = () => {
      if (this.p5.keyCode === 65) { //left
        
        this.players[0].x -= 100;
      }
      if (this.p5.keyCode === 87) { //up
        this.players[0].y -= 100;
      }
      if (this.p5.keyCode === 68) { // right
        this.players[0].x += 100;
      }
      if (this.p5.keyCode === 83) { //down
        this.players[0].y += 100;
      }
    }
  }

  drawBackground() {
    this.p5.background(settings.game.bgcolor);
    this.p5.stroke(settings.game.gridColor);
    this.p5.strokeWeight(settings.game.gridStrokeSize);
    const factor = 3; // 0.5 is exact
    const w = settings.game.width * factor;
    const h = settings.game.height * factor;
    for (let x = -w; x < w; x += settings.game.gridSize) {
      this.p5.line(x, -settings.game.height * factor, x, settings.game.height * factor);
    } // vertical lines
    for (let y = -h; y < h; y += settings.game.gridSize) {
      this.p5.line(-settings.game.width * factor, y, settings.game.width * factor, y); // horizontal lines
    }
  }
}

document.addEventListener('gesturestart', (e) => {
  e.preventDefault();
});
