console.log("welcome to our restaraunt....")
var restarauntName="food hub";
function placeOrder(orderNo)
{

   console.log(`order ${orderNo} received`);
  var fooditem="pizza";
  var cookingtime="10 minutes";
  function preparefood()
  {
         console.log(`preparing ${fooditem}...`)
  
  if(cookingtime>5)
  {
    console.log("cooking in progress.....")
  }

}
preparefood();
console.log("order sent to kitchen...");
}

placeOrder(11);
console.log(`thankyou for visting your  ${restarauntName}`);


//global

var  x=30,y=20;
//block1
function add()
{
    z=x+y;
} 
function sub()
{
    w=x-y;
    console.log(z);

    console.log(w);
}
add();
sub();