/* 👇 Start writing your p5.js code here */

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#1b4332');

    let c = color(255, 204, 0);
    fill(c);
    noStroke();
    rect(width / 4, height / 5, 1000, 600);

    c = color('red');
    fill(c);
    circle(width / 5, height / 5, 50, 50, 20);

    c = color('blue');
    fill(c);
    circle(width / 4, height / 4, 50, 50, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}