
//global scope...........anywhere can be used
//msg is declare global so no error
let msg="welcome t0 javascript..............";
function tutorial(){
    let msg="Introduction";

    console.log("this is local accessed:"+msg);
}
tutorial();
console.log("this is global accessed:"+msg);
//local access first

function outside(){
    function inside(){
           console.log("im inside");
    }
    inside();
}
outside();
console.log("im ouside");
 console.log("\n\n");

//innerfunction using as outsidefunction

var name;
function books (bookname,bookauthor)
             {
                var bookdetails;
                 console.log("%c The bookname is:"+bookname ,"color:Red");//applying style.....
                 console.log("bookauthor:"+bookauthor);
                name="siri:";
                console.log(name);//declare as global so it can access anywhere..
                //   bookdetails= function()//as it is annomynous function it executes first.
                //   {
                //   console.log("first page:index");
                //  }
                
            }  
            function bookdetails(){
                    console.log("testing");
                }
            

books("my experiments with truth", "mahatma gandhi");
bookdetails();

//blockscope using arrays
 function rainbow()
 {
    let colors=["violet","indigo","blue","green","red","orange","yellow"]
   document.write("colors before sorting:"+colors);
   
   function sorting()
    {
        result=colors.sort();
        document.write("colors after  sorting:"+result);
        
   
    }
sorting();

}
 rainbow();