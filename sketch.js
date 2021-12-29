const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops=[]
var maxDrops = 200;
var bg 

function preload(){
    bg=loadImage("snow2.jpg")
}

function setup(){
  createCanvas(800,400);
engine = Engine.create();
world = engine.world; 

if(frameCount % 150 === 0)
{ 
    
    for(var i=0; i<maxDrops; i++)
    
    { 
        
        drops.push(new Drop(random(0,400), random(0,400))); 
    } 
}

}

function draw(){
  background(bg);  

    Engine.update(engine);


    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update()
        
    }
    drawSprites();
}   