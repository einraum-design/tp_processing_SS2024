function setup() {
  // statt in Bogenmaß mit Gradzahlen arbeiten:
  angleMode(DEGREES);
  createCanvas(600, 400);
  
  // Farben werden als Rot Grün Blau Werte definiert
  // Die Farbwerte sind jeweils Werte von 0 - 255
  background(255, 255, 0);
  
  // ich bin ein eizeiliger Kommentar
  
  /* der rectMode setzt den Refernzpunkt für alle Rechtecke
  es gibt CORNER (von der Ecke aus) und CENTER (von der Mitte aus)
  */
  
  
  // stroke definiert die Konturenfarbe (R, G, B, alpha)
  stroke(240, 0, 0);
  
  // Strichstärke 
  strokeWeight(3);
  
  // noFill -> keine Füllfarbe
  noFill();
  rectMode(CENTER);
  rect(100, 200, 120, 60);
  
  // fill legt die Füllfarbe für Formen fest
  // (R, G, B)
  fill(255, 100, 0);
  
  /* ellipseMode setzt Referenzpunkt für alle Kreise und Bögen */
  ellipse(100, 200, 80, 80);
  
  rectMode(CORNER);
  
  // noStroke() -> keine Kontur zeichnen
  noStroke();
  
  fill(0, 0, 255, 100);
  rect(100, 200, 120, 60);
  
  
  stroke(0);
  point(300, 200);
  point(400, 200);
  
  line(300, 300, 400, 300);
  
  triangle(350, 230, 370, 250, 330, 250)
  
  // + - * / %(Modulo) kann überall mit Zahlen verwendet werden
  arc(400, 100, 120,120, 45, 360-45, PIE);
  
  
  
}

function draw() {
}