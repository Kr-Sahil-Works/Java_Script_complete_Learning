//  Singleton   [ constuctor ]
// Object.create


// object literals   [ Multiple instences ]

const mysymbol =Symbol("key1");
const obj = {
    name: "Nobita",
    "Full Name": "JM Lohit",
    [mysymbol] : "keyvalue",           // ***********_____________  syntax very important   ___________*************
    age : 19,
    location : "Bangalore",
    email: "nobi@gamil.com",
    isLoggedIn: false,
    lastseendays : ["Monday","Saturday"]
}

// console.log(obj.email);  // donot use this 
// console.log(obj.Full Name);   // will not work this time 
// console.log(obj["Full Name"]);
// console.log(obj["email"]);
// console.log(typeof (obj[mysymbol]));

obj.email = "newemail@gmail.com"
// console.log(obj["email"]);

// console.log(obj["email"]);  // In the background object store key also as a string So, use of doble quotas is must 

// Object.freeze(obj)      // Freeze means no changes  // ------------------------------  *Remember to remove freeze before doing other changes or functions taks performing on the object -----------------------------------------


// console.log(obj);

obj.greeting = function () {
    console.log("hello js user");
}
// obj.greeting2 = function () {
//     console.log(`hello ${obj.name}`);        //_____________________________________   String Interpolation  ____________________________
// }

obj.greeting2 = function () {
    console.log(`Hello, ${this.name}`); // Refer name from the object using [this.] properties   //_____________________________________   String Interpolation  ____________________________
}

// console.log(obj.greeting); // function is not called ( excuted )| Just, the reference of the function will be return back  

console.log(obj.greeting());
console.log(obj.greeting2());


// ************* Important Note --------------------> Remember, we have two ways to access key value in javascript using either dot .  or square bracket [ ]  
// Generally, we use dot but in some cases like[symbol] sqaure bracket is the only option