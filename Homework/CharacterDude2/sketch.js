var pointX = 0;
var pointY = 0;
var eyeDiameterWhite = 20;
var eyeDiameterPupil = 10;
var footWidth = 10;
var footHeight = 5;

function setup() {
  // put setup code here

  createCanvas(500,500);
  background('LemonChiffon');
  pointX=width/2;
  pointY=height/2;


}


function draw() {
  // put drawing code here
  //i made a change
background('LemonChiffon');
  pointX = mouseX;
  pointY = mouseY;

  fill('black') //fill for legs
  strokeWeight(2) //strokeWeight for legs
  line(pointX-35,pointY+100,pointX-35,pointY+150) //legs
  line(pointX+35,pointY+100,pointX+35,pointY+150) //legs

  line(pointX+35,pointY+50,pointX+100,pointY-50) //arms
  line(pointX-35,pointY+50,pointX-100,pointY-50) //arms

  fill('orange') //body of dorito
  strokeWeight(1)
  triangle(pointX,pointY-50,pointX-100,pointY+100,pointX+100,pointY+100) //body of dorito

  fill('white') //white of the eye
  circle(pointX-35,pointY+50,eyeDiameterWhite)
  circle(pointX+35,pointY+50,eyeDiameterWhite)

  fill('black') //pupil of the eye
  circle(pointX-35,pointY+50,eyeDiameterPupil)
  circle(pointX+35,pointY+50,eyeDiameterPupil)

  rect(pointX-35,pointY+70,70,20) //mouth with black fill

  fill('white')
  rect(pointX-30,pointY+75,60,10) //teeth


  fill('black')
  strokeWeight(0)
  rect(pointX-36,pointY+150,footWidth,footHeight) //little bootie feet
  rect(pointX+34,pointY+150,footWidth,footHeight)































}
