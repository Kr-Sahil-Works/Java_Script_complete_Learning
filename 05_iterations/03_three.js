//  for of 

// ["","",""]

//  [ [],[],[] ]

// [ {},{},{} ]

const arr = [1,2,3,4,5]

// for (const iterator of object) {   iterator = variable used  & object refer to which object we are refering for the loop it can be a array also strings also and object also
    
// }

for (const num of arr) {
    // console.log(num);
}

const welcome = ["hi","hello","bye-bye"]

for (const str of welcome) {                   // Direct values in for of loop
    // console.log(str);
}

const greeting = "Hello Nobita"
for (const greet of greeting) {
    // console.log(`Each char is : ${greet}`);
}


//  Map

const map = new Map()  // Orders & Umique values

map.set("IN","India")
map.set("IN","India")  // No duplicates
map.set("US","America")
map.set("UK","England")
map.set("AU","Austrilia")

// for (const key in map) {             // For In loop not iterable for map  
//     console.log(map[key]);
// }

// console.log(map);

for (const [code , country] of map) {
    // console.log(code,"  :- ",country);
}

const myobj = {
    game1 :"NFS",
    game2 : "Temple Run",
}

// for (const [gno,gname] of myobj) {           // For Of loop not iterable for objects
//     console.log(gname);
// }

