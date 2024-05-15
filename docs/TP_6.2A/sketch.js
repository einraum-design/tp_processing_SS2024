function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  //createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);

  // auf sketch Mitte verschieben
  translate(width/2, height/2);

  // Sekundenzeiger 

  // second() --> int: 0 - 60

  // Sekunden 0-60 --> umrechnen 0 - 360°
  // Dreisatzfunktion map()
  // OUTPUT = map(INPUT, INPUT_MIN, INPUT_MAX, OUTPUT_MIN, OUTPUT_MAX);
  let secondRotation = map(second(), 0, 60, 0, 360);

  rotate(secondRotation);

  stroke(255, 0, 0);
  strokeWeight(1);
  line(0, 0, 0, -height/2);

  // Zurücksetzen der rotation vom Sekundenzeiger:
  // VARIANTE A
  // resetMatrix();
  // dann muss aber auch wieder neu auf die translatet werden ...

  // VARIANTE B
  // rotiere die Drehung vom Sekundenzeiger wieder zurück
  rotate(-secondRotation);




  // VARIANTE C
  // Zustand vom Koordinatensystem mit push() zwischenspeichern
  // und mit pop() wieder darauf zurücksetzen
  // jedes push() muss wieder mit einem pop() aufgelöst werden
  push();

    // miniute() -> int: 0 - 60
    let minuteRotation = map(minute() +second()/60, 0, 60, 0, 360);
    
    rotate(minuteRotation);
    stroke(0);
    strokeWeight(3);
    line(0, 0, 0, -height/2);

  // setzt die Rotation vom Minutenzeiger wieder zurück
  pop();


  push();
    // hour() -> int: 0 - 24
    let hourRotation = map(hour() + minute()/60, 0, 24, 0, 720);
    
    rotate(hourRotation);
    stroke(0);
    strokeWeight(5);
    line(0, 0, 0, -height/3);
  pop();





}
