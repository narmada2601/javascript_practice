//comparision operator---->      ==,!=,>,<,<=,>=,===
//return boolean values..
//=== is type correction .check value and also its type(1==="1")false
function checkMeetingStatus(currentTime, meetingTime) {
    if (currentTime > meetingTime) {
        console.log("You're late! The meeting started already.");
    } else if (currentTime < meetingTime) {
        console.log("You're early! The meeting hasn't started yet.");
    } else {
        console.log("You're right on time! The meeting is starting now.");
    }
}
let meetingTime = "14:00";
let currentTime = "13:50";  // Change this to test different scenarios

checkMeetingStatus(currentTime, meetingTime);
 //greater than
 let age=18;
 if(age>18)
 {
    console.log("you are eligible for voting");

 }
 //less than<
 let temperature=-5;
 if(temperature<0)
 {
    console.log("warning:its freezing");
 }
 //equal to
 let enteredpin=123;
 let correctpin=123;
 if(enteredpin=correctpin){
    console.log("pin accepted!you can access...");

 }
 //
 let currentSpeed = 50;
let speedLimit = 60;
if (currentSpeed <= speedLimit) {
    console.log("Speed is within limits.");
} else {
    console.log("Slow down! Speeding detected.");
}

// Using == (Equality) - type coercion occurs
let num1 = 5;
let str1 = "5";

console.log("Using == : ", num1 == str1); // true (because '5' is converted to a number)

// Using === (Strict Equality) - no type conversion
console.log("Using === : ", num1 === str1); // false (number is not equal to a string)

// Another example with boolean
let boolVal = true;
let num2 = 1;

console.log("true == 1 :", boolVal == num2); // true (because `true` is converted to `1`)
console.log("true === 1 :", boolVal === num2); // false (boolean is not strictly equal to number)

//example
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2);//false
console.log(obj1 === obj2);//false
//because  objects are compared by reference, not by value. 
// Since obj1 and obj2 point to different memory locations, 
// both == and === comparisons return false.
