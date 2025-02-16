let xoff = 0.0;

function setup() {
  let canvas = createCanvas(900, 600);
  canvas.parent("sketchID");
  background(228, 224, 211);
  stroke(100);
  strokeWeight(1.0);
  noFill();
  frameRate(4);
  noSmooth();
}

function draw() {
  background(228, 224, 211);
  stroke(247, 42, 42);
  for (let x = 0; x < width; x+= 5) {
    let xh = noise(xoff) * height;
    line(x, 0, x, xh);
    xoff += 0.01;
  }
  stroke(57, 142, 178);
  for (let x = 2; x < width; x += 6) {
    let xh = noise(xoff) * height;
    line(x, height, x, height-xh);
    xoff += 0.01;
  }
  stroke(242, 180, 36);
  for (let x = 4; x < width; x += 6) {
    let xh  = noise(xoff) * height;
    line(x, (height*0.5)-(xh*0.5), x, (height*0.5)+(xh*0.5));
    xoff += 0.01;
  }
}
