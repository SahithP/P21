
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	var ball_option={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2}

	engine = Engine.create();
	world = engine.world;
	
	

	//Create the Bodies Here.
	groundObj=new Ground(width/2, 670, width,20)
	leftSide=new Ground(1000, 600, 20, 120)
	rightSide=new Ground(1150, 600, 20, 120)
	ball = Bodies.circle(300,300,20);

	Engine.run(engine);
	World.add(world, ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  groundObj.show()
  leftSide.show()
  rightSide.show()
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,20,20)
  drawSprites();
 
}
function keyPressed(){
	if (keyCode==UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:-0.03})
	}
}



