class Rope {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA, pointB: pointB, length: 200
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var bodyA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(2);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        pop();
    }
}