class KPoint {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    Draw() {
        ellipse(this.x, this.y, this.size, this.size);
    }

    changePos(x, y) {
        this.x = x;
        this.y = y;
    }
}