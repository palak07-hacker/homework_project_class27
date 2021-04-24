const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
const Body = Matter.Body;

var engine, world;
var backGroundImage;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;




function setup(){
    var canvas = createCanvas(800, 600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


    roof = new Roof(400, 250, 230, 20);

    bobDiameter=40;

    bob1 = new Bob(320, 575, 40);

    bob2 = new Bob(360, 575, 40);

    bob3 = new Bob(400, 575, 40);

    bob4 = new Bob(440, 575, 40);

    bob5 = new Bob(480, 575, 40);

    

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });

      rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
   
      rope2 = new Rope(bob2.body, roof.body, -bobDiameter*2, 0);
  
      rope3 = new Rope(bob3.body, roof.body, -bobDiameter*2, 0);
  
      rope4 = new Rope(bob4.body, roof.body, -bobDiameter*2, 0);
  
      rope5 = new Rope(bob5.body, roof.body, -bobDiameter*2, 0);

}

function draw(){
    background("red");
    rectMode(CENTER);
    Engine.update(engine);

    
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    
}

function keyPressed(){
    if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-45})
    }

}
/*
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position;
	roofBodyPosition=constraint.bodyB.position;

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
*/