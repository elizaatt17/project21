var ball;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	Matter.Bodies.circle(x,y,radius,{options},{maxSides})

	World.add(world,this.ball);

	ground=new ground(width/2,670,width,20);
	leftSide=new ground(1100,600,20,120);
	rightSide=new ground(1100,600,20,120);

	if(keyCode===UP_ARROW){
		ball.bounce
	}
  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display;
  CanvasGradient.display
  drawSprites();
 
}



