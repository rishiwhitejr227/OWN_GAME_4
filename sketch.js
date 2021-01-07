var player1,virus,loot
var edges
function preload (){
    virusI=loadImage("virus.png") 
    mask=loadImage("mask.png")
    sanitizer=loadImage("sanitizer.png")
    gloves=loadImage("gloves.png")

}
function setup(){
    createCanvas(600,600)
     player1=createSprite(250,560,100,10)
    // virus1=createSprite(10,10,20,40)
    // virus2=createSprite(10,10,30,30)
    //log1=createSprite(250,560,50,10)
    virus=new Group()
    loot=new Group()

}
function draw(){
    background("black")
   edges=createEdgeSprites()
    if (frameCount%100===0){
    virus1=createSprite(random(20,580),40,20,40)
    virus.add(virus1)
    virus1.shapeColor="yellow" 
    virus1.addImage(virusI) 
    virus1.scale=0.2
    
    virus1.velocityY=random(10,15)
    }
    if(keyDown("left")){
        player1.velocityX=-10
    }
    if(keyDown("right")){
        player1.velocityX=10
    }
    if(virus.isTouching(player1)){
        virus1.remove()
        }

    player1.bounceOff(edges[0])
    player1.bounceOff(edges[1])

    if (frameCount%50===0){
        goodthings=createSprite(random(20,580),40,20,40)
        loot.add(goodthings)
        goodthings.velocityY=7

        var r = Math.round(random(1,3))
        switch(r){
            case 1:goodthings.addImage(gloves)
            goodthings.scale=0.2  
                break
                case 2:goodthings.addImage(sanitizer)
                goodthings.scale=0.3
                break
                case 3:goodthings.addImage(mask)
                goodthings.scale=0.3
                break
        }

        
    }
   
    drawSprites()
    text(mouseX + "   "+"  "+mouseY,mouseX+20,mouseY+10)
    

}