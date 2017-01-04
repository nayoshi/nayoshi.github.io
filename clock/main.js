var r;
var g;
var b;
function setup(){
 createCanvas(windowWidth,windowHeight);
 frameRate(1);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw(){
  b = second();
	r = hour();
  g = minute();

  var rsec = random(255);
  var gsec = random(255);
  var bsec = random(255);
 background(rsec, gsec, bsec);
 push();
 textSize(85);
 stroke(0);
 strokeWeight(10);
 fill(255);
 textFont("Georgia");
 text(r + ":" + g + ":" + b,windowWidth/2,windowHeight/2);
 pop();
}
