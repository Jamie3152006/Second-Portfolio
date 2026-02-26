
let words = [];
let wordList = ["peace", "of", "mind"];
let font;

function preload(){
  font = loadFont("Cageroll-Standard.otf");
}

function setup() {

  canvas = createCanvas(640, 480);
  canvas.parent("sketch-container");
  background(140,182,213);
  // textFont(font);
  for (var i = 0; i < 100; i++) {
    let randomWord = random(wordList);
    let thisWordObject = {
      x: random(width),
      y: random(height),
      word: randomWord,
      dir: random(0.4,2),
    };
    words.push(thisWordObject);
  }
  fill("white");
  textSize(24);
}

function draw() {
  background(140,182,213, 20);
  for (var i = 0; i < words.length; i++) {
    let thisWord = words[i];

    thisWord.y = thisWord.y + thisWord.dir;
    if (thisWord.y > height){
      thisWord.y = 0;
      thisWord.x = random(width);
    }
    text(thisWord.word, thisWord.x, thisWord.y);
  }
  
}
