var t = 0;
function setup(){
  createCanvas(700,700);
  background(51);
}
function draw(){
  background(51);
  stroke(255);
  strokeWeight(5);
  translate(width/2,height/2);
  // point(x1(t),y1(t));
  // point(x2(t),y2(t));
  for(i = 0;i<10;i++){
    line(x1(t+i),y1(t+i),x2(t+i),y2(t+i));

  }
  t+=0.5;
}
function x1(t){
  return sin(t/10)*100 + sin(t/5)* 20;
}
function y1( t){
  return cos(t/50)*100 + cos(t/10)*10;
}
function x2( t){
  return sin(t/10)*100 + sin(t)*2;
}
function y2( t){
  return cos(t/20)*200 + cos(t/15) * 100;
}
