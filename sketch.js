/* 👇 Start writing your p5.js code here */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#1b4332');
    rect(width / 4, height / 5, 1000, 600);
      noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}