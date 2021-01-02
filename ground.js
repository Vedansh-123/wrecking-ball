class Ground{
    constructor(x,y,widht,height){
        var options={
            isStatic:true
        }
        this.object=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.object)
    }
    display(){

        var pos=this.object.position;
        fill("black")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
    }
}