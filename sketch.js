
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObj;
var mango1,mango2,mango3,mango4,mango5;
var world,boy,stone,sling;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	var canvas = createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1050,100,30);
	mango3=new mango(1000,100,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1000,200,30);
	mango6=new mango(1050,200,30);
	mango7=new mango(1200,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone=new Stone(235,410,20,20);

  sling = new Sling(stone.body,{x:230, y:410});

  
	
	Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);

  fill("red");
  text ("press space to play another time",100,50);

  image(boy ,200,340,200,300);
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  groundObject.display();

  sling.display(); 

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);

 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  Matter.Body.setStatic(stone.body, false);
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if (keyCode === 32){
      sling.attach(stone.body)
  }
}

  function detectCollision (stone, mango) {
    mangoBodyPosition=mango.body.position;
    stoneBodyPosition=stone.body.position;
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  {
    if(distance<=mango.r + stone.r)
    Matter.Body.setStatic(mango. body, false);
    }
  }
