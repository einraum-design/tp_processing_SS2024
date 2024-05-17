// Arrays
// leeres Array erstellen:
let myArray = [];
let names = ["Anna", "Petra", "Paul", "Andreas", "Johanna"];
let images = [];
let imageIndex = 0;

function preload(){
  images.push(loadImage("images/hase_1.jpg"));
  images.push(loadImage("images/hase_2.jpg"));
  images.push(loadImage("images/hase_3.jpg"));
  images.push(loadImage("images/hase_4.jpg"));
}

function setup() {
  createCanvas(400, 400);
  names[0] = "Anne";
}

function draw() {
  background(220);

  imageMode(CENTER);
  image(images[imageIndex], width/2, height/2);

  text(names[0], 30, 30);

}

function keyPressed(){
  imageIndex = imageIndex + 1;
  // imageIndex ++;

  if(imageIndex >= images.length){
    imageIndex = 0;
  }
}