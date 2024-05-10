// const userEmail = "N@gmail.ai"         // Not empty 
// const userEmail = ""         // Empty string no value

const userEmail = []  // Empty array

if(userEmail){
     console.log("GOT THE USER EMAIL");
}
else{
    console.log("user doesnot have a email id");
}

//  Notes :-
/* 
        false == 0;
    output - true

        0 == '';
    output - true

        false == '';
    output - true


*/

// Falsy Values

// false , 0 , -0, BigInt 0n , '' ,  "" , null , undefined , Nan (Not a number)

// Truthy Values 

// '0',"0", true , 'false' , "false" , [] , {} , [ function(){} ] // A empty function is also true in value

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyobj = {

}

if (Object.keys(emptyobj).length === 0) {     // by Using OBJECT properties we made a arra of keys in the object and then by using array properties we check the length of it
    console.log(" Empty Object ");       
}

//        Try it select this text -------->     wrapmeinstring   and press shift + "Double qoutas"


//  Nullish Coalescing Operator (??): null undefined      
// New operator
let var1fromdb;

// var1fromdb = 5 ?? 10
// var1fromdb = null ?? 10      // prevent null value error reciving from database or server side | safety check from null value so code doesnot get harm 
// var1fromdb = undefined ?? 404
// var1fromdb = null ?? null ?? null // returns null as no other options given
// var1fromdb = 12 ?? null ?? 15 // first value after or before null it wil take 

// console.log(var1fromdb);

//  Ternairy Operator

// condition ? true : false 

const iphoneprice = 87600

iphoneprice >87000 ? console.log("Iphone is costly now in the market") : console.log("It is less than 87k ");