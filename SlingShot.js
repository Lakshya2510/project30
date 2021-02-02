class SlingShot {
    constructor(body1,point2){

        var options={
            bodyA:body1,
            pointB:point2,
            length:50,
            stiffness:0.1            
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world,this.chain)
    }
    attach(body){
        this.chain.bodyA = body;
    }
    fly(){

        this.chain.bodyA=null
    }
    display(){
 
        if(this.chain.bodyA){
        var point1 = this.chain.bodyA.position
        var point2 = this.chain.pointB
        line (point1.x,point1.y,point2.x,point2.y)  

        }

    }

}