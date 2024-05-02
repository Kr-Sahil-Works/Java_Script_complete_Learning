const name = "sam"
let score = 98
let extrapoint = 2
// console.log(name + " "+ score + " "+ "value");


console.log(`Hello my name is ${name} and my total score is ${score + extrapoint}`);

const nameobj = new String('NobitaBoyok')

// console.log(nameobj [0]);
// console.log(nameobj.length);
// console.log(nameobj.toLowerCase());
// console.log(nameobj.charAt(4));
// console.log(nameobj.indexOf('a'));

const newString = nameobj.substring(0,5)  // ending value will not come 
// Syntax => stringname.substring (starting_position , ending_position )

console.log(newString);

const otherString = nameobj.slice(-4,4)  // Here, negative or backward slicing can happen 
//  which is not present in the substring 
console.log(otherString);