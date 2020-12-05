
const Bodies = Matter.Bodies
const World= Matter.World   
const Engine= Matter.Engine;

var engine, world;
var box ;
var ground;
function setup(){
  var canvas=createCanvas(400,400);
 engine = Engine.create ();
 world= engine.world;
box = Bodies.rectangle (200,200,100,100);
World.add (world,box)

 var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

}
function draw()
{
  Engine.run(engine)
  background(0);
   rectMode(CENTER)
  var pos = box.position;
  console.log (pos)
  rect (pos.x,pos.y,100,100)
  
      rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    
}
