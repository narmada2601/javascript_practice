//if---executes condition is true.....
let age=20;
if(age>=20){
    console.log("you are adult........")
}
console.log("\n\n");
//if else................
let score=75;
if(score>=90)
{
    console.log("you secured grade A");
}
else if(score>=80)
    {

     console.log("you secured grade B");
}
else if(score>=70)
{
    console.log("you secured grade C");
}
else if(score>=60)
    {

     console.log("you secured grade D");
}
console.log("\n\n");
// USING ELSE---executes default block of code
let  isLogin=false;
if(isLogin){
    console.log("welcome!!!!!!!!");
}
else {
    console.log("please login...............")

}
console.log("\n\n");
//realtime examples 
let username="narmada";
let password="12345677";
function autenticate(uname,upass)
{

    if(uname==username&&upass==password){
        console.log("Autentication sucessful.......")
    }
    else {
          console.log("Authentication Failed.please check your credentials......")
    }
}
autenticate("narmada","12345677");
console.log("\n\n");

//check even /odd number
function checkEvenOdd(number)
{
      if(number%2==0)
      {
          console.log(+number, " is even number" );
      }
      else{
        console.log(+number, " is odd number");
      }
}
checkEvenOdd(5);
checkEvenOdd(8);
//using switch case

function getAccessLevel(role)
{
    switch (role) {
        case `admin`:return `full access`;
        case `editor`:return `edit access`;
         case `viewer`:return `read only access`;
         default:`return no access`;
    }
}
console.log(getAccessLevel("admin"));
console.log(getAccessLevel());   






























