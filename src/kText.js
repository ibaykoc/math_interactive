class KText {

    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.currentCursorIndex = 0;
        kTypeCursor.Show(x, y);
    }

    Draw() {
        fill(255);
        text(this.text, this.x, this.y);
    }

    keyTyped(key) {
        this.text += key;
        this.currentCursorIndex++;
        kTypeCursor.x = textWidth(this.text) + this.x;
    }

    keyPressed(keyCode) {
        // Backspace
        if(keyCode === 8) {
            this.text = KText.cut(this.text, this.currentCursorIndex-1, this.currentCursorIndex-1);
            this.currentCursorIndex--;
            this.updateCursor();
        }
        // right arrow
        if(keyCode === 39) {
            if(this.text.length > this.currentCursorIndex) {
                this.currentCursorIndex++;
            }
            this.updateCursor();
        }
        // left arrow 
        if(keyCode === 37) {
            if(this.currentCursorIndex > 0) {
                this.currentCursorIndex--;
                this.updateCursor();
            }
        }
    }

    updateCursor() {
        kTypeCursor.x = textWidth(this.text.substring(0, this.currentCursorIndex)) + this.x;
    }

    static cut(str, cutStart, cutEnd){
        console.log(str, str.slice(0,cutStart), str.slice(cutStart, cutEnd));
        return str.slice(0,cutStart) + str.slice(cutStart, cutEnd+1);
    }
}