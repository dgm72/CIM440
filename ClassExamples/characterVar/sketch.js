var pointX = 0;
var pointY = 0;



function setup() {
  // put setup code here
createCanvas(800,800);
  pointX = width/2;
  pointY = width/2;
console.log("pointX " + pointX + " pointY " + pointY);




}

function draw() {
  // put drawing code here

  //background('LemonChiffon');
  pointX = mouseX;
  pointY = mouseY;

  rect(pointX-100,pointY-100,200,200); //heAD

  ellipse(pointX,pointY,10,10);//nose

  ellipse(pointX+20,pointY-20,30,30);//right eye
  ellipse(pointX-20,pointY-20,30,30);//left eye

  fill('black'); //fill for pupil
  ellipse(pointX-20,pointY-20,10,10);//left pupil
  ellipse(pointX+20,pointY-20,10,10);//right pupil

fill('white');
arc(pointX,pointY+10,50,50,0,PI);//smiley






}
