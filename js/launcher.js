class launcher{
	constructor(bodyA, pointB){
        var options = {
			'isStatic':true,
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.04
           
        }
        this.pointB=pointB;

        this.launcherObj = Constraint.create(options);
        World.add(world, this.launcherObj);
    }
       

    attach(){
        if(this.launcherObj.bodyA){
        var pointA = this.launcherObj.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);       
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
       }
        
    }
}