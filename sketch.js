const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,300,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
}

function draw(){

    background("black");   
     ground.display();
     box1.display();
     box2.display();
}



