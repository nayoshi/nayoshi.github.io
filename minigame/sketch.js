var circle;
var heldL = false;
var heldR = false;
var heldU = false;
var heldD = false;

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
    if (heldU) {
        circle.grow();
    }
    if (heldD) {
        circle.shrink();
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
    if (keyCode === UP_ARROW) {
        heldU = true;
    }
    if (keyCode === DOWN_ARROW) {
        heldD = true;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        heldL = false;
    } else if (keyCode === RIGHT_ARROW) {
        heldR = false;
    } else if (keyCode === UP_ARROW) {
        heldU = false;
    } else if (keyCode === DOWN_ARROW) {
        heldD = false;
    }
}
