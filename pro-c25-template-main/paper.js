class paper{
    constructor(x, y,r){
        var options={
            iStatic:false,
            restitution: 1.5,
            friction: 1.0,
            density: 1.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
        this.body = Bodies.circle (this.x, this.y, (this.r-20)/2, options);
    
    }
    display()
    {
    var paperpos = this.body.position;
    push();
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER);
    fill(255, 0, 255);
    image(this.image, 0,0, this.r, this.r);
    pop();
}
}