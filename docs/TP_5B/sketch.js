let schalterStatus = false;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  // wenn die Maus auf der rechten Seite ist
  if( mouseX >= width/2){
    rect(width/2, 0, width/2, height);
  } 
  // oder wenn die Maus auf der Linken Seite
  // in der oberen Hälfte ist
  else if(mouseY <= height/2){
    rect(0, 0, width/2, height/2);
  }
  // in allen anderen Fällen
  else {
    ellipse(width/4, height/2, 50, 50);
  }

  // Der Teil wird 60 Mal pro Sekunde ausgeführt
  // also wurde hier der schalterStatus, solange die 
  // Maus gedrückt ist, ständig 
  // zwischen true und false getoggelt
  if(mouseIsPressed){
    // Abhänging von aktuellen Zustand
    // schalterStatus umschalten
    /*
    if(schalterStatus == true){
      schalterStatus = false;
    } else {
      schalterStatus = true;
    }
    */
    
  }


  if(schalterStatus){
    fill(255, 0, 0);
  } else {
    fill(255);
  }
}

// Eventhandler
// mousePressed() -> wird je Klick einmal aufgerufen
function mousePressed(){
  console.log("Maus ist gedrückt");
  
  // Abhänging von aktuellen Zustand
  // schalterStatus umschalten
  if(schalterStatus == true){
    schalterStatus = false;
  } else {
    schalterStatus = true;
  }

  // Kurzeschreibweise bool Variable toggeln
  // schalterStatus = !schalterStatus;


}

function keyPressed(){
  // Processing variable: key (char)
  // enthält die zuletzt gedrückte Taste
  console.log(key);
  if(key == ' '){
    console.log("letzer key war ein leerzeichen");
  }
}