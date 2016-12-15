var slider;
function setup() {
  textSize(32);
  createCanvas(600,600);
  colorMode(HSB);
  slider = createSlider(0, 360, 60, 0.01);
  slider.position(10, 10);
  slider.style('width', '80px');

}

function draw() {
  background(255, 32, 255, 1);

  var val = slider.value();
  textSize(100);
  fill(val,val,val);
  text("Hello World", 0,height/2);
}
