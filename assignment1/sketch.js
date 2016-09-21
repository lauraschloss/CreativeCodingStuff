// Assignment
var thex, thy;
var x = 0; // GLOBAL VARIABLE (everybody can get at it)
var y = 0; // GLOBAL VARIABLE (everybody can get at it)
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(800, 600); // width and height in pixels
  background(255);
}

function draw() {
  fill(0, 0, 0, 50); //grey/translucent
  stroke(r, 0, 0, 50); //same
  

  line(mouseX, mouseY, random(50), random(50)); // draw a line - x,y,w,h
  rect(mouseX,mouseY,random(50), random(50)); //rectangle
  ellipse(mouseX,mouseY,random(50), random(50)); //ellipse
  
 
  r = (r+1) % 255; // this will make it go from 0 to 255 (+1) then snap back to 0 (%255)
}

function keyPressed()
{
  background(255); //will clear background when you hit spacebar
}

