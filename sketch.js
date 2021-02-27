var boy , boyimg;
var bomb , ghost , piggy , zombie ;
var score = 0 ;
var bombimg , ghostimg , piggyimg , zombieimg ;
var background , backgroundimg ;
var coin , coinsgroup; 

var gameover , gameoverimg , restart , restartimg  ; 
var logo , logoimg , logo1,logo1img ;
var gameState=PLAY;
var PLAY=1;
var END=0;
var obstacles , obstaclesgroup;

function preload(){

boyimg = loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png","images/player5.png")
coinimg = loadImage("images/coin1.png");
backgroundimg = loadAnimation("images/bg5.jpeg","images/bg2.jpg","images/bg3.jpg");
logoimg = loadImage("images/logo.png");
//logo1img = loadImage("images/logo1.jpg");
gameoverimg = loadImage("images/gameover.png") ;
restartimg = loadImage("images/restart.png")
bombimg = loadImage("images/bomb.png");
ghostimg = loadImage("images/ghost.png");
piggyimg = loadImage("images/piggy.png");
zombieimg = loadImage("images/zombie.png")
}

function setup(){

createCanvas (730,800);
background = createSprite(350,600,730,800);
background.addAnimation("bg",backgroundimg);
background.scale=1.1;
//background.x=background.width/2;
//background.velocityX= 2;
 
boy = createSprite(330,480,20,50);
boy.addAnimation("player",boyimg);
boy.scale=0.9;
boy.velocityX=0;
boy.velocityY=0; 
//boy.velocityY=-10;  

logo = createSprite(320,350,30,40);
logo.addImage(logoimg);
logo.scale=1;

//logo1 = createSprite(320,550,30,40);
//logo1.addImage(logo1img);
//logo1.scale=0.5;

coin = createSprite(290,350,20,20);
coin.addImage(coinimg);
coin.scale=3;

gameover = createSprite(350,400,30,30);
gameover.addImage(gameoverimg);
gameover.scale=0.5;

restart = createSprite(350,550,30,30);
restart.addImage(restartimg);
restart.scale=0.5;

gameover.visible=false;
restart.visible=false;
coin.visible=false;
coinsgroup=new Group();
obstaclesgroup = new Group();
}

function draw(){

    if(mousePressedOver(logo)){
        gameState=PLAY;
        logo.visible=false;
          
    }
   text("Score:"+score,700,50)
    if(gameState===PLAY){

//logo1.visible=false;
     
    if(background.y>700){
    background.y=350;
}
//background.velocityX=
    //if(keyDown("space")){
   // boy.velocityY=-10;
boy.x=World.mouseX;
       
if(obstaclesGroup.isTouching(boy)){
gameState=END;
}
coingroup();
}
 else if (gameState === END){
    gameOver.visible = true;
    restart.visible = true;
    //boy.velocityY=0;
    obstaclesGroup.setVelocityXEach(0);
    
}

        drawSprites();
    
    }
function coingroup(){

  if(frameCount%300===0){
    coin = createSprite(290,350,20,20);
    coin.addImage(coinimg);
    coin.scale=0.1;
    coin.velocityY=5;
    coin.lifetime=146;
    coinsgroup.add(coin);
  }  
  
}
function obstacles(){
if(frameCount%200===0){
    obstacle=createSprite(300,350,20,20);
    obstacle.velocityX=-6;
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(bomb);
              break;
      case 2: obstacle.addImage(piggy);
              break;
      case 3: obstacle.addImage(zombie);
              break;
      case 4: obstacle.addImage(ghost);
              break;
      default: break;
    }
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);  
}

}
function reset(){
gameState=PLAY;
    gameOver.visible = false;
    restart.visible = false;
score=0;
    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    coinsGroup.setVelocityYEach(0);
    boy.x=330;
    boy.y=480;ss
}