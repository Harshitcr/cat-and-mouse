var bg;
var tom,tomimg1,tomimg2,tomimg3;
var jerry,jerryimg1,jerryimg2,jerryimg3;

function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    tomimg1=loadAnimation("images/cat1.png");
    tomimg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomimg3=loadAnimation("images/cat4.png");

    jerryimg1=loadAnimation("images/mouse1.png");
    jerryimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryimg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomsleeping",tomimg1);
    tom.scale=0.2; 

    jerry=createSprite(200,600);
    jerry.addAnimation("jerrystanding",jerryimg1);
    jerry.scale=0.1;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tomlastimg",tomimg3);
        tom.x=300;
        tom.scale=0.2;
        tom.changeAnimation("tomlastimg",tomimg3);

        jerry.addAnimation("jerrylastimg",jerryimg3);
        jerry.scale=0.2;
        jerry.changeAnimation("jerrylastimg",jerryimg3);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
  jerry.addAnimation("mouseteasing",jerryimg2);
  jerry.changeAnimation("mouseteasing",jerryimg2);
  jerry.frameDelay=25;
  }
  if(keyCode===RIGHT_ARROW){
    jerry.addAnimation("mouseteasing",jerryimg2);
    jerry.changeAnimation("mouseteasing",jerryimg2);
    jerry.frameDelay=25;

  }

}
