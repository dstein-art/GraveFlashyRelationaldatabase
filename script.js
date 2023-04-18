let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke()
  rect(mouseX,mouseY,25);
  ellipse(mouseX, mouseY, 25, 25);
}