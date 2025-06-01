// Logical AND (&&) - both conditions must be true
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can legally drive.");
} else {
    console.log("You cannot drive.");
}
//example
let isMember = true;
let hasCoupon = false;

if (isMember && hasCoupon) {
    console.log("You get a big discount!");
} else if (isMember || hasCoupon) {
    console.log("You get a small discount.");
} else {
    console.log("No discount available.");
}

// Logical OR (||) - at least one condition must be true
let raining = false;
let hasUmbrella = true;

if (raining || hasUmbrella) {
    console.log("You can go outside without worrying.");
} else {
    console.log("Better stay indoors.");
}
//one more example
let hasVIPPass = false;
let hasRegularTicket = true;

if (hasVIPPass || hasRegularTicket) {
    console.log("You can enter the event.");
} else {
    console.log("You cannot enter.");
}

// Logical NOT (!) - reverses the boolean value
let isWeekend = true;

if (!isWeekend) {
    console.log("Time to work!");
} else {
    console.log("Enjoy your weekend!");
}
//one more example
let isOpen = true;

if (!isOpen) {
    console.log("Sorry, we are closed.");
} else {
    console.log("Welcome! We are open.");
}