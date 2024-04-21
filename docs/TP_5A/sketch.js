let schalterStatus = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  /*
  if(mouseX >= width/2){
    rect(width/2, 0, width/2, height);
  }

  if(mouseX <= width/2 && mouseY <= height/2){
      rect(0, 0, width/2, height/2);
  }*/

  // wenn Maus auf der rechten Seite:
  if(mouseX >= width/2){
    rect(width/2, 0, width/2, height);
  } 
  // -> Maus muss also auf der linken Seite sein
  // wenn Maus in der oberen Hälft ist: 
  else if(mouseY <= height/2){
    rect(0, 0, width/2, height/2);
  } 
  // in allen anderen Fällen:
  else {
    ellipse(width/4, height/2, 200, 200);
  }

// wird 60 Mal je Sekunde ausgeführt
// deshalb würde hier die schalterStatus mehrfach je Klick gewechselt werden
/*if(mouseIsPressed){
    console.log("Maus wurde in draw gedrückt");
    // toggle schalterStatus zwischen true / false
    if(schalterStatus == true){
      schalterStatus = false;
    } else {
      schalterStatus = true;
    }

    //schalterStatus = true;
  }*/

  // wenn schalterstatus 
  if(schalterStatus){
    fill(255, 0, 0);
  } else {
    fill(255);
  }

  ellipse(width/2, height/2, 100, 100);

}

// der mousePressed Eventhandler wird einmal je Klick ausgeführt
//function mousePressed(){
function mouseReleased(){
  console.log("Maus wurde gedrückt");

  // toggle schalterStatus zwischen true / false
  if(schalterStatus == true){
    schalterStatus = false;
  } else {
    schalterStatus = true;
  }

  // Kurzform
  // schalterStatus = !schalterStatus;

}
