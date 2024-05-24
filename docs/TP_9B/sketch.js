// Objekte
// leeres Objekt erstellen
let fahrrad = {};
fahrrad.gaenge = 7;
fahrrad.groesse = "27 zoll";
fahrrad["farbe"] = "blau";

// Objekt mit Werten initialisieren:
let auto = {
  farbe: "rot",
  ps: 120,
  marke: "VW",
  typ: "Kombi",
  // fotos: loadImage("image.png");
};

let ball = {
  xPos: 100,
  yPos: 50,
  xSpeed: 3,
  ySpeed: 2,
  size: 20
}; 



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  ellipse(ball.xPos, ball.yPos, ball.size, ball.size);
  ball.xPos = ball.xPos + ball.xSpeed;
  // Kurzschreibweise
  ball.yPos += ball.ySpeed;
}
