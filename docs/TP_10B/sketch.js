let backgroundColor;

function setup() {
  backgroundColor = color(255);
  let cvs = createCanvas(400, 400);
  // hänge das Canvas Element in den HTML Baum in das Element 
  // mit der ID: "canvas"
  cvs.parent("canvas");

  let button = createButton("click me!");
  button.position(200, 150);
  // auf mouseClicked wird die Funktion createNewButton aufgerufen
  // Funktion ohne () aufrufen - nur Funktionsname!
  button.mouseClicked( createNewButton );
}

function draw() {
  background(backgroundColor);
}

function createNewButton(){
  let newButton = createButton("new Button");
  newButton.parent("content");
  newButton.mouseClicked(changeBackgroundColor);
}

function changeBackgroundColor(){
  backgroundColor = color(random(255), random(255), random(255));
}
