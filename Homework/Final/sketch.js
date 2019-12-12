//snow stuff

var quantity = 300;
var xPosition = [];
var yPosition = [];
var flakeSize = [];
var direction = [];
var minFlakeSize = 1;
var maxFlakeSize = 5;
var snowColor = 255;


var scene, snowflake, music, cookie, gameScene;
var SoundFile;
var snowflakeButton, musicButton, musicStopButton, cookieButton, gameSceneB;
var currImage;
var santa1B, santa2B;
var tree1B, tree2B;
var mouse1B, mouse2B;
var snowman1B, snowman2B;
var currText;
let currCardS1 = false;
let currCardS2 = false;
let currCardT1 = false;
let currCardT2 = false;
let currCardSn1 = false;
let currCardSn2 = false;
let currCardM1 = false;
let currCardM2 = false;



function preload(){
  scene = loadImage("Assets/scene2.png");
  snowflake = loadImage("Assets/flake1.jpg");
  SoundFile = loadSound("Assets/SilentNight.mp3");
  music = loadImage("Assets/star1.jpg");
  cookie = loadImage("Assets/cookie1.jpg");
  gameScene = loadImage("Assets/backgroundd.png");
  santa1B = loadImage("Assets/santaCard.jpg");
  santa2B = loadImage("Assets/santaCard.jpg");
  tree1B = loadImage("Assets/treeCard.jpg");
  tree2B = loadImage("Assets/treeCard.jpg");
  mouse1B = loadImage("Assets/mouseCard.jpg");
  mouse2B = loadImage("Assets/mouseCard.jpg");
  snowman1B = loadImage("Assets/snowmanCard.jpg");
  snoman2B = loadImage("Assets/snowmanCard.jpg");
  textButton = loadImage("Assets/TEXT.png");
}



function setup() {
  // put setup code here
  createCanvas(2000,1000);
  frameRate(30);
  noStroke();

//snow stuff
for(var i = 0; i < quantity; i++) {
    flakeSize[i] = round(random(minFlakeSize, maxFlakeSize));
    xPosition[i] = random(0, width);
    yPosition[i] = random(0, height);
    direction[i] = round(random(0, 1));
  }
snowflakeButton = createImg("Assets/snowflake1.png");
snowflakeButton.position(720,190);
snowflakeButton.size(100,100);
snowflakeButton.mouseOver(changeSizeS);
snowflakeButton.mouseOut(changeBackS);
snowflakeButton.mousePressed(function(){
  currImage = 0;
})

musicButton = createImg("Assets/musicf.png");
musicButton.position(1000,190);
musicButton.size(100,100);
musicButton.mouseOver(changeSizeM);
musicButton.mouseOut(changeBackM);
musicButton.mousePressed(togglePlaying);

cookieButton = createImg("Assets/cookie1.jpg");
cookieButton.position(1300,170);
cookieButton.size(150,150);
cookieButton.mouseOver(changeSizeC);
cookieButton.mouseOut(changeBackC);
cookieButton.mousePressed(toggleGame);

} /// end of set up

function draw() {
  background(scene);
    if (currImage == 0){
  drawSnow();
}
if (currText == 1) {
  toggleText();
}

}

function togglePlaying(){
  if (!SoundFile.isPlaying()){
    SoundFile.play();
    SoundFile.setVolume(0.3);
  } else {
    SoundFile.pause();
  }
}
function toggleText(){
fill(0);
textSize(32);
  text("Click and match the pictures that look the same!", 100, 900);

}
function toggleGame(){
  currText = 1;
console.log("uhh");
//==========================================================================================
  santa1B = createImg("Assets/santaCard.jpg");
  santa1B.position(250,300);
  santa1B.size(width/10,height/4);
  santa1B.mousePressed(function(){
    currCardS1 = true;
    console.log("true santa1");
    currCardT1 = false;
    currCardT2 = false;
    currCardSn1 = false;
    currCardSn2 = false;
    currCardM1 = false;
    currCardM2 = false;
    sameCardSanta();
  })// end of santa1b

  santa2B = createImg("Assets/santaCard.jpg");
  santa2B.position(1000,300);
  santa2B.size(width/10,height/4);
  santa2B.mousePressed(function(){
    currCardS2 = true;
    console.log("truee");
    currCardT1 = false;
    currCardT2 = false;
    currCardSn1 = false;
    currCardSn2 = false;
    currCardM1 = false;
    currCardM2 = false;
    sameCardSanta();
  }) // end of santa2

//==========================================================================================

tree1B = createImg("Assets/treeCard.jpg");
tree1B.position(750,300);
tree1B.size(width/10,height/4);
tree1B.mousePressed(function(){
  currCardT1 = true;
  console.log("truee tree");
  sameCardTree();
  currCardS1 = false;
  currCardS2 = false;
  currCardSn1 = false;
  currCardSn2 = false;
  currCardM1 = false;
  currCardM2 = false;
}) // end of tree1

tree2B = createImg("Assets/treeCard.jpg");
tree2B.position(250,600);
tree2B.size(width/10,height/4);
tree2B.mousePressed(function(){
  currCardT2 = true;
  console.log("truee tree");
  sameCardTree();
  currCardS1 = false;
  currCardS2 = false;
  currCardSn1 = false;
  currCardSn2 = false;
  currCardM1 = false;
  currCardM2 = false;
}) // end of tree2

//==========================================================================================

mouse1B = createImg("Assets/mouseCard.jpg");
mouse1B.position(500,300);
mouse1B.size(width/10,height/4);
mouse1B.mousePressed(function(){
  currCardM1 = true;
  console.log("truee mouse");
  sameCardMouse();
  currCardS1 = false;
  currCardS2 = false;
  currCardT1 = false;
  currCardT2 = false;
  currCardSn1 = false;
  currCardSn2 = false;
})

//==========================================================================================

mouse2B = createImg("Assets/mouseCard.jpg");
mouse2B.position(750,600);
mouse2B.size(width/10,height/4);
mouse2B.mousePressed(function(){
  currCardM2 = true;
  console.log("truee mouse");
  sameCardMouse();
  currCardS1 = false;
  currCardS2 = false;
  currCardT1 = false;
  currCardT2 = false;
  currCardSn1 = false;
  currCardSn2 = false;
})

//==========================================================================================

snowman1B = createImg("Assets/snowmanCard.jpg");
snowman1B.position(1000,600);
snowman1B.size(width/10,height/4);
snowman1B.mousePressed(function(){
currCardSn1 = true;
console.log("truee sn");
sameCardSnowman();
currCardS1 = false;
currCardS2 = false;
currCardT1 = false;
currCardT2 = false;
currCardM1 = false;
currCardM2 = false;
})

//==========================================================================================

snowman2B = createImg("Assets/snowmanCard.jpg");
snowman2B.position(500,600);
snowman2B.size(width/10,height/4);
snowman2B.mousePressed(function(){
currCardSn2 = true;
console.log("truee sn");
sameCardSnowman();
currCardS1 = false;
currCardS2 = false;
currCardT1 = false;
currCardT2 = false;
currCardM1 = false;
currCardM2 = false;
})
//==========================================================================================
} //end of toggleGame
function drawSnow() {
	for(var i = 0; i < xPosition.length; i++) {

    ellipse(xPosition[i], yPosition[i], flakeSize[i], flakeSize[i]);

    if(direction[i] == 0) {
      xPosition[i] += map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    } else {
      xPosition[i] -= map(flakeSize[i], minFlakeSize, maxFlakeSize, .1, .5);
    }

    yPosition[i] += flakeSize[i] + direction[i];

    if(xPosition[i] > width + flakeSize[i] || xPosition[i] < -flakeSize[i] || yPosition[i] > height + flakeSize[i]) {
      xPosition[i] = random(0, width);
      yPosition[i] = -flakeSize[i];
    }
  }
}
//==========================================================================================
function sameCardSanta (){
  if (currCardS1 == true && currCardS2 == true){
    console.log("fuckyeah");
    santa1B.remove();
    santa2B.remove();
  }
}
function sameCardTree (){
  if (currCardT1 == true && currCardT2 == true){
    console.log("fuckyeah tree");
    tree1B.remove();
    tree2B.remove();
  }
}
function sameCardSnowman (){
  if (currCardSn1 == true && currCardSn2 == true){
    console.log("fuckyeah snowman");
    snowman1B.remove();
    snowman2B.remove();
  }
}
function sameCardMouse (){
  if (currCardM1 == true && currCardM2 == true){
    console.log("fuckyeah mouse");
    mouse1B.remove();
    mouse2B.remove();
  }
}
//==========================================================================================
function changeSizeC(){
  cookieButton.size(170,170);
}
function changeBackC(){
  cookieButton.size(150,150);
}
function changeSizeM(){
  musicButton.size(120,120);
}
function changeBackM(){
  musicButton.size(100,100);
}
function changeSizeS(){
  snowflakeButton.size(120,120);
}
function changeBackS(){
  snowflakeButton.size(100,100);
}
