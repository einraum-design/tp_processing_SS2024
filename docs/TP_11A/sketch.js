let names = ["Tom", "Lisa", "Paul", "Anna", "Frieder", "Kim", "Balu"];
let font;

function preload() {
  font = loadFont("assets/Tiny5-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  textFont(font);
  textSize(36);
}

function draw() {
  background(220);

  /*ellipse(200, 100, 50, 50);
  ellipse(200, 150, 50, 50);
  ellipse(200, 200, 50, 50);
  ellipse(200, 250, 50, 50);
  ellipse(200, 300, 50, 50);*/

  // Wiederholungs Schleifen
  // while - loop
  // while(CONDITION){ 
  //    CODE wird solange wiederholt
  //    bis die CONDITION nicht mehr
  //    erfüllt ist
  // }

  let counter = 0;

  while(counter < 20){
    ellipse(200, 100 + counter * 20, 50, 50);
    counter ++; // counter = counter + 1;
  }

  /*line(0, 0, mouseX, mouseY);
  line(20, 0, mouseX, mouseY);
  line(40, 0, mouseX, mouseY);
  line(60, 0, mouseX, mouseY);
  line(80, 0, mouseX, mouseY);*/

  let xPos = 0;
  while(xPos <= width) {
    line(xPos, 0, mouseX, mouseY);
    // xPos = xPos + 20;
    xPos += 20;
  }

/*
  // VARIABLEN DEFIITION
  let index = 0;

  // while(CONDITION)
  while(index < names.length){
    text(names[index], 20, 50 + index*40);
    // INCREMENTOR
    index ++;
  }
*/




  // for (VARIABLENDEFINITION; CONDITION; INCREMENTOR){ CODE }
  for(let i = 0; i<names.length; i++){
    text(names[i], 20, 50 + i * 40);
  }

  // bringt den Browser zum Absturz, 
  // weil extrem viele Ellipse "ungebremst gezeichnet werden"
  /* while(mousePressed){
    ellipse(random(width), random(height), 30, 30);
  }*/


}
