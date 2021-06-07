var background, backgroundImg;
var shooter, shooterImg; 
var satellite, satelliteImg, satelliteGroup;
var comets, comet1, comet2, comet3, comet4, cometsGroup;
var bullets, bulletsImg, bulletsGroup;


function preload(){
backgroundImg = loadImage("background 1.jpg");
shooterImg = loadImage("shooter image.png");
comet1 = loadImage("comet 1.png");
comet2 = loadImage("comet 2.png");
comet3 = loadImage("comets 3.png");
comet4 = loadImage("comets 4.png");
bulletsImg = loadImage("bulletnew 2.png");
satelliteImg = loadImage("sattelite.png");
  
}



function setup() {
  createCanvas(700, 600);

  shooter = createSprite(300,560,20,50);
  shooter.addImage(shooterImg); 
  shooter.scale = 0.3;

  satelliteGroup = createGroup();
  bulletsGroup = createGroup();
  cometsGroup = createGroup();
  
 
}

function draw() {
 background(backgroundImg);

 if(keyDown("left")){
   shooter.x=shooter.x-4;
 }
  
 if(keyDown("right")){
  shooter.x=shooter.x+4;
}
 

  drawSprites();
 
}

