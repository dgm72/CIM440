var pointX = 0;
var pointY = 0;
var eyeDiameterWhite = 20;
var eyeDiameterPupil = 10;
var footWidth = 10;
var footHeight = 5;
var doritoColor;

function setup() {
  // put setup code here

  createCanvas(500,500);
  background('LemonChiffon');
  pointX=width/2;
  pointY=height/2;

  doritoColor = "orange";

}


function draw() {
  // put drawing code here
  //i made a change




 background('LemonChiffon'); // sets background to lemonChiffon
  pointX = mouseX; // sets x postition as x position of mouse
  pointY = mouseY; // sets y postition as y position of mouse

  text('click to turn red', 100, 100); //text
  text('press b to turn blue', 120, 120); //text
  text('press o to turn back to orage',140,140); //text

  fill('black'); //fill for legs
  strokeWeight(2); //strokeWeight for legs
  line(pointX-35,pointY+100,pointX-35,pointY+150); //legs
  line(pointX+35,pointY+100,pointX+35,pointY+150); //legs

  line(pointX+35,pointY+50,pointX+100,pointY-50); //arms
  line(pointX-35,pointY+50,pointX-100,pointY-50); //arms


  fill(doritoColor); //body of dorito
  strokeWeight(1);//stroke weight for dorito
  triangle(pointX,pointY-50,pointX-100,pointY+100,pointX+100,pointY+100); //body of dorito

  fill('white'); //white of the eye
  circle(pointX-35,pointY+50,eyeDiameterWhite); //white of the eye
  circle(pointX+35,pointY+50,eyeDiameterWhite); //white of the eye

  fill('black'); //pupil of the eye
  circle(pointX-35,pointY+50,eyeDiameterPupil); //pupil of the eye
  circle(pointX+35,pointY+50,eyeDiameterPupil); //pupil of the eye

  rect(pointX-35,pointY+70,70,20); //mouth with black fill

  fill('white'); //fill for teeth
  rect(pointX-30,pointY+75,60,10); //teeth


  fill('black'); //fill for legs
  strokeWeight(0); //stroke for legs
  rect(pointX-36,pointY+150,footWidth,footHeight); //little bootie feet
  rect(pointX+34,pointY+150,footWidth,footHeight); //little bootie feet

}

function mousePressed(){ //when mouse is pressed dorito turns red
  doritoColor = "red";
}

function mouseReleased(){ //when mouse is released dorito turns back orange
  doritoColor = "orange";
}

function keyPressed(){ //when pressing the b key dorito turns blue
  if(key == "b"){
      doritoColor = 'blue';
  }
  if(key == "o"){ //when pressing the o key dorito turns back orange
      doritoColor = 'orange';
  }
}
