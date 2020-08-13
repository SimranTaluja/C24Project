class Paper{
    constructor (){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
        }
        this.paperBall = Bodies.circle(100,450,30,options);
        World.add(world,this.paperBall);
    }
    display(){
        fill ("yellow");
        ellipseMode(RADIUS);
        ellipse(this.paperBall.position.x,this.paperBall.position.y,30,30);
        }

    
  
}