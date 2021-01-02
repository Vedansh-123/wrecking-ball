class Block{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density:0.04,
            friction:1.0
        }
        this.object=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.object)
    }
    display(){

        var pos=this.object.position;
        fill("yellow")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
    }
}