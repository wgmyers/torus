function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('Roboto-Regular.otf');
}

var myCanvasPos;

function setup() {
  var myCanvas = createCanvas(1200, 800, WEBGL);
  /* myCanvas goes in donut div */
  myCanvas.parent('donut');
  // We need to know where we are so we can position everything else
  myCanvasPos = myCanvas.position();

  /* Text settings */
  textSize(15);
  textColor = color("#DDDDDD");
  textFont(font);
  textAlign(LEFT, TOP);
  bgColor = color("#333333")

  /* Light grey wireframe */
  noFill();
  line = color("#DDDDDD");
  stroke(line);

  /* Set up some sliders */
  radiusSlider = createSlider(5,300,150);
  radiusSlider.position(myCanvasPos.x + 20, myCanvasPos.y + 20);
  tubeSlider = createSlider(5,300,150);
  tubeSlider.position(myCanvasPos.x + 20, myCanvasPos.y + 50);
}

function draw() {
  var radius = radiusSlider.value();
  var tube = tubeSlider.value();
  background(bgColor);
  // FIXME - how the hell do we line up the slider labels with the slider?
  // Seems to use different co-ordinate system to setup(), now 0,0 is center
  // of the canvas.
  //fill(textColor);
  //text("Donut size", 100, 35);
  //text("Tube radius", 100, 65);
  //noFill();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(radius, tube);
}
