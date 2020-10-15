class Bob {
    constructor(x, y){
        var options = {
            density: 0.2
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.x = x;
        this.y = y;
        this.radius = 20;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        
        push();
        ellipseMode(RADIUS);
        fill("green");
        circle(pos.x, pos.y, this.radius);
        pop();
    }
}