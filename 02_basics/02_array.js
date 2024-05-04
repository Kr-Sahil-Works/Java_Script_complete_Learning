const cars = ["BMW","FERRARI","TATA"] 
const programminglanguage = ["java","js","html","css"]

// cars.push(programminglanguage);     // **Remember [ ARRAYS DONOT MERGE TOGETHER HERE ]    // Its just push another array on the array
// console.log(cars);

// In javascript an array can take any data type so, yes an array can take an array also as its data type

// console.log(cars[3][2]);

let mynewjoinarr = programminglanguage.concat(cars);  // contact() returns works it is given a new array // here unlike push() we get all elements of both arrays in single new array

// console.log(mynewjoinarr);

// In concat we can add two array but, we have better options available 

const otherarr =[1,23,4,55,6,'hello',0.9,78,]
const myarrjoinerspread = [...cars,...programminglanguage,...otherarr] // Mulitple arrays can be joined and with each individual element 
// We generally use this method to spread [ glass broken exmaple ]

// console.log(myarrjoinerspread);


const rarecase_array = [1,2,3,[4,5,6],8,9,[23,67,[56,7,8,90],9,0,12]]
// console.log(rarecase_array);    // Very hard to read

const real_caseuse_array = rarecase_array.flat(Infinity)//Try to give extact depth in production     // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(real_caseuse_array);

// When we data scraping fro website or gets data in string or other formats but, we need it to be array so we can use or perform array methods/functions on it

// We can ask and convert also other format or datatype to an array

// console.log(Array.isArray("Nobita"));   // Only Checks
// console.log(Array.from("Nobita"));      // convert into an array
// console.log(Array.from({name:"Nobita"}));  //It cannot convert object to direct array as we doesnot specify what need to be converted from the object key or value

let marks1 = 89
let marks2 = 99
let marks3 = 100

console.log(Array.of(marks1,marks2,marks3));                 // [ Array.of ------> ] Returns a new array from a set of elements.


// Study little more about Array.is | Array.of | Array.from 