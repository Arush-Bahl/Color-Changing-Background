
function setup(){

  createCanvas(1200,400);
}


function draw(){

  background("white");

  ellipse(600,200,50,50);

  ellipse.shapeColor = "white";

  ellipse.x = mouseX;

  ellipse.y = mouseY;

  if(ellipse.x <= 400){
     background("red");
  }

  if(ellipse.x >= 400 && ellipse.x < 800){
    background("blue");
 }

 if(ellipse.x >= 800){
  background("green");
}


}