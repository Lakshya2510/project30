class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
      }
      display(){
        if(this.body.speed >5){
          World.remove(world,this.body);
          push();
          tint(255,this.visibility);
          this.visibility = this.visibility -5;
          pop();
        }
        else{
        var pos = this.body.position;
        push();
        rectMode(CENTER)
        fill("lightBlue")
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    }
}