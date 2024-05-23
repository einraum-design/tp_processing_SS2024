// Objekte
// "Gruppierung" von Werten zu einer Einheit
// es können beliebig viele Schlüssel und Werte Paare definiert werden
// objekt.schluessel = wert
// zugriff über .schluessel oder ["schluessel"]
let auto = {};
auto.ps = 120;
auto.farbe = "rot";
auto.marke = "audi";
// alternative Schreibweise
auto["km-stand"] = 350000;

// Objekt mit Werten initialisieren
let ball = {
  xPos: 100,
  yPos: 200,
  size: 30,
  xSpeed: 3.0,
  ySpeed: 1.5
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ellipse(ball.xPos, ball.yPos, ball.size, ball.size);
  ball.xPos = ball.xPos + ball.xSpeed;
  // Kurzschreibweise += 
  ball.yPos += ball.ySpeed;

}
