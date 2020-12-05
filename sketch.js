
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



}
function draw()
{
  Engine.run(engine)
  background(0);
   rectMode(CENTER)
  var pos = box.position;
  console.log (pos)
  rect (pos.x,pos.y,100,100)
    
}