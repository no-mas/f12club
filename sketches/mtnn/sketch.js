let xoff = 0.0;

function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent('sketchID');
  background(228, 224, 211);
  stroke(17, 126, 157);
  strokeWeight(1.3);
  noFill();
  frameRate(6);
}

function draw() {
  background(228, 224, 211);
  for (let x = 0; x < width; x+= 5) {
    let xh = noise(xoff) * height;
    line(x, 0, x, xh);
    xoff += 0.01;
  }
  //stroke(6, 174, 213);
  for (let x = 3; x < width; x += 5) {
    let xh = noise(xoff) * height;
    line(x, height, x, height-xh);
    xoff += 0.01;
  }
}
