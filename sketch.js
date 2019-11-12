let drag = 0.4;
let strength = 0.05;
let vel = 0;
let colors= [];
var pos = 0;

function setup() {
   
  createCanvas(windowWidth, windowHeight);
  colors[0] = '#E2474B';
  colors[1] = '#2F3A56';
  colors[2] = '#406D96';
  colors[3] = '#A8D0DA';
  colors[4] = '#D8E8E8';
  ellipseMode(CENTER);
  angleMode(DEGREES);
    
  rectMode(CENTER);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(238,238,224);
  
  
  
  let dou = ((millis()/1000)%60).toFixed(2);
  
  let target = second() + (millis()/10000)%15;
  let force = target - pos;
  
  let pos2 = 0;
  let vel2=0;
  let force2 = dou - pos2;
  
  force *=strength;
  force2 *=strength;
  
  vel*=drag;
  vel+=force;
  
  vel2*=drag;
  vel2+=force2;
  
  pos += vel;
  pos2+=vel2;
  //fill(255);
  //rect(1,1,1,1);
  
  
  //rectangulo abajo
  translate(width/2,height/2);

  push();
  fill(colors[3]);
  noStroke();
  rotate(5);
  rotate(-pos*6);
  rect (0,0,316,316,10,10,10,10);

  pop();
  
  
  
  //rectangulo arriba
  push();
  fill(colors[4]);
  noStroke();
  rotate(-pos*6);
  rect (0,0,316,316,10,10,10,10);

  pop();
  
  //arco
  noFill();
  strokeWeight(16);
  stroke(colors[3]);
  

  
  arc(0, 0, 300, 300, -pos*60, pos*60);
  
  push();
  rotate(pos*30);
  strokeWeight(8);
  stroke(colors[1])
  //console.log(pos);
  //let g = map(pos,0,75,30,100);
  //rect(0,0,200, (g*g*0.026))
  rect(0,0,180,180)
  pop;

  push();
  ellipseMode(RADIUS);
  strokeWeight(4);
  
   /*
  console.log(pos);
  stroke(168,208,218,360/(pos/2.5));
  circle(0,0,25);
  circle(pos,-pos,25);
  circle(-pos,pos,25);
  circle(-pos,-pos,25);
  circle(pos,pos,25);
  pop();
  */
}
