let xoff = 0.0;

function setup() {
  createCanvas(900, 600);
  background(128, 120, 111);
  stroke(237,237,233);
  noFill();
  // noLoop();
  smooth();
  frameRate(8);
}

function draw() {
  background(128, 120, 111);
  let xCell = 60;
  let yCell = 30;
  let bump = 6;

  stroke(237,237,233);
  for (let y = yCell; y < height; y += yCell) {
    line(0, y, width, y);
  }
  for (let x = xCell; x < width; x += xCell) {
    line(x, 0, x, height);
  }

  noStroke();
  fill(214, 204, 194);
  for (let y = yCell; y < height-yCell; y += yCell) {
    for (let x = xCell; x < width-xCell; x += xCell) {
      let xmv = noise(xoff) * xCell;
      rect(x+xmv-(bump/2.0), y+bump, 3*bump, yCell-(2*bump));
      xoff += 0.01;
    }
  }
}

