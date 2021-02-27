var canvas;
var music;
var ball;
var edges;
var surface1,surface2,surface3,surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
 canvas = createCanvas(800,600);

   //create box sprite and give velocity
   
    //create 4 different surfaces
   surface1=createSprite(90,590,200,20);
   surface1.shapeColor=("red");
   surface2=createSprite(290,590,200,20);
   surface2.shapeColor=("pink");
   surface3=createSprite(495,590,200,20);
   surface3.shapeColor=("green");
   surface4=createSprite(700,590,200,20);
   surface4.shapeColor=("blue");
   ball = createSprite(random(20,750),100, 40,40);
   ball.shapeColor = rgb(255,255,255);
   ball.velocityX = 4;
   ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
   

    //add condition to check if box touching surface and make it box
   
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
      ball.shapeColor = "red";
      music.play();
  }

  if(surface2.isTouching(ball)){
      ball.shapeColor = "pink";
      //ball.velocityX = 0;
      //ball.velocityY = 0;
      //music.stop();
  }

  if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
      ball.shapeColor = "green";
  }

  if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
      ball.shapeColor = "blue";
  }

    drawSprites();
}
function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 +object1 .width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        return true;

      }
      else{
        return false ;
      }
      }
// bounceoff
function bounceOff(object1,object2){
if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 +object1 .width/2){
    object1.velocityX=object1.velocityX*(-1);
  }
  if( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY=object1.velocityY*(-1);
  }

}

