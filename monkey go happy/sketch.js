
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,400)
  ground=createSprite(300,390,600,10)
  monkey=createSprite(50,350,20,20)
  monkey.addAnimation( "monkeyrtlacs", monkey_running)
  monkey.scale=0.15
}


function draw() {
background("white")
  monkey.collide(ground)
  monkey.velocity = monkey.velocity + 0.5
  drawSprites()
  
  
}






