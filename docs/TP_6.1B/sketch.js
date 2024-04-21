function setup() {
  angleMode(DEGREES);
  createCanvas(800, 400);
}

function draw() {
  background(220);

  


  rect(200, 150, 120, 60);

  translate(200, 150);
  scale(-0.5, 2);
  rect(200, 150, 120, 60);

  // rotiert das Zeichenkoordinatensystem
  rotate(mouseX);
  rect(-60, -30, 120, 60);

  line(0, 0, 0, 120);

  translate(0, 120);
  rotate(mouseY);
  line(0, 0, 0, 120);

  // setzt alle Transformationen 
  // (Rotation, Verschiebung, Skalierung) 
  // zurück
  resetMatrix();
  rect(0,0, 50, 50);
}
