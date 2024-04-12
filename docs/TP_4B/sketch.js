// p5js Variable
// mouseIsPressed - Boolean - true / false


let ballX = 200;
let ballY = 100;
let speedX = 9;
let speedY = 5;
let ballRadius = 25;

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);

  // random(MAX) -> Fließkommazahl 0 - MAX
  // random(MIN, MAX) -> MIN - MAX
  speedX = random(-10, 10);
  speedY = random(-10, 10);

  background(220);
}

function draw() {
  fill(220);
  //fill(random(255), 100, 100);

  // if(CONDITION) { nur wenn die CONDITION erfüllt ist,
  //    wird der Code im Rumpf ausgeführt }
  if(mouseIsPressed == true){
    fill(255, 0, 0);
  }
  // x , y, w, h, startWinkel, stopWinkel, Zeichenmodus
  arc(250, 200, 100, 100, 45, 315, PIE);

  // Vergleichsoperatoren
  // A == B -> wenn A gleich B ist
  // A != B -> wenn A nicht gleich B ist
  // A >= B -> wenn A größer oder gleich B ist
  // A > B  -> wenn A größer B ist
  // A < B  -> wenn A keiner B ist
  // A <= B -> wenn A kleiner oder gleich B ist

  // Verknüpfungsoperatoren
  // CONDITION_A && CONDITION_B -> Bedingung A UND B müssen erfüllt sein
  // CONDITION_A || CONDITION_B -> Bedingung A ODER B muss erfüllt sein (es dürfen auch beide erfüllt sein)

  // wenn der Ball auf der linken Seite vom Canvas ist und gleichzeitig die Maustaste gedrückt ist:
  if(ballX > width/2 && mouseIsPressed == true){
    fill(0,0,255);
  }
  ellipse(ballX, ballY, ballRadius*2, ballRadius*2);

  ballX = ballX + speedX;
  ballY = ballY + speedY;

  /* if(ballX >= width){
    speedX = -speedX;
  }

  if(ballX <= 0){
    speedX = -speedX;
  }*/
  // Wenn 1. ODER 2. Bedingung erfüllt ist:
  if(ballX >= width || ballX <= 0){
    speedX = -speedX;
  }

  if(ballY >= height){
    speedY = -speedY;
  }

  if(ballY <= 0){
    speedY = -speedY;
  }



}
