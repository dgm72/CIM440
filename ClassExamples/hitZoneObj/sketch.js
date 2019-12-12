var button1;
var button2;
var soundFile;

function preLoad(){
  soundFile = loadSound("assets/CowMoo.mp3");
}


function setup() {
  createCanvas(400,400);
  button1 = new hitzoneObject(100,200,50,"red", "Stop", loadImage("assets/stop.png"));
  button2 = new hitzoneObject(200,200,50,"green", "Play",loadImage("assets/play.png"));

}//end of set up

function draw() {
  
  background(255);

  button1.display();
  button1.check();

  button2.display();
  button2.check();
}//end of draw

  function mousePressed(){
    if(button1.overlay == true){
      console.log(button1.lable);
      soundFile.stop();
    }
    if(button2.overlay == true {
      console.long(button2.lable);
      soundFile.stop();
      soundFile.play();
    }
  }






  class hitzoneObject{
    constructor(tempX,tempY,tempSize,tempColor,tempLable,tempImage){
      this.x = tempX;
      this.y = tempY;
      this.boxSize = tempSize;
      this.boxColor = tempColor;
      this.overlay = false;
      this.lable = tempLable;
      this.image = tempImage;

  }//end of class hitzoneObject

  display(){
    fill(this.boxColor);
    text(this.lable, this.x, this.y-20);
    //rect(this.x,this.y,this.boxSize,this.boxSize);
    image(this.image,this.x,this.y,this.boxSize,this.boxSize);

    if(this.overlay == true){
      fill(127,127);
      rect(this.x,this.y,this.boxSize,this.boxSize);
    }
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
