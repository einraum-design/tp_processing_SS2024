let step = 0;

let myButton;
let video;

let changeToStep1Time = 0;
let lastInteraction = 0;

function setup() {
  createCanvas(400, 400);

  myButton = createButton("click me");
  myButton.position(200, 200);
  myButton.hide();
  // auf Buttonklick -> step um eins erhöhen
  // wird beim Wechsel von step 1->2 eingeblendet
  myButton.mouseClicked(() => { 
    // step von 2 auf 3 erhöhen
    step ++;
    myButton.hide();
    video.show();
    video.play();
    // if(step > 10) { step = 5;}
  });

  video = createVideo("assets/video.mp4");
  video.position(0,0);
  video.hide();
  video.onended(() => {
    // Wechsel von 3 auf 4;
    step ++;
    video.hide();
  });
  // video.showControls();
}

function draw() {
  background(220);

  if(step == 0){
    // Welcome Screen
    textAlign(CENTER, CENTER);
    text("Hello", width/2, height/2);
  } else if(step == 1){
    // Start Animation
    animation();
    
    // wenn 10 Sekunden (10.000 Millisekunden) vergangen sind
    // wechsele in step 2
    if(millis() - changeToStep1Time > 10 * 1000){
      step = 2;
      // stelle den button bei wechsel 
      // auf step 2 auf sichtbar
      myButton.show();
    }
  } else if(step == 2){
    // html button zeigen
   
  } else if(step == 3){
    // videoplayer anzeigen und video abspielen
    
  } else {

  }

  text(step, 20, 20);

  // wenn ich nicht in step 0 bin und es seit 30 Sekunden 
  // keine Interaktion mehr gab -> zurück in step 0
  if(step != 0 && millis() - lastInteraction > 30 * 1000){
    // resette das programm:
    step = 0;
    video.hide();
    video.stop();
    myButton.hide();
  }
}

function mouseMoved(){
  lastInteraction = millis();
  if(step == 0){
    step = 1;
    // speichere den Zeitpunkt von step 0 -> 1
    changeToStep1Time = millis();
  }
}

function keyPressed(){
  lastInteraction = millis();
}

function animation(){
  ellipse(random(width), random(height), 50, 50);
}