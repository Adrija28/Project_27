class Rope{

	constructor(bodyA, ptB){
	var options = {
        bodyA : bodyA,
        pointB : ptB,
        length : 10,
        stiffness : 0.04
    }
    this.pointB = ptB;
    this.rope = Constraint.create(options);
    World.add(world, this.sling);

}

display(){
	if(this.rope.bodyA){
        push ()
    strokeWeight(4)
    line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, 
        this.rope.pointB.x, this.rope.pointB.y)
    pop ()
}
}

fly(){
    this.rope.bodyA = null;
}

}
