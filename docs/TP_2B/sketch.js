// P5js vordefinierte Variablen
/*
mouseX -> Number - Aktuelle MouseX Position im Canvas
mouseY -> Number - Aktuelle MouseY Position im Canvas
width -> Number - Breite vom Canvas Element
height -> Number - Höhe vom Canvas Element
displayWidth -> Number - Breite vom Bildschirm
displayHeight -> Number - Höhe vom Bildschirm
frameCount -> Number - Zählt die Anzahl 
              an Wiederholungen der function draw()
*/


function setup() {
  angleMode(DEGREES);
  createCanvas(600, 400);
}

function draw() {
  background(220);
  fill(mouseY, 0, 0);
  ellipse(mouseY, mouseX, 100, 100);


  rectMode(CENTER);
  rect(width/2, height/2, 50, 50);

  rectMode(CORNER);
  rect(0, height - 50, width, 50);

  // Rechenzeichen: + - * / %
  rect(width * 2 / 3, 0, width/3, height - 50);

  fill(255);
  ellipse(frameCount * 2, 50, 80, 80);

  // sin(frameCount)         --> -1 + 1
  // sin(frameCount)*50      --> -50 + 50
  // sin(frameCount)*50 +100 --> 50 + 150
  ellipse(50,100 + sin(frameCount)*150, 80, 80);


}
