class Drop{
    constructor(x,y,Yspeed){
    this.x = x;
    this.y = y;
    this.Yspeed = Yspeed;
    }

    fly(){
       this.y = this.y + this.Yspeed;
       if(this.y>height){
          this.y = random(this.y-700,this.y-600);
       }
    }

    display(){
        stroke("black");
        line(this.x,this.y,this.x,this.y+20);
    
    }

}