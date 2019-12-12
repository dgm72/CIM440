tree1B = createImg("Assets/treeCard.jpg");
tree1B.position(750,400);
tree1B.size(width/9,600);
tree1B.mousePressed(function(){
  currCardT1 = true;
  console.log("truee tree");
  sameCardTree();
  currCardS1 = false;
  currCardS1 = false;
  currCardSn1 = false;
  currCardSn2 = false;
  currCardM1 = false;
  currCardM2 = false;
}) // end of tree1

tree2B = createImg("Assets/treeCard.jpg");
tree2B.position(1000,200);
tree2B.size(width/9,height/5);
tree2B.mousePressed(function(){
  currCardT2 = true;
  console.log("truee tree");
  sameCardTree();
  currCardS1 = false;
  currCardS1 = false;
  currCardSn1 = false;
  currCardSn2 = false;
  currCardM1 = false;
  currCardM2 = false;
}) // end of tree2

//==========================================================================================

mouse1B = createImg("Assets/mouseCard.jpg");
mouse1B.position(200,600);
mouse1B.size(width/10,height/4);
mouse1B.mousePressed(function(){
  currCardM1 = true;
  console.log("truee mouse");
  sameCardMouse();
  currCardS1 = false;
  currCardS1 = false;
  currCardT1 = false;
  currCardT2 = false;
  currCardSn1 = false;
  currCardSn2 = false;
})

//==========================================================================================

mouse2B = createImg("Assets/mouseCard.jpg");
mouse2B.position(200,200);
mouse2B.size(width/10,height/4);
mouse2B.mousePressed(function(){
  currCardM2 = true;
  console.log("truee mouse");
  sameCardMouse();
  currCardS1 = false;
  currCardS1 = false;
  currCardT1 = false;
  currCardT2 = false;
  currCardSn1 = false;
  currCardSn2 = false;
})

//==========================================================================================

snowman1B = createImg("Assets/snowmanCard.jpg");
snowman1B.position(200,400);
snowman1B.size(width/10,height/4);
snowman1B.mousePressed(function(){
currCardSn1 = true;
console.log("truee sn");
sameCardSnowman();
currCardS1 = false;
currCardS1 = false;
currCardT1 = false;
currCardT2 = false;
currCardM1 = false;
currCardM2 = false;
})

//==========================================================================================

snowman2B = createImg("Assets/snowmanCard.jpg");
snowman2B.position(200,400);
snowman2B.size(width/10,height/4);
snowman2B.mousePressed(function(){
currCardSn2 = true;
console.log("truee sn");
sameCardSnowman();
currCardS1 = false;
currCardS1 = false;
currCardT1 = false;
currCardT2 = false;
currCardM1 = false;
currCardM2 = false;
})
