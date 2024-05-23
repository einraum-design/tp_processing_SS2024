function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
}

function draw() {
  background(220);

  pacman(100, random(50, 200), 30);
  pacman(300, 50, 40, color(255, 255, 0));

  pacman(50, 200, 50, color(255, 0, 0), 20);

  pacman(addiere(200, 50), 300, 150, color(0, 255, 0), 20, 70);


  let _x = 50;
  let _y = 50;
  let _d = 40;

  if(  mouseOverEllipse(_x, _y, _d) == true ) {
    fill(255, 0, 0);
  } else {
    fill(255);
  }

  ellipse(_x, _y, _d, _d);
  

}

// Bei den meisten Programmiersprachen 
// beginnt eine Funktionsdefinition mit dem Typ der Rückgabe
// void bei Funktionen ohne Rückgabe
// void pacman(xpos, ypos, diameter) { CODE }
// int addiere(zahl1, zahl2) { CODE } -> diese Funktion liefert eine Zahl zurück


// Codewort function erstellt eine neue Funktion
// function FUNKTIONSNAME( opt PARAMTER ) { FUNKTIONSRUMPF }
function pacman(xPos, yPos, d, c = color(255, 255, 0), m = 45, r = 0){
  let x = xPos;
  let y = yPos;
  //let d = 50;

  push();
  translate(x, y);
  rotate(r);
  fill(c);
  arc(0, 0, d, d, m, 360-m, PIE);
  fill(0);
  ellipse(0, -d/4, d/10, d/10);
  pop();
}

// Funktion mit Rückgabe (return statement)
function addiere (zahl1, zahl2){
  let summe = zahl1 + zahl2;
  return summe;
}


// Abfrage ob Maus über Kreisfläche ist
function mouseOverEllipse(x, y, d){

  let abstandMausKreis = dist(x, y, mouseX, mouseY);
  if(abstandMausKreis <= d/2){
    return true;
  } else {
    return false;
  }
}
