let characters = "incomplete";
let font;
let xPositions = [0, 0, 0, 0, 0, 0 ,0, 0, 0, 0];
let yPositions = [0, 0, 0, 0, 0, 0 ,0, 0, 0, 0];
let Characters = ["I", "N", "C", "O", "M", "P", "L", "E", "T", "E"];
let charTextSize = [50,50,50,50,50,50,50,50,50,50];
let maskLayer;
let animationLayer;
let designLayer;
let img;


function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketch-container");
  angleMode(DEGREES);
  textAlign(CENTER);
  frameRate(10);
  maskLayer = createGraphics(width, height);
  animationLayer = createGraphics(width, height);
  designLayer = createGraphics(width, height);
}

function preload() {
  font = loadFont("Affigere-Regular.otf");
  img = loadImage("back3.svg");
}

function changePosition(n){
  let newN = random(width);
  if (newN != n) {
    return newN;
  }
  else {
    changePosition(n);
  }
}

function draw() {
  background(0);
  
  animationLayer.clear();
  animationLayer.background(153,0,0);
  animationLayer.fill(255,250,205);
  animationLayer.textFont(font);
  animationLayer.textAlign(CENTER);

  push();
  fill(0, 120);
  rect(0, 0, 600, 600);
  pop();
  
  if (frameCount % 50 == 0) {
    fill(255,250,205);
    textFont(font);
    
    let char = random(split(characters, ""));
    
    xPositions.forEach((x, index) => {
      xPositions[index] = random(width)
    });
    yPositions.forEach((y, index) => {
      yPositions[index] = random(height)
    });
    charTextSize.forEach((size, index) => {
    charTextSize[index] = random(50, 160);
    });
  }
  for (let i = 0; i < 10; i++) {
     textSize(charTextSize[i]);
      text(Characters[i], xPositions[i], yPositions[i]);
    }
  
  
//   maskLayer.clear();
 circle(mouseX, mouseY, 200);
  
//   let newImg = createImage(width, height);
//   newImg.copy(animationLayer, 0, 0, width, height, 0, 0, width, height);
//   newImg.mask(maskLayer);

//   image(newImg, 0, 0);
  
  
//   let designImg = createImage(width, height);
//   designImg.copy(img, 0, 0, width, height, 0, 0, width, height);
  
//   designLayer.clear();
//   designLayer.stroke("white");
//   designLayer.strokeWeight(3);
//   designLayer.noFill();
//   designLayer.image(img, 0, 0, width, height);
//   designLayer.ellipse(width/2-3, height/2+15, 200,100);
//   push();
//   designLayer.textFont(font);
//   designLayer.textSize(47);
//   designLayer.stroke(0);
//   designLayer.fill("#E9E5D6");
//   designLayer.text("SEARCHING",width/2-83, height/2+31);
//   pop();
  

//   designLayer.drawingContext.globalCompositeOperation = 'destination-out';
//   designLayer.noStroke();
//   designLayer.fill(255);
//   designLayer.circle(mouseX, mouseY, 200);
//   designLayer.drawingContext.globalCompositeOperation = 'source-over';

// image(designLayer, 0, 0);
}