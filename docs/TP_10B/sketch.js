let backgroundColor;

let myvideo;
let mysound;

function preload(){
  mysound = loadSound("assets/sound.mp3");
  mysound.onended( changeBackgroundColor );
}

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

  let fullScreenButton = createButton("fullscreen");
  fullScreenButton.position(0, 0);
  // anonyme Funktion aufrufen:
  // () => { CODE der Ausgeführt werden soll ... }
  fullScreenButton.mouseClicked( () => { 
    fullscreen(true);
    // button ausblenden
    fullScreenButton.hide();
  });

  myvideo = createVideo("assets/video.mp4");
  // Steuerungselemente einblenden:
  myvideo.showControls();

  // Steuerungselemente ausblenden:
  myvideo.hideControls();
  myvideo.hide();

  // ein neue Eigenschaft dem Video objekt anhängen:
  myvideo.isPlaying = false;

}

function draw() {
  background(backgroundColor);

  tint(backgroundColor);
  image(myvideo, 50, 50, 100, 80);
  noTint();

  stroke(235);
  strokeWeight(9);
  line(20, 380, 20 + mysound.duration(), 380);
  stroke(255, 0, 0);
  strokeWeight(5);
  line(20, 380, 20 + mysound.currentTime(), 380);
}

function createNewButton(){
  let newButton = createButton("new Button");
  newButton.parent("content");
  newButton.mouseClicked(changeBackgroundColor);
}

function changeBackgroundColor(){
  backgroundColor = color(random(255), random(255), random(255));
}

function mouseClicked(){
  // isPlaying ist eine oben definierter variabel
  if(myvideo.isPlaying){
    myvideo.stop();
    myvideo.isPlaying = false;
  } else {
    myvideo.play();
    myvideo.isPlaying = true;
  }
  // .isPlaying ist eine funktion des SoundFile Objekts
  if(mysound.isPlaying()){
    mysound.stop();
  } else {
    mysound.play();
  }
  
}
