function Slider(player) {
    if (player == true) {
        this.x = width * 0.05;
        this.y = height / 2;
    } else {
        this.x = width * 0.90;
        this.y = height / 2;
    }
    this.width = 50;
    this.height = 300;
    this.update = function() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
    this.move = function(y) {
        this.y = y;
        if (this.y >= height - this.height)
            this.y = height-this.height;
    }

}
