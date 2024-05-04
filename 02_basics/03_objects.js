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

console.log(obj.email);  // donot use this 
// console.log(obj.Full Name);   // will not work this time 
console.log(obj["Full Name"]);
console.log(obj["email"]);
console.log(typeof (obj[mysymbol]));


