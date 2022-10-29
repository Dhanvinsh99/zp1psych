var bg, bgImg, player, shooterImg, shootingImg, zombie, zombieImg, bullet, zombieGroup, bulletGroup; 
var bulletScore = 80;
function preload(){
    bgImg = loadImage("assets/bg.jpeg")
    shooterImg = loadImage("assets/shooter_2.png")
    shootingImg = loadImage("assets/shooter_3.png")
    zombieImg = loadImage("assets/zombie.png")
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    bg = createSprite(displayWidth/2-20, displayHeight/2-20, 20, 20)
    bg.addImage(bgImg)
    bg.scale = 1.3
    player = createSprite(displayWidth-1500, displayHeight-400, 50,50)
    player.addImage(shooterImg)
    player.scale = 0.55
    zombieGroup = createGroup();
    bulletGroup = createGroup();
}

function draw(){
    background('#FF2400')
    //text(variblename,x,y)
    if(keyDown("up")){ 
      player.y -= 30   
    }
    if(keyDown("down")){
        player.y += 30
    }
    //a simple statement that releases the bullets and changes the image of the shooter to the shooting postions when space key is pressed
    if(keyWentDown("space")&& bulletScore >=0){
        player.addImage(shootingImg)
        bullet = createSprite(displayWidth-1400, player.y-49,20,10)
        bullet.velocityX = 20
        bullet.depth = zombie.depth - 4
        bullet.lifetime = 400
        bulletScore -= 1
        bulletGroup.add(bullet)
    }
    if(keyWentUp("space")){
        player.addImage(shooterImg)
    }
    if(bulletGroup.isTouching(zombieGroup)){
       for(i=0;i<zombieGroup.length;i++){
        if(zombieGroup[i].isTouching(bulletGroup)){
            zombieGroup[i].destroy()
            bulletGroup.destroyEach()
        }
       }
    }

    spawn_zombies()
    drawSprites()
    textSize(27.2)
    fill("#000000")
    text("ammo left:"+bulletScore,displayWidth-500,displayHeight-1000)
}

function spawn_zombies(){
    if(frameCount%40==0){
        zombie = createSprite(random(900,1300), random(100,500),50,50)
        zombie.addImage(zombieImg)
        zombie.scale = 0.30
        zombie.velocityX = -10
        zombie.lifetime = 500
        zombieGroup.add(zombie)
    }
}

