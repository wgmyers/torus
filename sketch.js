function setup() {
  var myCanvas = createCanvas(1200, 800, WEBGL);
  myCanvas.parent('donut');
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(150, 140);
}
