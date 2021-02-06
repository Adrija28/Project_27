
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(250, 550, 20);
	chain1 = new Rope(bob1.body, {x:250, y:100})

	bob2 = new Bob(300, 550, 20);
	chain2 = new Rope(bob2.body, {x:300, y:100})

	bob3 = new Bob(350, 550, 20);
	chain3 = new Rope(bob3.body, {x:350, y:100})

	bob4 = new Bob(400, 550, 20);
	chain4 = new Rope(bob4.body, {x:400, y:100})

	bob5 = new Bob(450, 550, 20);
	chain5 = new Rope(bob5.body, {x:450, y:100})

	top = new Roof(200, 100, 300, 50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
  
bob1.display();
chain1.display();

bob2.display();
chain2.display();

bob3.display();
chain3.display();

bob4.display();
chain4.display();

bob5.display();
chain5.display();

  drawSprites();
 
}



