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

let myarr2 = new Array(1,2,3,4,5)   // In this type of declartion of array we must give only the parnthese ()  not square brickets []

console.log(myarray[4]);