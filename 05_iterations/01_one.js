//  For Loop

for (let i = 0; i <= 22; i++) {            // Use [ Ctrl + D ]
    const element = i;
    if (element === 5) {
        // console.log(" 5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 10; j++) {       // In same scope donot declear same variable names
        // console.log(`Inner Loop :  ${j} ,  Outer value : ${i}`);

        //  console.log(` ${i} * ${j} = ${i*j} `);
    }
    
}

let myArr = [1,2,3,4,5,6,7,8]

let myArrayheros = ['harry','spider','superman','batman']

// console.log(myArrayheros.length);

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}

for (let i = 0; i < myArrayheros.length; i++) {
    const element = myArrayheros[i];
    // console.log(element);
}

for (let i = 0; i < 375; i= i + 0.01) {   // Ypu can Change increment or decrement also with your own needs
    const element = i;
    // console.log(element.toFixed(2));
}


// Break and Continue 

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        break;
    }
    // console.log(`Values : ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("Found 5");
        continue                 // skip it from iteration once
    }
    console.log(`Values : ${i}`);
}