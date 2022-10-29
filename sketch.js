var bg, bgImg, player, shooterImg, shootingImg, zombie, zombieImg
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
}

function draw(){
    background('#FF2400')
    if(keyDown("up")){ 
      player.y -= 30   
    }
    if(keyDown("down")){
        player.y += 30
    }
    if(keyWentDown("space")){
        player.addImage(shootingImg)
    }
    if(keyWentUp("space")){
        player.addImage(shooterImg)
    }
    spawn_zombies()
    
    drawSprites()
}

function spawn_zombies(){
    if(frameCount%40==0){
        zombie = createSprite(random(900,1300), random(100,500),50,50)
        zombie.addImage(zombieImg)
        zombie.scale = 0.30
        zombie.velocityX = -10
        zombie.lifetime = 500
    }
}