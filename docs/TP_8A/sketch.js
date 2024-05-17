// Arrays -> Sammlung von Werten in einer Variable
// Werte werden nummeriert von 0 - n
// Arrays werden mit [] gekennzeichnet

// let names = []; // leeres Array
// Array mit Werten initialisieren
let names = ["Peter", "Paul", "Anne", "Klaus", "Stefanie"];
let images = [];

let bilderIndex = 0;

function preload(){
  // neue Elemente mit .push() ans Array anhängen
  images.push(loadImage("assets/hase_1.jpg"));
  images.push(loadImage("assets/hase_2.jpg"));
  images.push(loadImage("assets/hase_3.jpg"));
}

function setup() {
  createCanvas(400, 400);

  images[0].resize(400, 400);
  images[1].resize(400, 400);
  images[2].resize(400, 400);

  // mit dem Index kann man auf die einzelnen Werte im Array zugreifen:
  names[0] = "Andreas";
}

function draw() {
  background(220);

  imageMode(CENTER);
  image(images[bilderIndex], width/2, height/2);

  text(names[0], 20, 20);
}

function keyPressed(){
  bilderIndex = bilderIndex + 1;
  // bilderIndex ++;

  if(bilderIndex >= images.length){
    bilderIndex = 0;
  }
}
