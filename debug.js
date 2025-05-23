//debuging the code
//function calling
function item()
{
    let pensquantity=5;
        console.log("the No of pens are:"+pensquantity);
    let noofbooks=4;
        console.log("The No of books are:"+noofbooks);
        console.log("\n\n");
}
item();
//function calling using parameters...........
function furniture(material1,material2,material3)
{
      console.log("These are : "+material1);
      console.log("These are: "+material2);
      console.log("These are : "+material3);
       console.log("\n\n");


}
furniture("chairs","sofa","tables");
//function calling using IIDE
(
    function(cart)
    {
        console.log("%c Your cart is waiting:"+cart ,"color:red;font-size:20px;font-weight:bold");
        //styling in css..
         console.log("\n\n");


    }
)("shoes")

let fooditem="eggs";
    console.log("The Item is "+fooditem);
    debugger;
let estimatedtime="20min";
    console.log("the estimated time for delivery is:"+estimatedtime);
let yourlocation="ameenpur";
    console.log("your delivery location is"+yourlocation);
    