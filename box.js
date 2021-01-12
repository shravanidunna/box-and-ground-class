class box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8
        }
    
        this.body=Bodies.rectangle(x,y,width,height);
        
        World.add(world,this.body);


    }
    display(){
//var pos=this.body.position;
rectMode(CENTER);
fill(225);
rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}