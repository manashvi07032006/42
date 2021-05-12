class Bom extends BaseClass {
    constructor(x,y){
      var options = {
          restitution: 0.4,
          friction: 0.1,
          density: 1.2 
      }
      this.body = Bodies.circle(x, y, 20, options);
      World.add(world, this.body);
      this.trajectory =[];
    }
  
    display() {
        var pos = this.body.position;
        
        fill("black");
        
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      /*for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      }*/
    }
  }