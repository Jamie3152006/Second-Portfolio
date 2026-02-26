var i =0;
let font;
let img;

function setup() {
  canvas = createCanvas(900, 400);
  canvas.parent("sketch-container");
  angleMode(DEGREES);
}

function preload (){
  font = loadFont("RubikGlitch-Regular.ttf");
  img = loadImage("eyeball.png")
}

function draw() {
  // blendMode(BLEND);
  i = i+1;
  
  if (floor(i/150)%2 === 0){
    background(0);
    textFont(font);
    textSize(170);
    fill(0, 10);
    text("Unseen", width/2-340, height/2+50);
    // push();
    // stroke(255, 90);
    // noFill();
    // strokeWeight(20);
    // arc(width/2, height/2, 400,150, 0, 180, OPEN);
    // pop();
    noStroke();
  }else{
    blendMode(DIFFERENCE);
    textFont(font);
    textSize(170);
    // push();
    // noStroke();
    // fill(0);
    // rect(width/2-50, height/2-100, 500,450);
    // pop();
    stroke("white");
    fill(255)
    text("Unseen", width/2-340, height/2+50);
    // img.resize(400,400);
    // image(img,width/2, height/2);
    blendMode(BLEND);
  }
  
}