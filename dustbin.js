class Dustbin{
    constructor(){
        var options ={
            isStatic:true
        }
        this.width = 200;
        this.height = 20;

        this.bottom = Bodies.rectangle(650,635,this.width,20, options);
        this.right = Bodies.rectangle(560,600,this.width/2,20, options);
        this.left = Bodies.rectangle(760,600,this.width/2,20, options);

        World.add(world, this.left);
        World.add(world, this.right);
        World.add(world, this.bottom);
    }
    display(){
        fill ("red")
        rectMode(CENTER);
        rect(650,635, 200, 20);
        rect(560,600, 20, 100);
        rect(760,600, 20, 100);
    }
}