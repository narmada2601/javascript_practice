//execution context
//3ways 1)global scope 2)local scope 3)block chain
var x=10,y=20;//global variables
function sum(x,y)
{
    let z=x+y;
    console.log("sum of two numbers are"+z);

}
function sub()
{
    w=x-y;
    
    console.log("subtraction of two numbers are"+w);
}
sum(10,20);
sub();

console.log("welcome to restaraunt");
var restarauntname="foodhub";
function placeorder(orderno){
    var fooditem="pizza";
    var cookingtime="10 min";
    function preparefood()
    {
        console.log(`preparing food ${fooditem}`);
        if(cookingtime>5)
        {
            console.log("cooking in progress........")
        }
    }
    preparefood();
    console.log("oder sent to kitchen");
}
 
placeorder(1);
console.log(`thank you for visiting ${restarauntname} `);