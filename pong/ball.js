function Ball() {
    this.x = width / 2;
    this.y = height / 2;
    this.radius = 50;
    this.xSpeed = -10 - random(5);
    this.ySpeed = 10 - random(5);
    this.update = function() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.radius);
    }
    this.move = function() {
        if (this.y < 0 || this.y > height - this.radius) {
            this.ySpeed = -this.ySpeed;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;

    }
    this.reset = function() {
        this.x = width / 2;
        this.y = height / 2;
        this.xSpeed = -this.xSpeed;
        this.ySpeed = -this.ySpeed;
    }
}
