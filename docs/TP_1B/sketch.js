function setup() {
  
  // ich bin ein einzeiliger Kommentar
  
  /* ich bin
  ein mehrzeiliger 
  Kommentar */
  
  // erstellt ein Canvas Element mit Breite und Höhe
  createCanvas(600, 400);
  
  background(220);
  
  
  
  stroke(0, 105, 255);
  strokeWeight(3);
  
  // Rechteck(X, Y, Width, Height)
  rect(200, 100, 120, 80);
  
  noStroke();
  
  // RGB 
  // rot 0 - 255
  // grün 0 - 255
  // blau 0 - 255
  fill(255, 120, 0);
  
  
  // Setzt den Referezpunkt / Ursprung von Kreisen
  // Standart: CENTER (Mitte)
  // Alternativ: CORNER (obere linke Ecke)
   ellipseMode(CORNER);
  
  // Ellipse(X, Y, Width, Height)
  ellipse(200, 100, 80, 80);
  
  
  // 4. Paramter Deckkraft 0 - 255
  fill(0, 0, 255, 100);
  
  // Setzt den Referezpunkt / Ursprung des Rechtecks
  // Standart: CORNER (obere linke Ecke)
  // Alternativ: CENTER (Mitte)
  rectMode(CENTER);
  rect(200, 100, 120, 60);
  
  
  stroke(255, 0, 0);
  noFill();
  ellipse(150, 250, 80, 120);
  
  point(170, 280);
  point(210, 280);
  
  triangle(180, 300, 190, 320, 170, 320);
  
  line(170, 340, 210, 340);
  
  ellipseMode(CENTER);
  // Winkel sind als Standart auf Bogenmass gestellt
  // Umstellen auf Gradzahlen:
  angleMode(DEGREES);
  fill(255, 255, 0);
  
  // arc(X, Y, W, H, StartWinkel, EndWinkel, ZeichenModus)
  arc(450, 300, 100, 100, 45, 360-45, PIE);
  
}

function draw() {
}