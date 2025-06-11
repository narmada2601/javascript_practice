import { bankName , openAccount , getBalance } from "./bank.js";
import { employeeName , employeeDetails } from './employee.js';

console.log(bankName)

let Customer = openAccount("Madan");
//console.log(Customer);

let CustomerAmount = getBalance("Madan", 5000)
console.log(CustomerAmount);


let employee = employeeName
let empDetails = employeeDetails("Bengolore");


//document.body.innerHTML = `<h2>${Customer}</h2> <h3>${CustomerAmount}</h3>`
document.body.innerHTML += `<h3>${employee}</h2> <h3>${empDetails}</h3>`