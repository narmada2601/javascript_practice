//members of an object..........
let empDetails={
                firstName:'narmada',
                lastName:'teegala',
                email:'narmada123@gmail.com',
                phoneNo:'123456789',
                 address:function()
                {
                     street='green villas';
                    appartmentName='lalitha divine county';
                    blockNO='B-410';
                    return (`The address is ${street} ${this.blockNO} ${this.appartmentName}`);
                
                }
              
                 
            };
           console.log(empDetails.address());


   //one more example............member object
   let car={
     brand:"Tesla",
     model:"modelk",
     year:"2023",
     getdetails(){
        return`This car is a ${this.brand} ${this.model} ${this.year}`
     }

   }
   console.log(car.getdetails());
          
   //members of array..........


    let colors=["red","blue","pink","yellow"]
    console.log(colors.length);//length is a property
    colors.pop();//pop is a method
    console.log("updated list after using pop is:"+colors);
    colors.push("green");
    console.log("updated list after using push is:"+colors);
    colors.sort();
    console.log("the sorted colors are:"+colors);
          


//     function car1(){
//     brand:'bmw ';
//     getbrand=function(){
//           return this.brand;

//     }
//     function bike()
//     {
//         brand="yamaha";
//     }
//     car1.prototype.getcarinfo=function(){
//         console.log("the car brand is bmw...")
//     }

// }
// let newcar1=new car1();
// newcar1.getcarinfo();



setTimeout(()=>{
    console.log("hello world 1")
},4000);

setTimeout(()=>{
    console.log("hello world 2")
},8000);

setTimeout(()=>{
    console.log("hello world 3")
},5000);