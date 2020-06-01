const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

}
function draw() {
  background(255,255,255);  
  drawSprites();

  box1.display();
  box2.display();
}