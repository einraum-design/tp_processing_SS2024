let shapes = [];

// Anzahl an Formen
let shapeCount = 12;

// StartPosition der Formen (Zufall -> Maximal Werte)
let xOffset = 0;
let yOffset = 0;
let zOffset = 0;

// StartRotation der Formen (Zufall -> Maximal Werte)
let xRotationVal = 360;
let yRotationVal = 0;
let zRotationVal = 360;

// animatione der position der Formen
// probiere kleine werte zb: 0 - 5
let xOffsetSpeed = 0;
let yOffsetSpeed = 0.5;
let zOffsetSpeed = 0;
// animatione der rotation der Formen
let xRotationSpeed = 0;
let yRotationSpeed = 2;
let zRotationSpeed = 1;

let verticesSize = 300;
// kantigere Formen bei kleiner Zahl
let verticesPerShape = 90;
// Wellenform der "Kreise" (0 -> Kreis)
let wave = 6;
// Offset der wellenform:
let verticesOffset = 20;



function setup() {
  createCanvas(1000, 1000, WEBGL);
  angleMode(DEGREES);

  for(let i = 0; i<shapeCount; i++){
    shapes.push(createNewShape());
  }

  background(255);
}

function draw() {
  
  // hier kannst du die Farbe / Deckkraft und
  // Konturstärke der Formen ändern:
  noFill();
  strokeWeight(3);
  stroke(0, 3);

  for(let i = 0; i<shapes.length; i++){
    drawShape(shapes[i]);
    updateShape(shapes[i]);
  }
  
}

function createNewShape(){

  let myShape = {
    transform: {
      x: random(-xOffset, xOffset),
      y: random(-yOffset, yOffset),
      z: random(-zOffset, zOffset),
      rx: random(xRotationVal),
      ry: random(yRotationVal),
      rz: random(zRotationVal),
    },
    move: {
      xSpeed: random(-xOffsetSpeed, xOffsetSpeed),
      ySpeed: random(-yOffsetSpeed, yOffsetSpeed),
      zSpeed: random(-zOffsetSpeed, zOffsetSpeed),
      rxSpeed: random(-xRotationSpeed, xRotationSpeed),
      rySpeed: random(-yRotationSpeed, yRotationSpeed),
      rzSpeed: random(-zRotationSpeed, zRotationSpeed),
    },
    vertices: [
    ]
  }

  for(let i = 0; i<verticesPerShape; i++){
    let angle = i* 360.0/verticesPerShape;
    let vec = createVector(verticesSize + verticesOffset*sin(angle * wave), 0);
    vec.rotate(angle);
    myShape.vertices.push(vec);
  }

  return myShape;
}

function drawShape( s ){
  push();
  translate(s.transform.x, s.transform.y, s.transform.z);
  rotateX(s.transform.rx);
  rotateY(s.transform.ry);
  rotateZ(s.transform.rz);

  beginShape();
  for(let i = 0; i<s.vertices.length; i++){
    vertex(s.vertices[i].x, s.vertices[i].y);
  }

  // close shape
  if(s.vertices.length > 0){
    vertex(s.vertices[0].x, s.vertices[0].y);
  }
  endShape();


  pop();
}

function updateShape( s ){
  s.transform.x += s.move.xSpeed;
  s.transform.y += s.move.ySpeed;
  s.transform.z += s.move.zSpeed;

  s.transform.rx += s.move.rxSpeed;
  s.transform.ry += s.move.rySpeed;
  s.transform.rz += s.move.rzSpeed;

}

function mousePressed(){
  background(255);
}