//function with in a function
//sum of two numbers.........
var z;
function sum(){
      let x=10;
    let  y=20;
          z=x+y;
           
          }
   sum();

 console.log("the sum of two numbers are"+z);

   //multiply......................
   let multiply=function(x,y){
     return x*y;

   }
   console.log("the muliply of two numbers are:"+multiply(x,y));
  
 multiply(10,20);
   
         
   //square of the number...........
   let square=function(num){
        return num*num;
    }
    console.log("%c the square of the number is"+square(5),"color:red");
    square();
    
