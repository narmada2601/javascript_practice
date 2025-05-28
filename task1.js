//take a function and take parameters (number,function of callback )
// function nothingprosales(noofsales,func){
//     func(noofsales);
// }
// nothingprosales(12000,function(cost)
// {
//     console.log("total sales of the phone is"+noofsales);

// });
// //using arrow 
// nothingprosales(15000,()=>{
// console.log("the total sales "+noofsales)
// });
function getBooksLength(booksLength, callbackfn) {
    callbackfn(booksLength);
}

getBooksLength(10,
    (bl) => {
        console.log("BooksLength", bl);
    }
);
//take a function and pass function as argument
function employeee(id,role)
{
    role(id);
}
employeee(1,(admin)=>
{
   
    console.log("employee  is:" ,admin);
});