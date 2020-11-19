const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img;
function preload(){
  polygon_img=loadImage("poly.png");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

  ground = new Pf(600,height,1200,20)
  pf1=new Pf(400,200,150,15)
  pf2=new Pf(640,140,150,15)

  box1=new Box(640,113,30,40)
  box2=new Box(610,113,30,40)
  box3=new Box(670,113,30,40)
  box4=new Box(640,73,30,40)
  box5=new Box(400,173,30,40)
  box6=new Box(370,173,30,40)
  box7=new Box(430,173,30,40)
  box8=new Box(400,133,30,40)

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  s1 = new Ss(this.ball,{x:100,y:200});
  

}

function draw() {
  background(0,0,29);  

  ground.display();
  pf1.display();
  pf2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  s1.display();   

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  s1.fly();   
}
function keyPressed(){
  if(keyCode===32){
   s1.attach(ball.body)
  }
 }