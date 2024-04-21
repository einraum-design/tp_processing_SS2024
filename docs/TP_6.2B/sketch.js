function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
}

function draw() {
  background(220);

  translate(width/2, height/2);
  ellipse(0, 0, width);


  // second() -> int  0 - 60

  // Dreisatzfunktion
  // OUTPUT = map(INPUT, INPUT_START, INPUT_END, OUTPUT_START, OUTPUT_END);
  let secondRotation = map(second(), 0, 60, 0, 360);

  rotate(secondRotation);
  stroke(255, 0, 0);
  line(0, 0, 0, -height/2);

  // Zurücksetzen der Rotation vom Koordinatensystem
  // VARIANTE A
  // resetMatrix(); 
  // Dann muss ich aber erst wieder auf die Mitte des Canvas translaten um 
  // den nächsten Zeiger zu zeichnen
  // resetMatrix();
  // translate(width/2, height/2);

  // VARIANTE B
  // Transformation mit negativem Werte rückgänig machen:
  rotate(-secondRotation);


  // VARIANTE C
  // push() -> Merke dir den aktuellen Zustand vom Zeinchenkoordinatensystem
  // - führe Transformationen aus und zeichne Objekt ...
  // pop() -> Stelle das Koordinatensystem wieder auf den Zustand bei push() zurück
  // für jeden Aufruf von push() muss es es wieder eine pop() geben
  push();
    // minute() -> int  0 - 60
    let minuteRotation = map(minute(), 0, 60, 0, 360);

    rotate(minuteRotation);

    stroke(0);
    line(0, 0, 0, -height/2 + 50);
  pop();

  push();
    // hour() -> int 0 - 24
    //let hourRotation = map(hour(), 0, 24, 0, 720);
    let hourRotation = map(hour() + minute()/60, 0, 12, 0, 360);
    rotate(hourRotation);

    stroke(0);
    strokeWeight(4);
    line(0, 0, 0, -height/2 + 50);
  pop();

}
