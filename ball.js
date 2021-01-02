class Ball{
    constructor(x,y){
        var options={
            restitution:0.8,
            density:0.04,
            friction:1.0
        }
        this.object=Bodies.circle(x,y,50,options)
        this.radius=50
        World.add(world,this.object)
    }
    display(){

        var pos=this.object.position;
        fill("yellow")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,50,50)
    }
}