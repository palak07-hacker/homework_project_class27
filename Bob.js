class Bob
{
	constructor(x,y, r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2

            

			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2,  options);
        World.add(world, this.body);

	}
	display()
	{
			
			var PaperPos=this.body.position;		

			push()
			translate(PaperPos.x, PaperPos.y);
			rectMode(CENTER);
			fill(128,128,128);
			ellipse(0, 0, this.r, this.r);
			pop()
			
	}

}