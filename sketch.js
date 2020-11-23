const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(200,200,50,50);
    box2= new box(240,100,50,100);
    
    ground1 = new ground(200,380,400,30);

}

 

    
function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    
    box1.display();
    box2.display();
    ground1.display();

}



