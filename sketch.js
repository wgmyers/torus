function setup() {
  var myCanvas;
  var myCanvasPos;
  var maxSize = 300;
  /* Vaguely mobile friendly canvas creation */
  if (displayWidth < 1200) {
    myCanvas = createCanvas(displayWidth, displayHeight, WEBGL);
    maxSize = displayWidth / 4;
  } else {
    myCanvas = createCanvas(1200, 800, WEBGL);
  }
  /* myCanvas goes in donut div */
  myCanvas.parent('donut');
  // We need to know where we are so we can position everything else
  myCanvasPos = myCanvas.position();

  /* Basic display settings */
  bgColor = color("#000000");

  /* We'll be wireframes */
  noFill();

  /* Set up some sliders */
  radiusSlider = createSlider(5, maxSize, maxSize / 2);
  radiusSlider.position(myCanvasPos.x + 20, myCanvasPos.y + 20);
  tubeSlider = createSlider(5, maxSize, maxSize / 2);
  tubeSlider.position(myCanvasPos.x + 20, myCanvasPos.y + 50);
  colorSlider = createSlider(0, 360, 100);
  colorSlider.position(myCanvasPos.x + 20, myCanvasPos.y + 80);
  radiusLabel = createP("Donut size");
  radiusLabel.position(myCanvasPos.x + radiusSlider.width + 40, myCanvasPos.y + 5);
  tubeLabel = createP("Tube radius");
  tubeLabel.position(myCanvasPos.x + tubeSlider.width + 40, myCanvasPos.y + 35);
  colorLabel = createP("Colour");
  colorLabel.position(myCanvasPos.x + colorSlider.width + 40, myCanvasPos.y + 65);
}

function draw() {
  var radius = radiusSlider.value();
  var tube = tubeSlider.value();
  var wireColor;
  background(bgColor);

  // Set colorMode to HSB before drawing torus, then set it back to RGB
  colorMode(HSB, 360);
  wireColor = color(colorSlider.value(), 250, 250);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  stroke(wireColor);
  torus(radius, tube);
  colorMode(RGB, 255);
}
