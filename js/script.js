let x = 100;
let y = 250;
let d = 200;
let s = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#00D7FF");
  ellipse(x, y, d, d);
  fill("#88FF03");
  noStroke();
  //if(mousePressed) {
  // background (#5AFF03);
  textSize(100);
  text(s, 400, 100);
}
function mouseClicked() {
  if (mouseX > x - d && mouseX < x + d) {
    if (mouseY > y && mouseY < y + d) {
      s = s + 1;

      x = random(100, 700);
      y = random(100, 700);
      d = random(100, 700);
    }
  }
}
