function setup() {
  var myCanvas = createCanvas(1200, 800, WEBGL);
  /* myCanvas goes in donut div */
  myCanvas.parent('donut');

  /* Light grey wireframe */
  noFill();
  line = color("#DDDDDD");
  stroke(line);

  /* Set up some sliders */
  radiusSlider = createSlider(5,300,150);
  radiusSlider.position(20, 20);
  tubeSlider = createSlider(5,300,150);
  tubeSlider.position(20, 50);
}

function draw() {
  var radius = radiusSlider.value();
  var tube = tubeSlider.value();
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(radius, tube);
}
