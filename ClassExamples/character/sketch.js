function setup() {
  // put setup code here

  createCanvas(500,500);
  background(0,255,0);

}

function draw() {
  // put drawing code here

fill("white");
strokeWeight(1);

  strokeWeight(0);
  fill('#fae');
  ellipse(125,120,150,150); //head

  fill(255);//eye fill
  ellipse(100,100,20,20);//left eye
  ellipse(150,100,20,20);//right eye

  fill(0);//pupil fill
  ellipse(100,100,10,10);//left pupil
  ellipse(150,100,10,10);//right pupil

fill(255);
rect(85,125,75,20); //mouth

strokeWeight(1);
line(100,125,100,145);

strokeWeight(5);
point(72,382);

//console.log("Width " + width);
//console.log("Height " + height);
fill('blue');
strokeWeight(0);
triangle(width/2,height/2,width/2+10,height/2+10,width/2-10,height/2+10);


fill('LemonChiffon');
strokeWeight(0);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI);





























}
