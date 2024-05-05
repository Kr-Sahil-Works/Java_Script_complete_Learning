//  {} <---------------- This is scope used in functions if&else  | not in object that is used for object defining 

// var c = 120                            // Gobal Scope
let a = 100

if(true) {              
    let a = 10       
    const b =11                        // Block Scope
    // var c = 12           // var leaks value from block scope to global scope creating problems [ overwritting of values ]
    // console.log("INNER : ",a);
}


// console.log("OUTER : ",a);
// console.log(b);
// console.log(c);


function one (){
       Username = "Nobita",
       Big_Icecream = '$99'
       function two(){
        small_Ice_cream = '$10'
        console.log(Big_Icecream);
    }
    // console.log(small_Ice_cream);      // Child can access the parents ice-cream [ variables ] but, parents cannot 
    // two()
}

one ()

if (true) {
    const username = "Sam"
    if(0)
    {
       const greet = "Hello"
       console.log(greet +" "+ username );
    }
    // console.log(greet); // Error
}
// console.log(username);

addOne(2)
function  addOne (num){

     return num + 1
}

// addTwo(3)

const addTwo = function (num){         // Called as Expersion  // In javascript variable is very powerful as it can hold function ,json ,etc...
    return num + 2
}
addTwo(3)