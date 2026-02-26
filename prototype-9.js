let sentence = "INCOMPLET";
let letter = "E";
let radius = 200;
let sentenceArray = [];
let font;
let glitch;
let theta = 0;
let angle = 360/sentence.length;

// function preload(){
//   font = loadFont('RubikGlitch-Regular.ttf');
// }

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");
  textAlign(CENTER);
  angleMode(DEGREES);
  sentenceArray = sentence.split("");
}

// async function setup(){
//   createCanvas(600, 600, WEBGL);
//   font = await
//   loadFont ('RubikGlitch-Regular.ttf');
//   glitch = font.textToModel(sentence, {
//     sampleFactor: 2, extrude: 5});
//   glitch.clearColors();
//   glitch.normalize();
//   textAlign(CENTER);
//   angleMode(DEGREES);
//   sentenceArray = sentence.split("");
// }

function draw() {
  background(220);
  // rotateX(60);
  // rotateY(30);
  
  textSize(50);
  translate(width/2, height/2);
  translate(-280,-300);
  push();
  translate(width/2, height/2);
  let x = radius*cos(theta);
  let y = radius*sin(theta);
  
  for(let i =0; i < sentenceArray.length; i++){
    rotate(167/5.25);
    text(sentenceArray[i], x, y);
    rotate(angle);
  }
  pop();
  
  push();
  translate(width/2+15, height/2+60);
  rotate(-167/5.25);
  text(letter, x,y);
  rotate(500);
  pop();
  
  angle+= 0.6;
}