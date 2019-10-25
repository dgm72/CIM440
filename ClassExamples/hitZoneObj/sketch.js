var button1;
var button2;

function setup() {
  // put setup code here
  createCanvas(400,400);

  button1 = new hitzoneObject(100,200,50,"red");
  button1.check();
  console.log("button1 overlay "+button1.overlay);
  button2 = new hitzoneObject(200,200,50,"green");
  button2.check();
}//end of set up

function draw() {
  // put drawing code here
  background(255);

  button1.display();
  button2.display();
}//end of draw

  class hitzoneObject{
    constructor(tempX,tempY,tempSize,tempColor){
      this.x = tempX;
      this.y = tempY;
      this.boxSize = tempSize;
      this.boxColor = tempColor;
      this.overlay = false;
    }//end of class hitzoneObject

  display(){
    fill(this.boxColor);
    rect(this.x,this.y,this.boxSize,this.boxSize);
  }//end of display


  check(){
    if(mouseX > this.x && mouseX <(this.x+this.boxSize) && mouseY > this.y && mouseY < (this.y+this.boxSize)){
      this.overlay = true;
    }//end of if
    else{
      this.overlay = false;
    }//end of else
  }//end of check







}
