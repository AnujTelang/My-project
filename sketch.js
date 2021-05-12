var alienGroup
var bulletGroup
var heartGroup
var bg;
var bgSprite
var protecterImg;
var protecter;
var alien1Img;
var alien1;
var alien2
var alien2Img
var bullet
var bulletImg
var score=0;
var gameState="Play";
var heart
var heart1
var heart2
var heartImage
var boss
var bossImage
var explosionAnimation
function preload()
{
bg=loadImage("image/background3.jpg");
protecterImg=loadImage("image/spaceship.png")
alien1Img=loadImage("image/alien3.png");
alien2Img=loadImage("image/alien2.png");
bulletImg=loadImage("image/bullet.png");
heartImage=loadImage("image/heart.png")
bossImage=loadImage("image/boss.png")

explosionAnimation=loadAnimation("image/explosion.png","image/explosion2.png"
,"image/explosion3.png","image/explosion4.png","image/explosion5.png","image/explosion6.png")
}

function setup()

{

createCanvas(displayWidth-10,displayHeight-150);
bgSprite=createSprite(displayWidth/2,displayHeight/2,100,100)
bgSprite.addImage(bg);
bgSprite.velocityY=-5

protecter=createSprite(displayWidth/2,displayHeight-250,20,20);
protecter.addImage(protecterImg);

alienGroup=new Group ();
bulletGroup=new Group ();
heartGroup=new Group ();

heart=createSprite(displayWidth-100,50,20,20)
heart.addImage(heartImage);
heart.scale=0.2
heartGroup.add(heart);

heart1=createSprite(displayWidth-150,50,20,20)
heart1.addImage(heartImage);
heart1.scale=0.2;
heartGroup.add(heart1);
heart2=createSprite(displayWidth-200,50,20,20)
heart2.addImage(heartImage);
heart2.scale=0.2
heartGroup.add(heart2);
}
function draw()
{
   
    
background("white")
if(gameState==="Start"){


if(keyDown(RIGHT_ARROW)){
    protecter.x=protecter.x+10
}

if(keyDown(LEFT_ARROW)){
    protecter.x=protecter.x-10
}
//alien1=createSprite(100,100,20,20);
//alien1.addImage(alien1Img);
//alien1.scale=0.1

if(bgSprite.y<0){
    bgSprite.y=bgSprite.height/2
}
for(var i=0;i<alienGroup.length;i++){
if(bulletGroup.isTouching(alienGroup.get(i)) ){
    alienGroup.get(i).destroy();
    score++
}}

for(var i=0;i<alienGroup.length;i++){
    if(alienGroup.get(i)>displayHeight){
        heartGroup.get(i).destroy();
    }}

SpawnAliens();
shoot()
drawSprites();
textSize(30);
fill("white")
text("score-"+score,100,50);

if(score>10){
    end();
  }

}
}
function SpawnAliens(){

    if(frameCount%60===0){
        alien2=createSprite(300,0,20,20);
        alien2.addImage(alien2Img);
        alien2.scale=0.2
        alien2.velocityY=4
        alien2.x=random(100,windowWidth)
        alien2.lifetime=windowHeight/2
        alienGroup.add(alien2);
        
    }
    
}
function shoot(){
    if(keyWentDown("space")){
bullet=createSprite(protecter.x,protecter.y,10,10)
bullet.addImage(bulletImg)
bullet.scale=0.03
bullet.velocityY=-10
bulletGroup.add(bullet)
    }
 
}
function end(){
    
    alienGroup.setVelocityEach(0);
    bullletGroup.setVelocityEach(0)
    gameState="End"
    bgSprite.velocityY=0;
    fill("white")
    textSize(40)
    text("You completed the level!" ,width/2-100,height/2);
    text("press the spacekey to proceed" ,width/2-100,height/2-50);

if(keyDown("space")){
    diffrentLevel();
}

}
function diffrentLevel(){
alienGroup.destroyEach();
boss=createSprite(300,0,20,20)
boss.addImage(bossImage);
gameState="Start"

}