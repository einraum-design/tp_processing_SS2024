/* elementare Variablentypen
Boolean bool -> true / false
Integer int Ganzzahlen -> 90870, 3, 0, -10, ...
FloatingPointNumbers float Fließkommazahlen -> 0.0924, -123.3, 0.0, ...
Character char -> 'a', 'b', 'c', ' ', '1', '.', ...

Objekte (komplexe / zusammengesetze Variablentypen)
string Zeichenkette -> "Hello", "Paula", "", ...
color - Farbe -> 
p5.Image Bild 
p5.Font
*/

// In den meisten Programmiersparchen wird 
// eine Variable mit angabe des Typs definiert
// TYP variablenName;
// string name;
// string name = "Peter";

// in js (p5js) wird eine Variable nur mit dem Codewort var oder let erstellt
// let name;
let name = "Klaus";

let xPos = 10;
let ellipseRadius = 20;

let cat;


function preload(){
  cat = loadImage("images/cat.jpg");
}


function setup() {
  createCanvas(400, 400);
  name = "Claudia";
}

function draw() {
  background(220);

  text(name, 200, 200);

  ellipse(xPos, 100, ellipseRadius * 2, ellipseRadius * 2);
  xPos = xPos + 5;

  image(cat, 50, 50, cat.width / 3.0, cat.height/ 3.0);
}
