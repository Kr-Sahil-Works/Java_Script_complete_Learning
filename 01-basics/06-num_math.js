const score = 200
// console.log(score);

const balance = new Number(780)
// console.log(balance);

const bankbalance = new Number(10000000000)
// console.log(bankbalance.toLocaleString()); // for US format by defult
// console.log(bankbalance.toLocaleString('en-IN'));

// console.log(bankbalance.toString().length); // to check the length of the number 

let storeitem1 = new Number(99.678)
// console.log(storeitem1.toFixed(2));

const otherNumber = 123.896434733472  // max precision is working is upto [ 20 ]
// console.log(otherNumber.toPrecision(15));

// +++++++++++++++++++++++++++  MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-37));
// console.log(Math.round(6.8));
// console.log(Math.round(4.23));
// console.log(Math.ceil(6.1));
// console.log(Math.floor(8.99));
//  console.log(Math.min(23,57,3.99,4,57,87,34,82,));
//  console.log(Math.max(23,57,3.99,4,57,-4,87,34,82,0));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.random());  // Returns a random value [ between 0 and 1 ]
// console.log(Math.random()*10); // Gives a one digit and then decimals but, can be still zero [ 0 ]
// console.log((Math.random()*10) + 1 ); // Never  Gives zero value 
console.log((Math.floor(Math.random()*10 )) + 1 ); // Returns upto [ 1 to 10 ]
console.log(Math.ceil((Math.random()*10) + 1));  // Returns upto [ 1 to 11 ]

const min = 20
const max = 99

console.log(Math.random());
console.log(Math.floor(Math.random()));
console.log((max-min + 1) + min)

// console.log(Math.floor(Math.random() * (max-min + 1) + min));
