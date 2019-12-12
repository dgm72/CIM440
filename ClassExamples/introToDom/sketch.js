function setup() {
  // put setup code here
  var cnv = createCanvas(400,400);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");

  select("#container0").html("<h1>Your sketch title here!</h1>");
  // to search for an id, you use the # toke in front of the name


  select("#container0").style("width","400px");
  select("#container0").style("margin","0 auto"); // center your container, margin: 0 auto, 0 refers to top and bottom spacing, the auto refers to left and right spacing. this will only work if you set a width.

  cnv.parent("#container0");

}

function draw() {
  // put drawing code here
  background(0);
}
