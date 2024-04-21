// Processing Variable
// mouseIsPressed - Boolean -> true / false


let ellipseX = 100;
let ellipseY = 300;
let speedX = 6;
let speedY = 1;
let radiusEllipse = 30;

function setup() {
  createCanvas(400, 400);

  // random berechnet eine zufällige Zahl 
  // random(max) --> zufall float  0 - max
  // random(min, max) --> zufall float min - max
  speedX = random(2, 8);
  speedY = random(2, 8);
  background(220);
}

function draw() {
  

  // if - Bedingung
  // if(CONDITION) { Block wird nur ausgeführt, wenn die Bedingung erfüllt ist }

  // Vergleichsoperatoren um Bedingungen zu formulieren
  // A == B -> A ist gleich B
  // A != B -> A ist nicht gleich B
  // A > B ->  A ist größer als B
  // A >= B -> A ist größer oder gleich B 
  // A < B ->  A ist kleiner als B
  // A <= B -> A ist kleiner oder gleich B 

  if(mouseIsPressed == false){
    ellipse(width/2, height/2, 100, 100);
  }


  ellipse(ellipseX, ellipseY, radiusEllipse * 2, radiusEllipse*2);
  

  // Verknüpfungsoperatoren
  // CONDITION_A && CONDITION_B - UND Verbindung - BedingungA und B müssen erfüllt sein
  // CONDITION_A || CONDITION_B - ODER Verbindung - Es genügt, wenn eine der Bedingungen erfüllt ist

  /*
  if(ellipseX >= width){
    speedX = -speedX;
  }
  if(ellipseX <= 0){ 
    speedX = -speedX;
  }*/

  
  if(ellipseX >= width || ellipseX <= 0){
    speedX = -speedX;
  }

  if(ellipseY >= height){
    speedY = -speedY;
  }
  if(ellipseY <= 0){ 
    speedY = -speedY;
  }


  ellipseX = ellipseX + speedX;
  ellipseY = ellipseY + speedY;

  /*if(ellipseX >= width + radiusEllipse){
    ellipseX = -radiusEllipse;
  } */

  

}
