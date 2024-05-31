let names = ["Paul", "Tom", "Lisa", "Emma", "Benni", "Ferdinand"]; 

let positionen = [];

function setup() {
  createCanvas(800, 600);
  let pos = {
    x: 50,
    y: 200
  }

  positionen.push(pos);
  positionen.push({x: 300, y: 400});

  //frameRate(1);
}

function draw() {
  background(220);

  /* ellipse(50, height/2, 80, 80);
  ellipse(100, height/2, 80, 80);
  ellipse(150, height/2, 80, 80);
  ellipse(200, height/2, 80, 80);
  ellipse(250, height/2, 80, 80); */


  // WHILE Schleife:
  // while(CONDITION) { CODE }
  // solange eine Bedingung erfüllt ist wird der 
  // Schreifenrumpf immer wieder ausgeführt

  let counter = 0;

  while(counter < 10){
    //noFill();
    ellipse(random(width), random(height), 30, 30);
    ellipse(50 + counter*50 ,height/2, 80, 80);
    counter ++; // counter = counter + 1;
  }

  /*line(0,0, mouseX, mouseY);
  line(20,0, mouseX, mouseY);
  line(40,0, mouseX, mouseY);
  line(60,0, mouseX, mouseY);*/

  let xStart = 0;
  while(xStart <= width){
    line(xStart,0, mouseX, mouseY);
    xStart += 20; 
  }

  /*
  while(mouseIsPressed){
    ellipse(random(width), random(height), 30, 30);
  }
  */


  let myRandom = random(20);
  while(myRandom > 10){
    myRandom = random(20);
  }
  // nur random Zahlen von 0 - 10
  console.log(myRandom);

  /*
  // COUNTER
  let index = 0;
  // CONDITION
  while(index < names.length){
    fill(0);
    text(names[index], 200, 20 + index * 20);
    // INCREMENTOR
    index ++;
  }*/

  // FOR-LOOP
  // for(VARIABLENDEFINITION; CONDITION; INCREMENTOR){ CODE }
  for(let index = 0; index < names.length; index++){
    fill(0);
    text(names[index], 200, 20 + index * 20);
  }

  for(let i = 0; i<positionen.length; i++){
    rectMode(CENTER);
    fill(255);
    rect(positionen[i].x, positionen[i].y, 40, 40);
    /*
    let pos = positionen[i];
    rect(pos.x, pos.y, 40, 40);
    */

  }
}

function mousePressed(){
  positionen.push({x: mouseX, y: mouseY});
}
