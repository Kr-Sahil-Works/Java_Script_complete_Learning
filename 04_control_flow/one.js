//  If condition

// if (false){
//       // No excution

// }

const isloggedIn = 0;
if (isloggedIn){
    
        // console.log("Welcome");
}
else {
    // console.log(" Not Logged In ");
}

//  Comparision Operators ----------  < (lessthan), < (greaterthan),  <= ( lessthan or equalto ), 
// => ( greaterthan or equalto ), == (equal to), != (not equalto) , === [ strict checking checks datatype also ] , !== 

// [ = ] this is not equal to this is assignment operator 

const score = 200

if (score > 100){
    const power ="fly"
    // console.log(`User Power is ${power}`);
}
// console.log(`User Power is ${power}`);  


// Short hand notation

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");   // Implicit Scope

// if (balance < 500 ){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log(" less than 750");
// }else if (balance < 900){
//     console.log(" less than 900");
// }
// else {
//     console.log(" less than 1200");
// }


const userLogginedIn = true
const debitcard = true

if (userLogginedIn && debitcard){           // Both condition must match to true
    console.log(" ALLOWED TO BUY ITEMS ");
}

const googleLogin = false
const emailLogin  = false

if (googleLogin || emailLogin || userLogginedIn){         // [ || = multiple or conditions ] IF Any single one condition is true than it will work 
     console.log(" Login successful");
}