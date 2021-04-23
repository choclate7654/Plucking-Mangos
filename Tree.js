class Tree
{
    constructor(x,y)
    {
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.dustbinWidth 500;
		this.dustbinHeight=70;
		this.wallThickness=90;
        this.image=loadImage("plucking mangoes/tre_pg")
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
        World.add(world,this.bottomBody);
    }
    display()
    {
        var postionBottom=this.bottomBody.position;
		push()
		translate(posBottom.x, posBottom.y+170);
		fill(255)
		imageMode(CENTER);
		image(this.image, 17,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
		push();
    }
}
