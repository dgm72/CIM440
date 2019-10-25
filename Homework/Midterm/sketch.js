// Image by <a href="https://pixabay.com/users/Chaos07-2370306/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1562626">Chaos07</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1562626">Pixabay</a>
//Image by <a href="https://pixabay.com/users/MR1313-4924314/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3726901">MR1313</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3726901">Pixabay</a>
//Image by <a href="https://pixabay.com/users/Chaos07-2370306/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1562628">Chaos07</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1562628">Pixabay</a>
//Image by <a href="https://pixabay.com/users/Chaos07-2370306/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1562659">Chaos07</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1562659">Pixabay</a>
//Image by <a href="https://pixabay.com/users/Chaos07-2370306/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1562637">Chaos07</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1562637">Pixabay</a>
// Image by <a href="https://pixabay.com/users/cocoparisienne-127419/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=703538">cocoparisienne</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=703538">Pixabay</a>
// Image by <a href="https://pixabay.com/users/OpenClipart-Vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1297982">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1297982">Pixabay</a>




var scene, ghost, pumpkinGreen, pumpkinRed, pumpkinBlack, pumpkinBackground, bat;

var pButton, gButton, bButton;

var curImage, currPumpkin;

function preload(){

  scene = loadImage("Images/scene.jpg");
  ghost = loadImage("Images/ghost.png");
  pumpkinGreen = loadImage("Images/pumpkinGreen.png");
  pumpkinRed = loadImage("Images/pumpkinRed.png");
  pumpkinBlack = loadImage("Images/pumpkinBlack.png");
  bat = loadImage("Images/bat.png");
  pumpkinBackgroud= loadImage("Images/scenepumpkin.jpg");
}

function setup() {
  // put setup code here

gButton = createButton("Click to see ghost");
gButton.position(650,300);
gButton.mousePressed(function(){
  curImage = 0;
});
pButton = createButton("Click to see pumpkin");
pButton.position(850,300);
pButton.mousePressed(function(){
  curImage = 1;
})
bButton = createButton("Click to see bat");
bButton.position(1050,300);
bButton.mousePressed(function(){
  curImage = 2;
})

createCanvas(1700,925);
}

function draw() {
  // put drawing code here

  pointX = mouseX;
  pointY = mouseY;
  background(scene);

if (curImage == 0){
  fill('white');
  textSize(18);
  text('be careful! this sneaky ghost will follow you around everywhere you go!', 325, 275);
  ghostImage();
}
else if(curImage == 1){
  image(pumpkinBlack,mouseX,mouseY,pumpkinBlack.width/2,pumpkinBlack.height/2);
  fill('white');
  textSize(18);
  text('press the r key to see a pumpkin with a red hat, press the g key to see a pumpkin with a green hat, and press the b key to see a pumpkin with a black hat', 325, 275);
  pumpkinImage();
}
else if(curImage == 2){
  fill('white');
  textSize(18);
  text('BOOOOOO! bats flying all around and there is nothing you can do!', 325, 275);
  batImage();
}

}


function ghostImage(){
  image(ghost,mouseX,mouseY,ghost.width/4,ghost.height/4);
}

function mousePressed(currGhost){
  currGhost = 1;
}




function pumpkinImage(){
  keyPressed();
}

function keyPressed(){
  if (key == "r"){
    image(pumpkinRed,mouseX,mouseY,pumpkinRed.width/2,pumpkinRed.height/2);
  }
  if (key == "g"){
    image(pumpkinGreen,mouseX,mouseY,pumpkinGreen.width/2,pumpkinGreen.height/2);
  }
  if (key == "b"){
    image(pumpkinBlack,mouseX,mouseY,pumpkinBlack.width/2,pumpkinBlack.height/2);
  }
}




function batImage(){
//  frameRate(2);
  for(var i = 0; i < 10; i++){
        image(bat, random(width), random(height), random(width),random(height));

}

}
