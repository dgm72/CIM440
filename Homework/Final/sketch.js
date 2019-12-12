
var scene;

function preload() {
  scene = loadImage("Images/background.png");
}


function setup() {
  // put setup code here
  createCanvas(1400,1400);
}

function draw() {
  // put drawing code here
  background(scene);
}
