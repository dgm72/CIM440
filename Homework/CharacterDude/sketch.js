var eyeY = 300;
var legsFirstY = 350;
var legsSecondY = 400;
var armsFirstY = 300;
var armsSecondY = 200;

function setup() {
  // put setup code here

  createCanvas(500,500);
  background('LemonChiffon');



}


function draw() {
  // put drawing code here


  fill('black') //fill for legs
  strokeWeight(2) //strokeWeight for legs
  line(215,legsFirstY,215,legsSecondY) //legs
  line(285,legsFirstY,285,legsSecondY) //legs

  line(285,armsFirstY,350,armsSecondY) //arms
  line(215,armsFirstY,150,armsSecondY) //arms

  fill('orange') //body of dorito
  strokeWeight(0)
  triangle(250,200,150,350,350,350) //body of dorito

  fill('white') //white of the eye
  circle(215,eyeY,20)
  circle(285,eyeY,20)

  fill('black') //pupil of the eye
  circle(215,eyeY,10)
  circle(285,eyeY,10)

  rect(215,320,70,20) //mouth with black fill

  fill('white')
  rect(220,325,60,10) //teeth


  fill('black')
  strokeWeight(0)
  rect(214,400,10,5) //little bootie feet
  rect(284,400,10,5)































}
