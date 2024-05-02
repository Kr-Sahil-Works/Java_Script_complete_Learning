const name = "sam"
let score = 98
let extrapoint = 2
// console.log(name + " "+ score + " "+ "value");  //***** Donot use this type of syntax ******


// console.log(`Hello my name is ${name} and my total score is ${score + extrapoint}`);
//************** very very important to use this type of syntax in morden programming *************** 
const nameobj = new String('NobitaBoyok')

// console.log(nameobj [0]);
// console.log(nameobj.length);
// console.log(nameobj.toLowerCase());
// console.log(nameobj.charAt(4));
// console.log(nameobj.indexOf('a'));

const newString = nameobj.substring(0,5)  // ending value will not come 
// Syntax => stringname.substring (starting_position , ending_position )

// console.log(newString);

const otherString = nameobj.slice(-4,4)  // Here, negative or backward slicing can happen 
//  which is not present in the substring 
// console.log(otherString);

const newStringone = "        Nobitatheuser      "

// console.log(newStringone);
// console.log(newStringone.trim());

const url = "https://flickflights%20netlify.app"

// console.log(url.replace('%20','.'));

// console.log(url.includes('flight'));
// console.log(url.includes('aeroplane'));

// *******************************************************************

const demotext = new String('Testme-pleaseIamhere')

// console.log(demotext.anchor);  // html anchor related
console.log(demotext.charAt(4)); // position
// console.log(demotext.big()); // html big tag related
// console.log(demotext.blink()); // html blink tag related
console.log(demotext.charCodeAt(4));
console.log(demotext.codePointAt(4));
console.log(demotext.concat(' added-text'));
console.log(demotext.endsWith('here'));  // used to check whether it ends with certain word/letter or not
// console.log(demotext.fixed());  // I DONOT KNOW
// console.log(demotext.fontsize('50px'));  // HTML
// console.log(demotext.fontcolor('black')); // HTML
// console.log(demotext.italics()); //HTML

const searchword = 'me'
console.log(`index of the last ${searchword} is ${demotext.lastIndexOf(searchword)}`);
// ******************** Very Important***************************

console.log(demotext.length);
// console.log(demotext.link(url:'text'));  // no longer recommended

// console.log(demotext.localeCompare);
// console.log(demotext.match());
// console.log(demotext.normalize());


const str19 = 'Breaded Mushrooms';

console.log(str19.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str29 = '200';

console.log(str29.padEnd(5, '-'));
// Expected output: "200  "
console.log(str29.padStart(10, '_'));

