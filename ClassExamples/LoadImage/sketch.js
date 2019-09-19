var jelly;


function preload(){

 jelly = loadImage("jelly.jpg");


}



function setup() {
  // put setup code here
createCanvas(400,400);
}

function draw() {
  // put drawing code here
  image(jelly,0,0);
  image(jelly,100,100, jelly.width/4, jelly.height/4);
  
}
