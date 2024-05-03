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

const demotext = new String('Testme-please-Iamhere')

// console.log(demotext.anchor);  // not used now
// console.log(demotext.big()); // not used now
// console.log(demotext.blink()); // not used now
// console.log(demotext.blod()); // not used now

// console.log(demotext.fixed());  // not used now
// console.log(demotext.fontsize('50px'));  // not used now
// console.log(demotext.fontcolor('black')); // not used now
// console.log(demotext.italics()); //not used now

// ********************* no longer recommended at all  *********************

// console.log(demotext.link()); //not used now
// console.log(demotext.small()); //not used now
// console.log(demotext.sub()); //not used now
// console.log(demotext.substring()); //not used now
// console.log(demotext.sup()); //not used now

// console.log(demotext.localeCompare);
// console.log(demotext.match());                // I Donot know the use
// console.log(demotext.normalize());


console.log(demotext.charAt(4)); // position
console.log(demotext.charCodeAt(4));
console.log(demotext.codePointAt(4));
console.log(demotext.concat(' added-text'));

console.log(demotext.startsWith('Test'))  // used to check whether it [starts] with certain word/letter or not
console.log(demotext.endsWith('here'));  // used to check whether it [ends] with certain word/letter or not

console.log(demotext.length);

const searchword = 'me'

console.log(`index of the last ${searchword} is ${demotext.lastIndexOf(searchword)}`);
// ******************** Very Important***************************

const str19 = 'Breaded Mushrooms';

console.log(str19.padEnd(25, '.'));
// Expected output: "Breaded Mushrooms........"

const str29 = '200';

console.log(str29.padEnd(5, '-'));
// Expected output: "200  "
console.log(str29.padStart(10, '_'));

console.log(demotext.repeat(2)); // very useful

console.log(demotext.replaceAll('e','-')) // very useful  // here all the characther are been replaced at once
console.log(demotext.replace('e','-'))  //only replace the first characther
 
// ------------------------------------------------------------------------------------------------------------------------

console.log(demotext.search('me'))

console.log(demotext.toLocaleLowerCase()) // returns whole sentence in lower

console.log(demotext.toLocaleUpperCase()) // returns whole sentence in upper
console.log(demotext.toString());  // The toString() method of String values returns this string value

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!    ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
 
console.log(demotext.valueOf()); // The valueOf() method of String values returns this string value.

// ********************************************************* ENOUGH FOR NOW [ STILL HAVE TO LEARN MORE AS PER THE USES ]*************************************************************************************************************