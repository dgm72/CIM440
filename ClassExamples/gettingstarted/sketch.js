function setup() {
  // put setup code here

  createCanvas(500,500); //creates canvas with size of 500x500px
  background("green"); //background color + double quoation marks with name of color inside
  background("LemonChiffon"); //background color + double quoation marks with name of color inside
  background(127); //Medium Gray Color, gray scale goes from 0-255, 0 is white, 255 is black, no quotation marks needed for numerals
  background(255,127) //white background with about 50% opacity
  background(0);//black
  background(255);// white
  background(255,127)//white with 50% opacity
  colorMode(HSB)//sets color mode to HSB
  background(255,204,100);//colormode now in HSB, gives you a blue color
  colorMode(RGB)//sets color mode back to RGB
  background(255,204,100);//now in RGB, same numbers gives you yell
  background("#FFFACD");//Hexcode for LemonChiffon
  background(255,0,0);//red
  background(0,255,0);//green
  background(0,0,255);//blue

  fill("cyan");
  stroke(255,0,0);
  ellipse(250,250,50,50);

  fill("green");
  stroke(0,255,0);
  ellipse(150,150,50,50);

}

function draw() {
  // put drawing code here

}
