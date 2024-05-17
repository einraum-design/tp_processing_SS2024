function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  pacman(random(100), 300, 100);  

  pacman(250, 50, 50, 20); 
  
  pacman(50, 50, 50, 20, -30); 
  pacman(150, 150, 50, 20, 30, color(255, 0, 0)); 

  let col = color(0, 255, 0);
  pacman(addiere(200, 100), 350, 50, 20, 30, col); 


  let circleX = 200;
  let circleY = 150;
  let radius = 100;

  if(mouseOverEllipse(circleX, circleY, radius)){
    fill(0, 0, 255);
  } else {
    fill(255);
  }

  ellipse(circleX, circleY, radius * 2, radius * 2);

}

// function FUNKTIONSNAME( optional PARAMETER ) { FUNKTIONSRUMPF }
function pacman(xPos, yPos, diameter, m = 45, rot = 0, c = color(255, 255, 0)){
  let x = xPos;
  let y = yPos;
  //let diameter = 150;
  //let m = 45;

  push();
  translate(x, y);
  rotate(rot)
  fill(c);
  arc(0, 0, diameter, diameter, m, 360 - m, PIE);
  fill(0);
  ellipse(0, -diameter/5, diameter/15, diameter/15);
  pop();
}

// Funktion mit Rückgabewert
function addiere (zahl1, zahl2){
  let summe = zahl1 + zahl2;
  // liefere das Ergebnis zurück an die Stelle, wo die 
  // Funktion aufgerufen wurde
  return summe;
}

function mouseOverEllipse(circleX, circleY, radius){
  // let circleX = 200;
  // let circleY = 150;
  // let radius = 100;

  if(dist(circleX, circleY, mouseX, mouseY) <= radius ){
    return true;
  } else {
    return false;
  }
}


