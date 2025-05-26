//using this as global context.......
//console.log(this);//opens window object on the web browser
var  cars=["honda","suzuki","bmw","kia"];//as we are using var keyword it is declared as global......
var  price=["13lk","11lk","50lk","15lk"];
this.models=[1,2,3,4];//this way also we can also declare 

let cardetails=function(){
    return cardetails;//i get the output of cars and price in console window.....
}
console.log(this);
  
//............object context.....................

//let chips=lays;
 
 var foodbasket={
         fruits:["apple","mango","strawberry","watermelon"],
         vegetables:["tamato","capsicum","onion","cucumber"],
        dairy:["curd","milk","ghee"],
         products:function(){
            console.log("the fruits in the basket are :"+this.fruits);
            console.log("the vegetables in the  basket are:"+this.vegetables);
            console.log("the diary in the basket are: "+this.diary);
            //console.log("the chips is"+this.chips);//lays is notdefined  because it is outside the function

         }

        }
        foodbasket.products();

//another example
let car={
    brand:'bmw ',
    getbrand:function(){
          return this.brand;

    }

}
console.log(car.getbrand());

//.......constuctor function context--this refers to newobject has been created 

function passengerinfo()
{
    this.name="narmada",
     this.age="30",
     this.gender="female"

    console.log("Name is:"+this.name);//narmada
    console.log(this);//shows the window document.....

}
new passengerinfo();//construtor

//passing aurguments....
function updatedinfo(status,country)
{
    this.status=status,
     this.country=country

    console.log(this);

}
 new updatedinfo("married","India");

 //arrow functions.............they dont have this they inherit from the parent

 let dob="15 oct 1931";
 var obj={
    name:"apj abdul kalam",
    bookname:"wings of fire",
 }
    let authorName = ()=>{
    console.log("authorname:"+this.name);
   console.log("bookname:"+this.bookname);
   console.log("dob:"+this.dob);
}
authorName();












