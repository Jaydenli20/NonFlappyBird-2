var bird;
var bird_image
var cityBg
var building, building_img, streetLamp_img
var blimp_img, obsBird_img
var obstaclesBottom, obstaclesTop
var bottomGround, topGround
var gameState = "play"

function preload(){
cityBg_img = loadImage("city.webp")

bird_image = loadImage("bird-flap-animation.gif")
building_img = loadImage("building.webp")
streetLamp_img = loadImage("streetLamp.png")
blimp_img = loadImage("blimp.png")
obsBird_img = loadImage("obstaclesBird.gif")
}

function setup() {
  createCanvas(800,400);
  topGround = createSprite(200,10,800,20)
  topGround.visible = false;

  bottomGround = createSprite(200,390,800,20)
  bottomGround.visible=false;

  cityBg = createSprite(400, 200, 800, 400)
  cityBg.addImage(cityBg_img)
  cityBg.scale = 0.313;
   
  bird = createSprite(400, 200, 50, 50);
  bird.scale = 0.2 ;
  bird.addImage(bird_image)

  obstaclesBottom_group = new Group()
  obstaclesTop_group = new Group()


}

function draw() {
  background("black");
 if(gameState==="play"){
  if(keyDown("space") || keyIsDown(UP_ARROW)) {
    bird.velocityY = -6 ;
    
  }
  if(bird.isTouching(obstaclesTop_group) || bird.isTouching(obstaclesBottom_group) || bird.isTouching(bottomGround) || bird.isTouching(topGround)){
    gameState = "end"
}
bird.velocityY = bird.velocityY + 2;
spawnBottomObstacles();
spawnTopObstacles();
 }

 if(gameState==="end"){
  obstaclesBottom_group.setVelocityXEach(0)
  obstaclesTop_group.setVelocityXEach(0)

  obstaclesTop_group.setLifetimeEach(-1)
  obstaclesBottom_group.setLifetimeEach(-1)

  bird.y = 200
  bird.velocityX = 0;
  bird.velocityX = 0;
  
 }  
  
  


  drawSprites();
}

function spawnBottomObstacles(){
  if(frameCount%65===0){
    obstaclesBottom = createSprite(800, 350, 50,50)
    obstaclesBottom.scale = 0.8;  
    obstaclesBottom.velocityX = -4
    obstaclesBottom.lifetime = 195;
    ran = Math.round(random(1,2))
    obstaclesBottom_group.add(obstaclesBottom)

    switch(ran){
      case 1 : obstaclesBottom.addImage(building_img)
      break; 

      case 2: obstaclesBottom.addImage(streetLamp_img)
      obstaclesBottom.scale = 0.08;
      break;

      default:

    }
  }
  }
  function spawnTopObstacles(){
    if(frameCount%87===0){
      obstaclesTop = createSprite(800, 100, 50, 50)
      obstaclesTop.scale = 0.5;
      obstaclesTop.velocityX = -4
      obstaclesTop.lifetime = 205;
      obstaclesTop.y = Math.round(random(35, 90))
      ran = Math.round(random(1,2))
      obstaclesTop_group.add(obstaclesTop)

      switch(ran){
        case 1: obstaclesTop.addImage(blimp_img)
        break;

        case 2: obstaclesTop.addImage(obsBird_img)
        break;

        default:
      }
    }
  }

