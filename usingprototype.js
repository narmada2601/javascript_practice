function circle(radius){
    this.radius=radius
}
//adding methods to the prototype
circle.prototype.getArea=function()
{
    let radius=this.radius;
    let mathPivaluve=Math.PI;
    return mathPivaluve*radius;
};
circle.prototype.getcircumference=function()
{
    return 2*Math.pi*this.radius;
};
//creating instance
const result=new circle(5);
console.log(result.getArea());
console.log(result.getcircumference());

//one More example
function car(){
this.speed=120
}
car.prototype.getSpeed=()=>{
    return this.speed;
}
var Car=new car();
console.log(car.getSpeed());