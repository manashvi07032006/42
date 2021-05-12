const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var shipsGroup, crow;
var cannon, platform, ground;
var bom;

function preload(){

}

function setup(){
  createCanvas(displayWidth - 100, displayHeight -300);

  var engine = Engine.create();
  world = engine.world;
  
  shipsGroup = new Group();

  var options = {
      isStatic:true
  }

  platform = Bodies.rectangle(displayWidth/2 - 400, displayHeight/2 ,50, 50, options);
  World.add(world, platform);
}

function draw(){
    background("blue");
    
    fill("brown");
    rectMode(CENTER);
    rect(platform.position.x - 100, platform.position.y + 25, 350 , 300);

    spawnShips();

    console.log(displayWidth)
    drawSprites();
}

function spawnShips(){
    if(frameCount % 120 === 0){
        var ship = createSprite(displayWidth, Math.round(random(displayHeight/2 - 25, displayHeight/2 - 25)), 50, 50);
        ship.velocityX = -3;
        ship.lifetime = 250;
        shipsGroup.add(ship);
    }
}