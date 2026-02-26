
let spacing = 5; 
let points = [];    
let font;


function preload() {
  font = loadFont('LaBelleAurore-Regular.ttf');
}


function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");

  background(220);
  textFont(font);
  textSize(180);
  textAlign(CENTER, CENTER);
  fill(0);
  noStroke();
  text('Peace', width/2-120,height/2-200);
  text('of', width/2+80,height/2-75);
  push();
  textSize(170);
  text('MIND', width/2,height/2+170);
  pop();
 
  loadPixels();
  for (let y=0; y<height; y+=spacing) {
    for (let x=0; x<width; x+=spacing) {
      let r = get(x, y)[0];   
      if (r < 127) {           
     
        points.push(createVector(x,y));
      }
    }
  }
}


function draw() {
  background(118,171,223);
  
  let change = map(mouseX, 0,width, 3,width/6);
  let pulseSpeed = 12;
  randomSeed(floor(frameCount/pulseSpeed));
  
  for (let i=0; i<points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    x += random(-change,change);
    y += random(-change,change);

    fill(162,189,192, 20);    
    noStroke();
    circle(x+2,y+2, 17);
    
    fill(255,244,246, 100);     
    stroke(162,189,192);
    circle(x,y, 18);
  }
}