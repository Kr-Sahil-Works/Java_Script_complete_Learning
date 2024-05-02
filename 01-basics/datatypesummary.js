//  # Data type can be divided into TWO parts 
/*
      First Premivite & Second all others Non-Premitive Datatypes 
        
      [ Call by value or Call by reference ]
      
      Difference is based on HOW THE DATA IS STORED IN THE MEMORY 
      AND HOW IT IS BEEN ACCESSED.

*/

// # Primitive [ value type ] call by value means original data is not given [ refernce]
//  the value is been copied and given || and changes occur in its copies not in the original memory location 
/*  7 Types :
        String,
        Number(no int,float,double float only number or BigInt),
        Boolean,
        BigInt,
        undefined,
        Null(empty,not equal to 0 ),
        Symbol( used to uniquely indentify compnents),
        
*/

// JavaScript is a dynamically typed language
//  In Javascript =>  const score = 99
//  In Typescirpt =>  const score:number = 99


const score = 99
const scoreValue = 99.99

const isLoggedIn = true
const outsidetemp = null

let useremail;  // undefined datatype 
// let useremail = undefined;   ( manual undefining)

// let tempinv = Number(outsidetemp)
// console.log(tempinv);
// console.log(typeof tempinv);

// console.log(typeof useremail);

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid);

const bigNumber = 493423483243284283472384283487234832n   // use [  n  ] at the end of number to make it BigInt

// console.log(typeof bigNumber);
// console.log(typeof id)


// # Non-Primitive [ reference type ]
/*
       Array
       Objects
       Functions

*/

const cars = ["TATA","BMW","Ferrari"]
// console.log(cars);

let myobj = {
      name: "NOBITA",
      age : 18,
      smart:true 
}

const myFunction = function(){                               // In Js we can store a function into a variable 
      //   console.log(myobj);
}  


// console.log(typeof myFunction);  // return on function is called as [object function]

myFunction()  // function called

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack( Premitive ) , Heap ( Non-Premitive )

let myname = "Nobita"

let anothername = myname

anothername = "Sam"

console.log(myname);
console.log(anothername);

let userone = {
      emailid : "userhu@gmail.com",
      phonenumber:4738423743,
       upiid:"sbi@ybl",
}

let usertwo = userone;

usertwo.emailid = "hackerhaibhai@gmail.com"

console.log(userone);

console.log(userone.emailid);
console.log(usertwo.emailid);

