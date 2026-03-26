// borrowed from https://github.com/davepagurek/p5.warp/?tab=readme-ov-file

let distort, video;
let v2;
const W = 600,
  H = 600;
let faceApi;
let faces = [];
let videoBuffer;
let lavaLamps = [];

const grainAmt = 4000;

const palette = [
  [255, 240, 245],
  [54, 69, 79],
  [54, 69, 79],
  [1, 11, 19],
  [240, 248, 255],
];

const detectionOptions = {
  withLandmarks: false,
  withDescriptors: false,
  minConfidence: 0.5,
};

class LavaParticle {
  constructor() {
    this.x = random(0, W);
    this.baseY = random(0, H);
    this.y = this.baseY;
    this.r = random(80, 140);
    this.speed = random(0.3, 1.0);
    this.amplitude = random(150, 300);
    this.offset = random(0, Math.PI * 2);
    this.xDrift = random(-0.3, 0.3);
    let col = palette[floor(random(palette.length))];
    this.r_col = col[0];
    this.g_col = col[1];
    this.b_col = col[2];
  }

  update() {
    this.baseY += this.speed * 0.4;
    this.y =
      this.baseY +
      Math.sin(frameCount * this.speed * 0.09 + this.offset) * this.amplitude;
    this.x += this.xDrift;

    if (this.baseY > H + this.r) this.baseY = -this.r;
    if (this.baseY < -this.r) this.baseY = H + this.r;
    if (this.x < this.r || this.x > W - this.r) this.xDrift *= -1;
  }
}

function setup() {
  createCanvas(W, H, WEBGL);\
  canvas.parent("sketch-container");
  angleMode(DEGREES);

  videoBuffer = createGraphics(W, H);

  video = createCapture(VIDEO);
  video.size(W, H);
  faceApi = ml5.faceApi(video, detectionOptions, modelReady);
  video.hide();

  v2 = createGraphics(W, H);

  distort = createWarp(({ glsl, millis, position }) => {
    const t = millis.div(1000);
    return glsl.vec3(
      t.mult(2).add(position.y().mult(4)).sin().mult(0.35),
      t.mult(0.5).add(position.z().mult(2)).sin().mult(0.35),
      t.mult(1.5).add(position.x().mult(3)).sin().mult(0),
    );
  });

  noStroke();

  for (let i = 0; i < 12; i++) {
    lavaLamps.push(new LavaParticle());
  }
}

function modelReady() {
  console.log("Model ready!");
  faceApi.detect(gotFaces);
}

function gotFaces(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  faces = result;
  faceApi.detect(gotFaces);
}

function draw() {
  v2.image(video, 0, 0, W, H);
  v2.filter(BLUR, 3);

  background(0);
  texture(v2);

  if (faces.length > 0) {
    let box = faces[0].detection.box;

    let zx = box.x + box.width / 2;
    let zy = box.y + box.height / 2;
    let zoom = 3.5;

    push();
    translate(-zx * zoom + W / 2, -zy * zoom + H / 2);
    scale(zoom);
    image(v2, -W / 2, -H / 2, W, H);
    pop();
  } else {
    image(v2, -W / 2, -H / 2, W, H);
  }

  push();
  translate(W / 2, -H / 2);
  scale(-2, 2);
  image(video, 0, 0, W, H);
  pop();

  distort();

  push();
  rotate(38);
  translate(-200, -10);
  torus(260, 70);
  pop();

  push();
  translate(140, 300);
  scale(1.09);
  torus(100, 10);
  torus(300, 30);
  pop();

  circle(290, -290, 260);
  circle(-280, -200, 190);

  videoBuffer.clear();
  let bb = videoBuffer.drawingContext;

  for (let i = 0; i < lavaLamps.length; i++) {
    bb.save();
    bb.beginPath();
    bb.arc(lavaLamps[i].x, lavaLamps[i].y, lavaLamps[i].r, 0, Math.PI * 9);
    bb.clip();

    videoBuffer.image(video, 0, 0, W, H);

    bb.fillStyle =
      "rgba(" +
      lavaLamps[i].r_col +
      ", " +
      lavaLamps[i].g_col +
      ", " +
      lavaLamps[i].b_col +
      ", 0.55)";
    bb.fillRect(0, 0, W, H);

    for (let j = 0; j < grainAmt / lavaLamps.length; j++) {
      let gx = Math.random() * W;
      let gy = Math.random() * H;
      let size = Math.random() * 2.5;
      let opacity = Math.random() * 0.7;
      bb.fillStyle =
        "rgba(" +
        lavaLamps[i].r_col +
        ", " +
        lavaLamps[i].g_col +
        ", " +
        lavaLamps[i].b_col +
        ", " +
        opacity +
        ")";
      bb.fillRect(gx, gy, size, size);
    }

    bb.restore();
  }

  image(videoBuffer, -W / 2, -H / 2, W, H);

  for (let i = 0; i < lavaLamps.length; i++) {
    lavaLamps[i].update();
  }
}