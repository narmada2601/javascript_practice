
//anonoymous function
function bookName(){
                    console.log("wings of fire");
}
bookName();
//arrow function
let authorName = ()=>{
    console.log("apj abdul kalam");
   
}
authorName();

//arrow function passing arguments

var customerData= (name,gender,dob)=>{
                   console.log(name);
                   console.log(gender);
                    console.log(dob);

}
customerData("aravind","male","25-05-1989");

//arrow function return statements
function getUserLogin(FirstName,LastName,password){
           return`user login details-${FirstName},${LastName},${password}`;
}
let userInfo=getUserLogin("likhil","vempali","123456")
console.log(userInfo);

//another example
setTimeout(()=>{
    console.log("arrow functions")
},5000);


//adding of two  numbers
let add=(a,b)=>
    {
    return a+b;
    
}
let sum=add(20,30);
console.log(sum);





