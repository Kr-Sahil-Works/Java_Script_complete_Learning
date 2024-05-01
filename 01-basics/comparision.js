// console.log(2 > 1);
// console.log(1 > 3);
// console.log(10<=10.2);
// console.log(10<=10.2);
// console.log(1 < 3);
// console.log(1 != 3);
// console.log(1 == 3);


// ************ Basic comparision ************************

// console.log("2" > 1);
// console.log("02" > 1);             // No predicatble results

// console.log(null > 0);        // Never use this type of comparisions
// console.log(null < 0);
// console.log(null == 0);

// console.log(null >= 0);  // Unpredictable output [ here when we comparied null to 0 in js then js converted null to 0 and 0 equals to 0 ]

// console.log(undefined > 0);        
// console.log(undefined < 0);         // Avoid such comparision in js 
// console.log(undefined == 0);


// ******************************* Comparision and equality check in Javascirpt are two different things *************************************************


// Strict checking [   ===   ]

console.log( "2" == 2 ); // Here, conversion is taking place
console.log( "2" === 2); // Here, strict check so datatypes are also been checked  // No conversation 