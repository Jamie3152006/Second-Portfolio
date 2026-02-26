let slider;
let font;

function preload(){
  font = loadFont("LexendZetta-Thin.ttf");
}

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");
  let p = createP("and the unseen");
  p.position(480,500);
  slider = createSlider (0, 800, 0);
  slider.position(0,600);
}

function draw() {
  let g = slider.value();
  background(g);
  fill("white");
  text("the hidden", 300,300);
}