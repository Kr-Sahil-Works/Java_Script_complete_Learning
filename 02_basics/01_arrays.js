// Array

// let myarray = [0,1,2,3,4,5,true,"strvalue"]   // Completly fine


//  * JavaScirpt arrays are resizeable 
//  * Mix datatype is allowed
//  * Array index start from [ 0 ]
//  * In javascirpt array it makes shallow copies 

// ------------------->  Shallow copy means actual refernce of memory loaction while sharing or copy 
// ------------------->  Deep copy means object properties does not share the same reference as a other copy is made


let myarray = [0,1,2,3,4,5]
const heros = ["batman","papa","superhero"]

let myarr = new Array(0,1,2,3,65,4,5)   // In this type of declartion of array we must give only the parnthese ()  not square brickets []

// console.log(myarray[4]);


// Array Methods 

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(4)       // Not optimaized but, used to add element at the first index
// myarr.shift()          // Removes the first element of the array from index 


// console.log(myarr.includes(7));      // Return a boolean datatype [  TRUE or False  ]
// console.log(myarr.indexOf(7));      // Returns [ -1  ] if element not found
// console.log(myarr.indexOf(65));

let newArray = myarr.join()

// console.log(typeof myarr);     // Object
// console.log(typeof newArray)  // String Datatype 

// console.log( myarr);    
// console.log( newArray) 


//  ___________________________ Slice and Splice ____________________________________

console.log("A",myarr);

const myn1 = myarr.slice(1,4) // INDEX 0 is not included and [ Ending-range ] is also not inclueded

console.log(myn1);
console.log("B",myarr)
const myn2 = myarr.splice(1,4) // End-Range will be inclued | Array manuplation occured in the actual array
//  But, the main difference is in splice the portion is acutally cuted from the array it slef

console.log(myn2);
console.log("C",myarr);

// console.log(myarr.indexOf(65))  // ---------------->  Prove

