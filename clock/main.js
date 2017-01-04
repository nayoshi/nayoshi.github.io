var r;
var g;
var b;
function setup(){
 createCanvas(windowWidth,windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw(){
	r = hour();
  g = minute();
  b = second();
 background(r, g, b);
 push();
 textSize(85);
 stroke(0);
 strokeWeight(10);
 fill(255);
 textFont("Georgia");
 text(r + ":" + g + ":" + b,windowWidth/2,windowHeight/2);
 pop();
}
