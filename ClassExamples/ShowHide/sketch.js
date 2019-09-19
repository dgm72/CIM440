var jelly;
var showOrHide = false;

var show;
var hide;

function preload(){

 jelly = loadImage("jelly.jpg");

    show = createButton("Show Jelly");
    show.mousePressed(function(){
    showOrHide = true;

 });

    hide = createButton("Hide Jelly");
    hide.mousePressed(function(){
    showOrHide = false;

  });


}


function setup() {
  // put setup code here
createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255);
  if(showOrHide == true){
    image(jelly,100,100, jelly.width/4, jelly.height/4);
  }

}
