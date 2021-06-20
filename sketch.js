/* 👇 Start writing your p5.js code here */

let y = 600; // y axis start
let x = 0; // x axis start

let speed = 5; // start speed ball
let gravity = 0.2; // start gravity ball
let slider = 0; // slider
let bounce = 0.3; // start bounce ball
let voetbal; // voetbal image
let crowd; // crowd sound
let t = 0; // time particles

// Text strings
const stop = `S: STOP BOUNCE`;
const reset = `UP ARROW: RESET`;
const sliderText = `Slider: Snelheid veranderen`;
const changeBG = `A, B OF C: Achtergrond veranderen`;
const wave = `M: GEKKE ACHTERGRONDEFFECT`;

// restart function
function start() {
  bounce = 0.3;
  gravity = 0.2;
  speed = 5;
  bg = loadImage("images/soccerfield.png");
  voetbal = loadImage("images/voetbal.svg");
}

// setup p5 canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style("width", "80px");
  start();
  bg = loadImage("images/soccerfield.png");
  crowd = createAudio("audio/crowd.mp3");
  crowd.autoplay(true);
  crowd.volume(0.05);
}

//make the ball move up and down
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

  // text sizes/placement
  fill(255, 0, 0);
  text(stop, 100, 100, 500, 500);
  text(reset, 100, 150, 500, 500);
  text(sliderText, 1000, 100, 500, 500);
  text(changeBG, 1000, 150, 500, 500);
  text(wave, 1000, 200, 500, 500);
  textSize(24);
  noStroke();
  strokeWeight(3);

  // voetbal image sizes
  image(voetbal, windowWidth / 2, y, 75, 75);

  //make the ball move up and down
  speed = (slider.value() / 2) * bounce * -1; // op basis van value slider, verhoog bal snelheid of verlaag bal snelheid
  y = y + speed;
  speed = speed + gravity;

  if (y <= 300 || y >= 600) {
    bounce = bounce * -1;
  } else if (key === "s") {
    bounce = 0;
    y = 500;
  }

  // control wave particles

  if (key === "m") {
    // make a x and y grid of ellipses
    for (let x = 0; x <= width; x = x + 30) {
      for (let y = 0; y <= height; y = y + 30) {
        // starting point of each circle depends on mouse position
        const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
        const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
        // and also varies based on the particle's location
        const angle = xAngle * (x / width) + yAngle * (y / height);

        // each particle moves in a circle
        const myX = x + 20 * cos(2 * PI * t + angle);
        const myY = y + 20 * sin(2 * PI * t + angle);
        fill(0, 255, 0);
        ellipse(myX, myY, 3); // draw particle
      }
    }
  }

  t = t + 0.01; // update time
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
