let kTexts = [];
let kMouseX;
let kMouseY;
let kTypeCursor;
let focusedKText = undefined;

function setup() {
  createCanvas(600,600);
  textSize(20);
  kTypeCursor = new KTypeCursor();
}

function draw() {
  translate(width/2, height/2);
  background(0);

  update();

  kTexts.forEach(kT => {
    kT.Draw();
  });
  kTypeCursor.Draw();
}

function mousePressed() {
  if(mouseButton === LEFT) {
    console.log("add text")
    const newText = new KText("", kMouseX, kMouseY);
    kTexts.push(newText);
    focusedKText = newText;
  }
}

function keyTyped() {
  if(focusedKText) {
    focusedKText.keyTyped(key);
  }
}

function keyPressed() {
  if(focusedKText) {
    focusedKText.keyPressed(keyCode);
  }
}

function update() {
  // Update current local mouse
  kMouseX = mouseX-width/2;
  kMouseY = mouseY-height/2;
}