/* 👇 Start writing your p5.js code here */

let y = 600;
let x = 0;
let speed = 5;
let gravity = 0.2;
let slider = 0; //UI slider
let bounce = 1; //bounces the ball
let voetbal;
let crowd;
const stop = `S: STOP BOUNCE`;
const reset = `UP ARROW: RESET`;
const sliderText = `Slider: Snelheid veranderen`;
const changeBG = `A, B OF C: Achtergrond veranderen`;

function preload() {
  voetbal = loadImage("images/voetbal.svg");
}
function start() {
  bounce = 1;
  gravity = 0.2;
  speed = 5;
  bg = loadImage("images/soccerfield.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style("width", "80px");
  start();
  bg = loadImage("images/soccerfield.png");
  crowd = createAudio("images/crowd.mp3");
  crowd.autoplay(true);
  crowd.volume(0.05);
}

//make the ball move up and down using linear velocity (or
//speed()).
function keyPressed() {
  if (keyCode == UP_ARROW) {
    start();
  }
  if (key === "a") {
    bg = loadImage("images/streetfield.png");
  } else if (key === "b") {
    bg = loadImage("images/space.jpg");
  } else if (key === "c") {
    bg = loadImage("images/winkel.png");
  }
}
function draw() {
  background(bg);
  fill(255);
  text(stop, 100, 100, 500, 500); // Text wraps within text box
  text(reset, 100, 150, 500, 500); // Text wraps within text box
  text(sliderText, 1000, 100, 500, 500); // Text wraps within text box
  text(changeBG, 1000, 150, 500, 500); // Text wraps within text box
  textSize(24);

  image(voetbal, windowWidth / 2, y, 75, 75);

  speed = (slider.value() / 2) * bounce * -1;

  y = y + speed;
  speed = speed + gravity;

  if (y <= 300 || y >= 600) {
    bounce = bounce * -1;
  } else if (key === "s") {
    bounce = 0;
    y = 500;
  }

  //Or you could combine the two if statements into:
  //By using the OR conditional statement which is ||
  if (y > 650) {
    //reverse the speed
    speed = -1 * speed;
  }

  if (y > 650) {
    speed = -5;
  }

  if (y < 0) {
    speed = 5;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
