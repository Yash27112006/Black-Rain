var drops = [];
var i = 0;

function setup() {
  createCanvas(1240,660);
  

  for(var i=0; i<150; i++){
     drops.push (new Drop(random(width),random(height-700,height-600),random(3,10)));
  }

}

function draw() {
  background(289,230,270);

  for(var i=0; i<drops.length; i++){ 
    drops[i].fly();
    drops[i].display();
  }

}