let font;
function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");
  frameRate(1);
}

function preload(){
  font = loadFont('Affigere-Regular.otf');
}

function draw() {
  // fill(0 + sin (frameCount*0.6) * 255,8,0); 
  fill(237,41,57);
  textFont(font);
  background(0);
  textSize(random((90,110)));
  text("I", 30, 100);
  text("C", 90, 189);
  text("L", 290, 520);
  text("e", 530, 590);
  push();
  textSize(random((290)));
  text("N", 230, 230);
  text("0", 100, 480);
  text("M", -70, 599);
  pop();
  push();
  textSize(random((160,210)))
  text("P", 230, 430);
  text("T",10, 335);
  pop();
  push();
  textSize(random((360,410)));
  text("E", 365, 430);
  pop();
}