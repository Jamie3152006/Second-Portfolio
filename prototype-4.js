let font;
let font2;
let blurText;
textX = 125;
textY = 350;
let img;

function preload(){
  font = loadFont("Ruda-ExtraBold.ttf");
  // font2 = loadFont("STIXTwoText-Regular.ttf");
  // img = loadImage("blur.jpeg");
  // img2 = loadImage("person.png");
}


function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");
  angleMode(DEGREES);
  noStroke();
  blurText = font.textToPoints("unseen", textX, textY-150, 130, {
    sampleFactor: 0.08});
}

function draw() {
  background("pink");
  

//   push();
//   image(img, 0,0);
//   img2.resize(730,740);
//   image(img2, -20,-25);
//   fill(0, 60);
//   rect(20,20,250,160,20);
//   fill(230,168,23,90);
//   rect(150,130,180,70,20);
//   fill(255,140,0, 90);
//   rect(500,130,80,370,20);
//   fill(192,64,0, 100);
//   rect(30,510,180,70,20);
//   fill(38,97,156,40);
//   circle(480,270, 230);
//   fill(255,186,0, 40);
//   circle(190,520, 70);
//   pop();
  
  // push();
  // fill(0);
  // strokeWeight(0.7);
  // stroke(0);
  // textFont(font2);
  // fill(186,22,12);
  // textSize(280);
  // text("UNS", -40,170);
  // text("EEN", -50,370);
  // textSize(40);
  // fill(255,165,0);
  // text("the hidden", 260,410);
  // text("invisibility", 290,440);
  // text("ephemeral", 320,470);
  // text("exisiting but", 200,500);
  // text("not exisiting", 100,530);
  // text("fading", 150,560);
  // textSize(60);
  // fill(186,22,12);
  // text("DISAPPEAR", 260,600);
  // pop();
  
  // textSize(100);
  // textFont(font);
  // fill(49,120,115);
  // text("unseen", textX+110 , textY-150)
  
  
  for (let i = 0; i < blurText.length; i++) {
    fill(70,130,180);
    ellipseSize = map(mouseX, 0, width, 18, 22);
    ellipse(blurText[i].x, blurText[i].y, ellipseSize, ellipseSize);
  }
  
  blurAmount = map(mouseY, 0, height, 0, 15);
  filter(BLUR, blurAmount);
}