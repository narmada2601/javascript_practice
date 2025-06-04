//using this as global context.......
//console.log(this);//opens window object on the web browser
var  cars=["honda","suzuki","bmw","kia"];//as we are using var keyword it is declared as global......
var  price=["13lk","11lk","50lk","15lk"];
this.models=[1,2,3,4];//this way also we can also declare 

let cardetails=function(){
    return cardetails;//i get the output of cars and price in console window.....
}
console.log(this);
// example
 var author = {
    name         : "RabindraNathTagore",
    dateofbirth  : "May 7, 1861",
    books        : ["Gitanjali", "The Home and the World", "Gora"],
    getBooksCount : function(){
        console.log("Author is",  this);
        console.log("Athor DOB" , this.dateofbirth);
        //console.log("Athor books" , this.books);
        console.log("Athor name" , this.name);
        console.log(this.Authors);
    }
}

 author.getBooksCount() ;  
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
function car(){
    this.brand='bmw ';
    this.speed=120;
    this.color="red";
    ordercardetails=function(){
          console.log( "your order has been placed sucessfully........");

    }

}
 cardetails=new car();
 ordercardetails();
let information= cardetails.color;
console.log("the colort of the car is:"+information);





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
let info= function updatedinfo(status,country)
{
    this.status=status,
     this.country=country

    console.log(this);

};
 new info("married","India");
 console.log(this);

 //arrow functions.............they dont have this they inherit from the parent

 var  dob="15 oct 1931";
 var obj={
    name:"apj abdul kalam",
    bookname:"wings of fire",
    published: ( )=>{
console.log("authorname:"+this.name);
   console.log("bookname:"+this.bookname);
   console.log("dob:"+this.dob);

 this.country="india";
 console.log(this.country);
    }
   
 }
 obj.published();
    let authorName = ()=>{
        this.publisheddate={
            date:"1987",
        }
        console.log(this.publisheddate.date);
    console.log("authorname:"+this.obj.name);
   console.log("bookname:"+this.obj.bookname);
   console.log("dob:"+this.obj.dob);
}
authorName();












