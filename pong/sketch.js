var player;
var ai;
var ball;
var pixelFont;
var scoreP = 0;
var scoreA = 0;
var aiDifficulty = 5;

function preload() {
    pixelFont = loadFont("https://dl.dropboxusercontent.com/u/44609075/nayostuff/pixelFont.otf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball = new Ball();
    player = new Slider(true);
    ai = new Slider(false);

}

function draw() {
    background(0);
    displayText();

    ball.update();
    ball.move();

    dotty();

    player.update();
    ai.update();
    player.move(mouseY);
    giveScores();
    sliderCollition();
    aiControl();

}
function dotty(){
  var x1 = windowWidth/2;
  var y1 = 0;
  var x2 = windowWidth/2;
  var y2 = windowHeight;
  for (var i = 0; i <= 100; i++) {
    var x = lerp(x1, x2, i/10.0) + 21;
    var y = lerp(y1, y2, i/10.0);
    fill(255);
    strokeWeight(4);
    point(x, y);
  }
}
function displayText(){
  push();
  textFont(pixelFont);
  textSize(100);
  fill(255);
  text(scoreP, width * 0.15, height * 0.20);
  text(scoreA, width * 0.80, height * 0.20);
  text("Pong", (width * .38), height * .2);
  textSize(50);
  text("by Matthew Bautista",width*.38,height*.27);
  text("Left Click the mouse to reset the ball",width*.20,height*.29,width*.50,height*.40);
  pop();
}

function mouseClicked() {
    ball.reset();
}

function windowResized() {
    window.location.reload();
}



function giveScores() {
    if (ball.x <= 0) {
        ball.reset();
        scoreA++;
    }if (ball.x >= width) {
        ball.reset();
        scoreP++;
    }
}

function aiControl() {
    if (ai.y > ball.y) {
        ai.move(ai.y - aiDifficulty);
    }
    if (ai.y < ball.y) {
      ai.move(ai.y + aiDifficulty);
    }
}


function sliderCollition() {

    if ((player.x + player.width > ball.x) || (player.x > ball.x)) {

        if (ball.y + (ball.radius) > player.y) {

            if (ball.y + (ball.radius) < player.y + player.height) {
                ball.xSpeed = -ball.xSpeed;

            }
        }
    }
    if ((ai.x < ball.x)) {

        if (ball.y + (ball.radius) > ai.y) {

            if (ball.y + (ball.radius) < ai.y + ai.height) {
                ball.xSpeed = -ball.xSpeed;
            }
        }
    }

}
