let bankdetails={
     bankname:"hdfc",
     founder:"patrik",
    getbankdetails:function(arguments1,arguments2){
        console.log(this);
        // console.log(this.bankname);
        // console.log(this.founder);
        // console.log(arguments1);
        // console.log(arguments2);
        console.log(`the bankname is ${this.bankname} founder ${this.founder}  establishedyear ${this.arguments1}
            count of employees ${this.arguments2}`);
    }
}
//console.log(this);//it prints the window object
//create one more object
let axisbankdetails={
    bankname:"axisbank",
    founder:"henry",
    logsmessage:function(){

    }
}
//call method immediately invokes the function......

// bankdetails.getbankdetails.call(axisbankdetails,"1935","3456");//axisbankdetails used as current object
//apply method is used to take array of arguments instead of passing them individualy...
//bankdetails.getbankdetails.apply(axisbankdetails,["1935","3456"]);
let newbank=bankdetails.getbankdetails.bind(axisbankdetails,"1935","3456");

newbank();



//one more example
function checkThis()
{
console.log(this);
}
checkThis(1);//trated as argument...
checkThis.call(1);//print the context of this argument...





let name={
    FirstName:"Narmada",
    LastName:"Teegala",
}
    let fullname=function(arg1,arg2){ 
        console.log(`this is ${this.FirstName} ${this.LastName} working as a ${arg1} in ${arg2}`);

    }

fullname.call(name,"programer","misard software solutions");
//fullname.apply(name,["programer","misard software solutions"]);//same output
//multiple elements in a array
let working=["programer","misard software solutions"];
fullname.apply(name,working);

console.log("\n\n");


let icecreamshop={
    name:"creamstone",
     serveIceCream(flavor) {
    console.log(`${this.name} serves delicious ${flavor} ice cream!`);
  }
}

const anothershop={name:"naturals"};
//method with anotherShop as the context and arguments as an array
icecreamshop.serveIceCream.apply(anothershop, ["strawberry"]);

icecreamshop.serveIceCream.call(icecreamshop,"death by chocolate");

let newserveFrom= icecreamshop.serveIceCream.bind(icecreamshop,"hot chocolate fudge");
newserveFrom();