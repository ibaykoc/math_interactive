let typingText = false;
let typingPos;
let texts = [];
let mathScope = {
  x : 0
}
let graphFunc = 'x * x';
function setup() {
  createCanvas(600,600);
}

function draw() {  
  translate(width/2, height/2);
  background(0);
  draw2dcartesian();
  drawGraph();
  noStroke();
  fill(255);
  const curX = mouseX - width/2
  mathScope.x = curX;
  ellipse(curX,math.eval(graphFunc, mathScope), 8, 8);
  text("test",-width/2+2,-height/2+20);
  texts.forEach(t => {
    text(t.text, t.x, t.y);
  });
}

function mousePressed() {
  if(mouseButton === LEFT) {
    typingPos = createVector(mouseX - width/2, mouseY - height/2);
    typingText = true;
    texts.push({
      text:"",
      x: typingPos.x,
      y: typingPos.y
    });
    console.log("text added")
  }
}

function keyPressed() {
  if(typingText) {
    if(keyCode === 8){
      texts[0].text = texts[0].text.slice(0, -1);
    }
  }
}

function keyTyped() {
  if(typingText) {
    if(keyCode === 13) {
      let t = texts[0].text
      console.log(t)
      graphFunc = t;
    }else{
      texts[0].text += key;
    }
  }
  
}

function draw2dcartesian() {
  // X
  stroke(255,0,0);
  line(-width,0, width,0);

  // Y
  stroke(0,255,0);
  line(0, -height, 0, height);
}

function drawGraph() {
  stroke(255);
  beginShape();
  noFill();
  for (let x = -width; x < width; x++) {
    mathScope.x = x;
    vertex(x,math.eval(graphFunc, mathScope));
  }
  endShape();

}