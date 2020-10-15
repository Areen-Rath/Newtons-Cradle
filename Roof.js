class Roof {
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(380, 200, 240, 15);
        World.add(world, this.body)
    }

    display(){
        push();
        rectMode(CENTER);
        rect(380, 200, 240, 15);
        pop();
    }
}