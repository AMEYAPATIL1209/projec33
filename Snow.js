class Snow{
    constructor(x,y){
var options={
    restitution:0.1,
    friction:0.005
}
this.sfall=Bodies.circle(x,y,10,options)
this.radius=10;
this.image=loadImage('snow4.webp');
World.add(world,this.sfall);

    }
    updateY(){
        if(this.sfall.position > height){
            Matter.Body.setPosition(this.sfall,{x:random(0,800),y:random(0,400)})
        }
    }

    showSnow(){
        imageMode(CENTER)
       image (this.image,this.sfall.position.x,this.sfall.position.y,this.radius,this.radius);
    }
}