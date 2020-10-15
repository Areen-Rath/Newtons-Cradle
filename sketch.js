
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

var bobX = 300;

function setup(){

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(bobX, 450);
	bobObject2 = new Bob(bobX + 40, 450);
	bobObject3 = new Bob(bobX + 80, 450);
	bobObject4 = new Bob(bobX + 120, 450);
	bobObject5 = new Bob(bobX + 160, 450);

	roof = new Roof();

	rope1 = new Rope(bobObject1.body, {x: 300, y: 200});
	rope2 = new Rope(bobObject2.body, {x: 340, y: 200});
	rope3 = new Rope(bobObject3.body, {x: 380, y: 200});
	rope4 = new Rope(bobObject4.body, {x: 420, y: 200});
	rope5 = new Rope(bobObject5.body, {x: 460, y: 200});

	Engine.run(engine);
  
}


function draw() {

  	background(211, 211, 211);
  
  	bobObject1.display();
  	bobObject2.display();
  	bobObject3.display();
  	bobObject4.display();
  	bobObject5.display();
 
	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -10, y: 0});
	}
}