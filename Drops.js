class Drops
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.03,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		World.add(world, this.body);

	}
	display()
	{
			
			var circlepos=this.body.position;		

            var maxDrops;
            for(var i = 0; i < maxDrops; i++){
                drops.push(new createDrop(random(0,400),random(0,400)));
            }
			push();
			translate(circlepos.x, circlepos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop();
			
	}

}