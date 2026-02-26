let font;
let img;
let img2;
let img3;
let dots;
let dots2;
let dots3;
let affector = 5;

function preload() {
  font = loadFont("LexendZetta-Light.ttf");
  img = loadImage("blur.jpeg");
  img2 = loadImage("Instagram.png");
  img3 = loadImage("Cloud.png");
}

function setup() { 
  background(255,183,197);
  angleMode(DEGREES);
  canvas = createCanvas(790, 700);
  canvas.parent("sketch-container");
  dots = font.textToPoints('peace', -16, -20, 130,
                          {sampleFactor: 0.45,
                           simplifyThreshold: 0});
  
  dots2 = font.textToPoints('m i n d', 0, 450, 110,
                          {sampleFactor: 0.5,
                           simplifyThreshold: 0});
  
  dots3 = font.textToPoints('of', 280, 220, 150,
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
  
  push();
  fill(154,185,115);
  noStroke();
  rect(100,280, 400,400);
  pop();
  push();
  tint(255, 187);
  img.resize(280,280);
  image(img, 320,70);
  pop();
  push();
  img2.resize(550,650);
  image(img2, 70,80);
  pop();
  tint(255,200);
  img3.resize(380,280);
  image(img3, 267,-110);
  
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