// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22


var sloth, puppy, dinosaur, ck3, ck4;
var sButton, pButton, dButton, ck3Button, ck4Button;
var currentImage = 0;
var curImage;

function preload(){
  sloth = loadImage("images/sloth.jpg");
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  ck3 = loadImage("images/ck3.jpg");
  ck4 = loadImage("images/ck4.jpg");
}


function setup() {
  // put setup code here
createCanvas(400,400);

sButton = createButton("Sloth");
sButton.mousePressed(function(){
  currentImage = 0;
});

pButton = createButton("Puppy");
pButton.mousePressed(function(){
  currentImage = 1;
});

dButton = createButton("Dinosaur");
dButton.mousePressed(function(){
  currentImage = 2;
});

ck3Button =createButton("Camp Kesem #3");
ck3Button.mousePressed(function(){
  currentImage = 3;
});

ck4Button =createButton("Camp Kesem #4");
ck4Button.mousePressed(function(){
  currentImage = 4;
});




curImage = sloth;

}


function draw() {
  // put drawing code here
  background(255);

  console.log("currentImage "+ currentImage);

if(currentImage == 0){
  curImage = sloth;
}else if(currentImage == 1){
    curImage = puppy;
}else if(currentImage == 2){
  curImage = dinosaur;
}else if(currentImage == 3){
  curImage = ck3;
}else if(currentImage == 4){
  curImage = ck4;
}

 image(curImage,0,0,curImage.width/4,curImage.height/4);





}
