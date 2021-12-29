class Drop{

    constructor(x,y)
    {

        var options={

            restitution:1.0,
            friction:0.1
        }


        this.body=Bodies.circle(x,y,15,options)
        this.radius=15; 
        this.image = loadImage("snow4.webp");

        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y>580){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,100)})
        }
    }

    display(){
        var pos=this.body.position;
        fill("blue")
        ellipseMode(CENTER)
        //ellipse(pos.x,pos.y,this.radius,this.radius)
        image(this.image, pos.x, pos.y, this.radius, this.radius);
    

    }



}