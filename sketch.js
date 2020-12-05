
const Bodies = Matter.Bodies ;
const World= Matter.World ;
const Engine= Matter.Engine; 
var engine, world; 
var ball ;
 function setup(){ 
   var canvas=createCanvas(400,400); 
   engine = Engine.create (); 
   world= engine.world; 
   ball = Bodies.circle (200,200,10,{restitution:0.7}); 
   World.add (world,ball) 
   ground = Bodies.rectangle (200,390,400,10,{isStatic :true}); 
   World.add (world,ground) 
  } 
   function draw() {
      Engine.run(engine)
       background(0); 
       rectMode(CENTER) 
       var pos = ball.position; 

       circle (pos.x,pos.y,10) 
       var pos1 = ground.position;
        rect(pos1.x,pos1.y,400,10); }


