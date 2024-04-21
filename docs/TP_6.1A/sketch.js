function setup() {
  angleMode(DEGREES);
  createCanvas(600, 400);
}

function draw() {
  background(220);

  fill(255, 150);

  rect(200, 150, 100, 80);

  // ZeichenKoordinatenSystem Verschieben
  translate(200, 150);
  rect(200, 150, 100, 80);

  rect(0, 0, 100, 80);

  // ZeichenKoordinatenSystem Rotierenf
  rotate(mouseX);

  rect(0, 0, 100, 80);
  rect(-50, -40, 100, 80);

  // line in y-Richtung nach unten
  line(0, 0, 0, 150);

  // ans Ende der Linie verschieben
  // 150 in y-Richtung
  translate(0, 150);

  rotate(mouseY);
  line(0, 0, 0, 150);

  // Setzt alle Transformationen zurück
  // Koordinatensystem wieder ohne Rotation links oben
  resetMatrix();
  rect(0,0,20, 20);


}
