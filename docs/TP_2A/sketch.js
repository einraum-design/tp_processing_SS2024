// vordefinierte p5js Variablen
// mouseX -> Zahl - aktuelle Maus x-Position innerhalb vom canvas
// mouseY -> Zahl - aktuelle Maus y-Position innerhalb vom canvas
// width -> Zahl - Breite vom Canvas Element
// height -> Zahl - Hoehe vom Canvas Element
// frameCount -> Zahl - Zählt die Wiederholungen der function draw

function setup() {
  angleMode(DEGREES);
  createCanvas(500, 300);
  //createCanvas(displayWidth, displayHeight);
  
  
  // legt fest, wie oft je Sekunde
  // die function draw ausgeführt wird
  // Standdart: 60 fps
  frameRate(60);
}

function draw() {
  background(220);
  stroke(0);
  fill(255, mouseX, 0);
  strokeWeight(mouseY / 10);
  rect(mouseX, 200, 100, 100);

  arc(300, 100, 80, 80, mouseX, 360-mouseX, PIE);

  noStroke();
  // ellipse mittig im sketch positioniert
  // --> Position ist die Hälfte von width und height
  ellipse(width/2, height/2, 100, 100);

  // Rechteck an der Unterkante des Canvas positioniert mit Höhe 30px
  // --> y-Position ist die Höhe - 30
  rect(0, height-30, width, 30);

  // Rechteck Recht am Canvas anliegen 
  // Breite 1/3 des Canvas
  fill(0, 155, frameCount);
  rect(2*width/3, 0, width/3, height-30);

  // sin(frameCount)           --> -1 ... 1
  // sin(frameCount)+1         -->  0 ... 2
  // (sin(frameCount)+1) * 128 -->  0 ... 256
  fill(0, 0, (1 + sin(frameCount)) * 128);
  ellipse(80, 80 + sin(frameCount) * 40, 50, 50);
}
