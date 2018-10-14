// x position variable
var movement = 0;

function setup()
{
  // set canvas size
  createCanvas(500, 500);
}

function draw()
{
  background(150);

  // set the fill color
  fill(255, 200, 150);

  // set the ellipse mode
  ellipseMode(CENTER);

  // increment x variable
  movement = movement + 2;

  // draw a circle
  ellipse(movement, 100, 25, 25);
}
