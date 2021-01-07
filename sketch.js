var fixedrect
var movingrect

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 80);
  movingrect=createSprite(400, 200, 50, 80);
  fixedrect.shapeColor="green"
  movingrect.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY

  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2  &&  movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2  &&  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2)

  {fixedrect.shapeColor="red"
  movingrect.shapeColor="red"}

  else{ movingrect.shapeColor="green"
  fixedrect.shapeColor="green"
  }
  drawSprites();
}