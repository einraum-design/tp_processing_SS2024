let backgroundColor;

let myvideo;
let videoPlaying = false;

let mysound;

function preload(){
  mysound = loadSound("assets/sound.mp3");
}

function setup() {
  backgroundColor = color(255, 0, 0)
  let cvs = createCanvas(400, 400);
  // setzte das HTML Element mit der id "canvas" als Elternobjekt für
  // das neu erstellt canvas Element
  cvs.parent("canvas");

  let mybutton = createButton("click me!");
  //mybutton.parent("header");
  mybutton.position(50, 100);

  // auf Mausklick wird die "createNewButton" Funktion aufgerufen
  // hier keine () oder Paramter angeben!
  mybutton.mouseClicked(createNewButton);

  let mybutton2 = createButton("fullscreen");
  mybutton2.position(0, 0);
  // eine anonyme funktion aufrufen:
  // () => { CODE }
  mybutton2.mouseClicked(() => {
    fullscreen(true);
  });

  mybutton2.hide();

  myvideo = createVideo("assets/video.mp4");
  myvideo.hideControls();
  myvideo.onended(() => { 
    console.log("video ended");
  });

  myvideo.hide();
  

}

function draw() {
  background(backgroundColor);

  tint(backgroundColor);
  image(myvideo, 200, 200, 200, 200);
  noTint();

  stroke(255);
  strokeWeight(8);
  line(10, 380, 10 + mysound.duration(), 380);
  stroke(255, 0, 0);
  strokeWeight(6);
  line(10, 380, 10 + mysound.currentTime(), 380);
}


function createNewButton(){
  backgroundColor = color(random(255), random(255), random(255));
  let nextButton = createButton("new button");
  nextButton.parent("canvas");
  nextButton.mouseClicked(createNewButton);
}

function mousePressed(){
  if(videoPlaying){
    myvideo.stop();
    videoPlaying = false;
  } else {
    myvideo.play();
    videoPlaying = true;
  } 

  if(mysound.isPlaying()){
    //mysound.stop();
  } else {
    mysound.play();
  }
}
