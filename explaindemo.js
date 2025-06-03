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
//scope chain
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


//callback functions

function add(a,b) {
    return a+b;
}
 
function sub(a,b) {
    return a-b;
}
 
function mul(a,b) {
    return a*b;
}
 
function div(a,b) {
    return a/b;
}
 
function calc(a,b,callback) {
    return callback(a,b);
}
console.log(calc(20,10,add));
console.log(calc(20,10,sub));
console.log(calc(20,10,mul));
console.log(calc(20,10,div));
 
 //ANOTHER EXAMPLE......
function showmovieDetails(callback) {
    let details = callback();
    console.log(details);
}
showmovieDetails(() => {
    let movieDetails = {
        movieName: "RRR",
        movieActor:"NTR"
    };
    return `movieName:${movieDetails.movieName} , movieActor:${movieDetails.movieActor}`;
});

//IIFE, variable function and arrow function
 
(function(){
    console.log("this line runs immediately");
})();
 
 
 
(function(...movies){
    console.log("the recent movie is "+movies);
})("hit","yashoda");
 
let multiply=function (a,b){
    return a*b;
};
console.log("product is "+multiply(3,5));
 
var greet;
var countryname;
let language=function(lang){
    console.log("language given is "+lang);
    greet=function (){
        console.log("hello");
    };
    countryname="india";
 
};
language("english");
greet();
console.log(countryname);
 
// let name=()=>{};
 
let listOfTheators=()=>{
    console.log("the teators near me are ravi and siri");
};
listOfTheators();
 
let square=(x)=>{
    return x*x;
}
console.log("the square is "+square(5));


