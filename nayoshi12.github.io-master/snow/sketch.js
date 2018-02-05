var pot;
var snow = [];
var start = true;
function clack(){
	if(start){
  	start = false;
  }
  else start = true;
}
function setup(){
	createCanvas(windowWidth,windowHeight);
	pot = new Snow();
	for(d = 0;d<1000;d++){
  	snow.push(new Snow());
  }
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}
function mouseClicked() {
	clack();
}
function draw(){

	background(54);

  pot.update();
  for(d=0;d<snow.length;d++){
  	snow[d].update();
  
  }
  	
}
function Snow(){
 this.x = random(width);
 this.y = random(-500,-50);
  this.z = random(0, 20);
  this.radius = map(this.z, 0, 2, 1, 2);
  this.gravity = 0.05;
 this.color = 255;
 this.velocity = 0;
 this.update = function(){
 	noStroke();
 	ellipse(this.x,this.y,this.radius);
 	this.velocity += this.gravity;
  this.y += this.velocity;
	if(start){
  
  if(this.y>height){
  	this.y = random(-600,-0);
    this.velocity = 0.1;
		this.x = random(width);    
  }
 
  }
 }
}