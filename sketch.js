
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground;
var left;
var right;

let engine
let world


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	ground = new Ground(200,525,1200,20);
	left = new Ground(450,475,30,100);
	right = new Ground(600,475,30,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('gray');
  fill('blue');
  ellipse(ball.position.x,ball.position.y,20);
  
  ground.display();
  left.display();
  right.display();
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.035,y:0})
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.035})
	}
}


