const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Man,Rain_drops;
function preload(){
    
}

function setup(){
   
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(0);
    Engine.update(engine);
}   

