let myFont;
let myText = "Hello Font. Ich bin ein Text.";
let textParts = [];
let textObjects = [];

let status = 0;

let zeitpunktZuStatus1 = 0;
let lastInteraction = 0;
let video;

function preload(){
  myFont = loadFont("assets/BioRhyme-Medium.ttf");
}

function setup() {
  createCanvas(800, 600);
  textFont(myFont);
  textSize(32);

  video = createVideo("assets/video.mp4");
  video.hide();

  video.onended( () => { status++} );

  // teile den Text "myText" an den Leerzeichen in 
  // mehrere Strings
  textParts = split(myText, " ");

  for(let i = 0; i<textParts.length; i++){
    // für jedes Wort ein Objekt erstellen:
    textObjects.push({
      text: textParts[i],
      yOffset: random(-10, 10),
    });
  }


  // Zeichen für ein Tab \t
  //frameRate(1);
}

function draw() {

  if(status == 0){
    // startscreen
    background(220);
    fill(0);
    text("Hello Font", 40, 40);
  } else if(status == 1){
    background(220);
    textAnimation();
    // nach 10 Sekunden:
    if(millis() - zeitpunktZuStatus1 > 10 * 1000){
      status ++;
      video.play();
    }
  } else if(status == 2){
    image(video, 0, 0);
  } else {
    background(0);
  }

  if(status != 0 && millis() - lastInteraction > 60 * 1000){
    status = 0;
  }
}

function textAnimation(){
  let xOffset = 200;

  /*for(let i = 0; i<textParts.length; i++){
    textSize(random(12, 40));
    text(textParts[i], xOffset, 100);
    xOffset += textWidth(textParts[i]) + 20;
  }*/

  for(let i = 0; i<textObjects.length; i++){
    fill(0);
    textSize(random(12, 40));
    text(textObjects[i].text, xOffset, 100 + textObjects[i].yOffset);
    xOffset += textWidth(textObjects[i].text) + 20;
  }
}

function mouseMoved(){
  lastInteraction = millis();

  if(status == 0){
    status = 1;
    // speichere den Zeitpunkt 
    // Wechsel von status 0 auf 1
    zeitpunktZuStatus1 = millis();
  }
}

function keyPressed(){
  lastInteraction = millis();
}
