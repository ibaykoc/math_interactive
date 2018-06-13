class KTypeCursor {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.height = 25;
        this.isShow = false;
        this.blinkShow = true;
        this.counter = 0;
    }

    Show(x, y) {
        this.x = x;
        this.y = y;
        this.isShow = true;
    }

    Draw() {
        if(this.isShow) {
            if(this.blinkShow){
                stroke(255);
                line(this.x, this.y - this.height + 3, this.x, this.y+ 3);
            }
            this.counter ++;
            if(this.counter > 30){
                this.counter = 0;
                this.blinkShow = !this.blinkShow;
            }
        }
    }

    Hide() {
        this.isShow = false;
    }
}