
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
//Use a for loop when you need to iterate a specific number of times. This is common when working with arrays or other collections where the size is known.
Use a while loop when you need to repeat a block of code until a certain condition is met. This is useful when the number of iterations is not predetermined, such as when waiting for user input or reading data from a file.




