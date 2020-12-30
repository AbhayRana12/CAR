var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1350,400);
  
  car=createSprite(50, 200, 30, 30);
  wall=createSprite(1250,200,40,height/2);

  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;

}

function draw() {
  background("black");

  if(car.x-wall.x<car.width/2+wall.width/2 
    && wall.x-car.x< car.width/2+wall.width/2) {
    car.velocityX=0;
    deformation=0.5*weight*speed*speed/22500;

    if(deformation>180) {
      car.shapeColor=color("yellow");
    }

    if(deformation<180 && deformation>100) {
      car.shapeColor=color("green");
    }

    if(deformation<100) {
      car.shapeColor=color("red");
    }
  }
  
  
  drawSprites();
}