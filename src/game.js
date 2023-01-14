import Color from 'color';
import p5 from './p5-instantiate';
import {
  Player,
} from './assets';
import settings from '../config/settings.json';
let { color } = settings.player;
if (settings.player.randomColor) { // not sure why randomColor needs to be a boolean (might fix later)
  color = p5.random(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']);
}

p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight);

// we will need to create multiple players depending on how many players we want
const player = new Player(100, 100, settings.player.radius, Color(color));

p5.draw = () => { // auto loop
  drawBackground();
  player.draw();
};

function drawBackground() {
  p5.background(settings.game.bgcolor);
  p5.stroke(settings.game.gridColor);
  p5.strokeWeight(settings.game.gridStrokeSize);
  const factor = 3; // 0.5 is exact
  const w = settings.game.width * factor;
  const h = settings.game.height * factor;
  for (let x = -w; x < w; x += settings.game.gridSize) {
    p5.line(x, -settings.game.height * factor, x, settings.game.height * factor);
  } // vertical lines
  for (let y = -h; y < h; y += settings.game.gridSize) {
    p5.line(-settings.game.width * factor, y, settings.game.width * factor, y); // horizontal lines
  }
}

document.addEventListener('gesturestart', (e) => {
  e.preventDefault();
});
