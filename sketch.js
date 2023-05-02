//introducing the variables 
var trex ,trex_running, ground, ground_running, score, ground_inv, rand_clouds, cloud, cloud_running;
var obstacle, obst1, obst2, obst3, obst4, obst5, obst6, obst; 
//preloading the graphics of trex for running animation 
function preload(){
  trex_running = loadAnimation ("t_rex-0.png", "t_rex-1.png","t_rex-2.png","t_rex-3.png","t_rex-4.png","t_rex-5.png","t_rex-6.png","t_rex-7.png","t_rex-8.png","t_rex-9.png","t_rex-10.png","t_rex-11.png","t_rex-12.png","t_rex-13.png","t_rex-14.png","t_rex-15.png","t_rex-16.png","t_rex-17.png","t_rex-18.png","t_rex-19.png","t_rex-20.png","t_rex-21.png","t_rex-22.png","t_rex-23.png","t_rex-24.png","t_rex-25.png");
  ground_running = loadImage ("sand_desert-removebg.png");
  cloud_running = loadImage ("cloudnew-removebg.png");
  obst1 = loadImage ("obstacle1.png");
  obst2 = loadImage ("obstacle2.png");
  obst3 = loadImage ("obstacle3.png");
  obst4 = loadImage ("obstacle4.png");
  obst5 = loadImage ("obstacle5.png");
  obst6 = loadImage ("obstacle6.png"); 
}
//creating the canvas trex and ground sprites for the setup
function setup(){
  //creating the canvas where trex runs
  createCanvas(480,200)
  var score = 0;
  ground_inv = createSprite (500, 190, 5000, 20);
  ground = createSprite(400,80,5000,20);
  ground.addImage ("GROUNDMOVING", ground_running);
  ground.scale = 1.6;
  ground_inv.visible = false; 
    //create a trex sprite
    trex = createSprite(70,160, 50, 20);
    //trex animation 
    trex.addAnimation ("TREXMOVING", trex_running);
    //resizing the trex to the canvas
    trex.scale = 0.08;
    //creating the ground sprite
   // var rand = Math.round(random(20,50));
  // console.log(rand)
  }

function draw(){
//creating yellow background
  background("yellow")
  rand_clouds();
  obstacle();
    textSize(18);
     text("THE T-REX RUNNER GAME!", 100, 20); 
   // text("Press Spacebar to jump...", 200, 90);
   textSize(12);
   text ("Score :   ", 380, 30);
   ground.velocityX = -1;
   if (ground.x < 0) {
    ground.x = ground.width/2;
   }
   
   //controlling the trex with space key to jump on facing the obstacles
    if (keyDown ("space")) {
      //assigning the Y velocity to the trex on pressing space
      trex.velocityY = -9;
       } 
      //pulling down the trex from the jumping height
    trex.velocityY = trex.velocityY + 0.5;
    //fixing the trex to the ground sprite 
    trex.collide (ground_inv);
    
    drawSprites();
}

function rand_clouds() {
if (frameCount % 160 === 0) {

  cloud = createSprite (590, 60, 40, 15);
  cloud.scale = 0.1;
cloud.velocityX  = -2;
cloud.addImage ("CLOUDSMOV", cloud_running);
cloud.y = Math.round(random(34,90));
//destroying the clouds after they rech the left side
cloud.lifetime = 290;
//adjusting the cloud depth
cloud.depth = trex.depth;
trex.depth = trex.depth + 1;
  }
}

function obstacle () {
  if (frameCount % 80 === 0) {
    obst = createSprite (590, 150, 50, 15);
    obst.scale = 0.6;
  obst.velocityX  = -4;
  obst.lifetime = 250; 
 //generating random obstacles on the screen
 var rand = Math.round(random(1,6));
 //adding random images to the obstacles
  switch (rand){
  case 1: obst.addImage ("1st_OBSTACLE", obst1);
          break;
  case 2: obst.addImage ("2nd_OBSTACLE", obst2);
          break;
  case 3: obst.addImage ("3rd_OBSTACLE", obst3);
          break;
  case 4: obst.addImage ("4th_OBSTACLE", obst4);
          break;
  case 5: obst.addImage ("5th_OBSTACLE", obst5);
          break;
  case 6: obst.addImage ("6th_OBSTACLE", obst6);
          break;
  default: break;
      }  
  }
} 
