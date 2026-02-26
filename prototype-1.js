let font;
let img;
let img2;
let dots;
let dots2;
let dots3;
let affector = 5;

function preload() {
  font = loadFont("LexendZetta-Light.ttf");
  img = loadImage("flower1.png");
  img2 = loadImage("flower2.png")
}

function setup() { 
  background(255,183,197);
  angleMode(DEGREES);
  canvas = createCanvas(790, windowHeight);
  canvas.parent("sketch-container");
  dots = font.textToPoints('peace', -56, -20, 130,
                          {sampleFactor: 0.45,
                           simplifyThreshold: 0});
  
  dots2 = font.textToPoints('m i n d', -40, 450, 110,
                          {sampleFactor: 0.5,
                           simplifyThreshold: 0});
  
  dots3 = font.textToPoints('of', 320, 220, 150,
                          {sampleFactor: 0.5,
                           simplifyThreshold: 0});
} 

function ns(x, y, z, scale_, min_, max_) {
  return map(
    noise(x*scale_, y*scale_, z*scale_),
    0, 1, min_, max_);
}

let xz = 0;
let yz = 500;

function draw() { 
  background(255,183,197,10);
//   push();
//   noStroke();
//   fill(181,209,146, 30);
//   rect(30,40, 340,190, 20);
//   rect(420,190, 340,430, 20);
//   rect(140,300, 190,100, 20);
//   fill(97,115,76, 20);
//   rect(45,50, 340,190, 20);
//   rect(435,200, 340,430, 20);
//   rect(155,310, 190,100, 20);
//   pop();
  
//   push();
//   img.resize(480,480);
//   image(img, 380,230);
//   img2.resize(580,840);
//   rotate(9);
//   image(img2,-30,-100);
//   pop();
  
  let change = map(mouseY, 0,width, 5,width/10);
  affector = mouseX;
  // noStroke();
  stroke(246,74,138);
  strokeWeight(0.06);
  fill(255,253,208);
  
  push();
  translate(80, 220);
  for (let i = 0; i < dots.length; i++) {
    let xoff = ns(dots[i].x, dots[i].y, xz, 0.005, -50, 50);
    let yoff = ns(dots[i].y, dots[i].x, yz, 0.005, -50, 50);
    xoff += random(-change, change);
    yoff += random(-change, change);
    ellipse(dots[i].x + xoff, dots[i].y + yoff, 1, 25);
  }
  pop();
  
  push();
  translate(80, 220);
  for (let i = 0; i < dots2.length; i++) {
    let xoff = ns(dots2[i].x, dots2[i].y, xz, 0.005, -50, 50);
    let yoff = ns(dots2[i].y, dots2[i].x, yz, 0.005, -50, 50);
    xoff += random(-change, change);
    yoff += random(-change, change);
    ellipse(dots2[i].x + xoff, dots2[i].y + yoff, 1, 25);
  }
  pop();
  
  push();
  translate(80, 220);
  for (let i = 0; i < dots3.length; i++) {
    let xoff = ns(dots3[i].x, dots3[i].y, xz, 0.005, -50, 50);
    let yoff = ns(dots3[i].y, dots3[i].x, yz, 0.005, -50, 50);
    xoff += random(-change, change);
    yoff += random(-change, change);
    ellipse(dots3[i].x + xoff, dots3[i].y + yoff, 1, 25);
  }
  pop();
  
  xz += 0.2*affector;
  yz += 3;
}