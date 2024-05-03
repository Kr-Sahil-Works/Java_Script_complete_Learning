"use strict"; // Treat all Js code as newer version 


// alert ("hello")  // Not used in nodejs that much but,can be used in broswer easily as engine comes by default in it 


// console.log("first line");  console.log("second line of code")  // can be excuted like this but,donot write like this  



console.log("Ok working");
console.log(6 + 98);           // code readablity should be high 



//Basics Data Types in Js 

let name = "sam"
let age = 78
let islogin = false

// let testnumber = 9007199254740993    // max limit
console.table([name,age,islogin])

// numbers -> 2 to power 53 = (9,007,199,254,740,992)
// bigint  -> used for too big numbers 
// string  -> " double quoats " or in  ' single qouats ' generally " " is used
// boolean ->  true or false 
// null    -> StandAlone vaule       // empty intentionally for scenario like tempetaure website error send 0 but you want null output in that case
// undefined ->
// symbols -> provides components uniqueness ( in react )




// object 

console.log(typeof "sam")
console.log(typeof age)
console.log(typeof islogin)
console.log(typeof undefined)   // output undefined 


// typeof basic error in js
console.log(typeof null) // output is [ object ]  // so null is object while above are datatypes 
