///here multiply and divide import with custom names using as keyword.ie named export with aliases //
// import {multiply as mul,divide as div} from "./operations.js";
// console.log("multiplication of two numbers are "+mul(2,3));
// console.log("the division of two numbers are"+div(20,10));

//............................................//
import { add, subtract, multiply, divide } from './operations.js';

console.log(add(5, 3));         // 8
console.log(subtract(10, 4));   // 6
console.log(multiply(2, 6));    // 12
console.log(divide(12, 3));     // 4
