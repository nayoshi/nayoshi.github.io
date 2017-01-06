var circle;
var heldL = false;
var heldR = false;

function setup() {
    circle = new Circle();
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(25, 25, 25);
    circle.show();
    circle.update();
    if (heldL) {
        circle.left();
    }
    if (heldR) {
        circle.right();

    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        heldL = true;
    } else if (keyCode === RIGHT_ARROW) {
        heldR = true;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        heldL = false;
    } else if (keyCode === RIGHT_ARROW) {
        heldR = false;
    }
}
