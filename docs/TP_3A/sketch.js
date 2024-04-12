// elementare Variablentypen
// Boolean bool true / false
// Integer int Ganzzahlen -1, 4, 245, ...
// FoatingPointNumbers float 0.234, -123.345, 0, 3.0, ...
// Character char 'a', 'b', ' ', '&', '3', ...

// Objekte (komplexe/zusammengesetze Variablen)
// Zeichenkette string "Hallo", "", "skf as fdkja sdf9798 6#+2$%", ...
// Image Bildvariable -> hier kann eine Bild hineingeladen werden
// Font Schriftenvariable


// Bei den meisten Programmiersprachen werden die Typen streng behandelt
// und Variablen werden unter Angabe des Tpys definiert
// TYP VARIABLENNAME
// string name;

// bei javascript wird nur das Codewort let oder var verwendet 
// erstelle eine neue Variable mit label: name
// let name; -> Variable erstellen ohne Wert
// erstelle Variabe mit Wert
let name = "Paula";
let endWinkel = 200;
let cat;

// wird noch vor der function setup ausgeführt
// hier werden Bilder, Schriften ... vor Programmstart geladen
function preload(){
  cat = loadImage("images/cat.jpg");
}

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);

  // ersetzte den Wert der Variable
  endWinkel = 90;
}

function draw() {
  background(220);

  arc(100, 100, 80, 80, 0, endWinkel, PIE);

  // erhöhe den Inhalt von endWinkel um 1
  endWinkel = endWinkel + 1;

  // eine zwischen {} definierte Variable ist 
  // nur innerhalb dieses Bereichs gültig
  let localeVariable = 50;

  // Bei Bildern kann ich mit dem '.'-Operator auf die 
  // Eigenschaften width und height zugreifen
  image(cat, 40, 40, cat.width/2.0, cat.height/2.0);
}
