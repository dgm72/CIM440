var pointX = 0;
var pointY = 0;
var faceColor = "purple";

var faceButton;

function setup() {
  // put setup code here
createCanvas(400,400);
  pointX = width/2;
  pointY = height/2;
console.log("pointX " + pointX + " pointY " + pointY);

faceButton = createButton("Click to turn orange");
faceButton.position(20,20);
faceButton.mousePressed(function(){
  faceColor = "orange";

  });
}

function draw() {
  // put drawing code here

  if(mouseX < width/2){
    console.log("left hand side");
      background(255);
  }

  if(mouseX > width/2){
    console.log("right hand side");
      background("green");
  }

  if(mouseX == width/2){
    background("blue");
    console.log("center");
  }

  pointX = mouseX;
  pointY = mouseY;

  fill(faceColor);
    rect(pointX-100,pointY-100,200,200); //heAD

    ellipse(pointX,pointY,10,10);//nose

  fill('white');
    ellipse(pointX+20,pointY-20,30,30);//right eye
    ellipse(pointX-20,pointY-20,30,30);//left eye

  fill('black'); //fill for pupil
    ellipse(pointX-20,pointY-20,10,10);//left pupil
    ellipse(pointX+20,pointY-20,10,10);//right pupil

  fill('white');
    arc(pointX,pointY+10,50,50,0,PI);//smiley

}

function mousePressed(){
  faceColor = "red";
}
function mouseReleased(){
  faceColor = 'purple';
}
function keyPressed(){
  console.log("key" + key);
  console.log("keyCode" + key);

  if(key == "b"){
      faceColor = 'blue';
  }
  if(keyCode == "82"){
    faceColor = "red";
  }




}
