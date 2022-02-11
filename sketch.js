
function setup() {
  createCanvas(500,500);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background(50,283,185);
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

