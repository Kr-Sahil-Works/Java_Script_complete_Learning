const myObject = {
    html : "HyperTextMarkup",
    css : "cascading style sheets",
    js : "javascript"
}

for (const key in myObject) {
    // console.log(`${key} stands for ${myObject[key]}`);
}


const myprogrammingarr = ["js","html","css","ruby","c++"]

for (const key in myprogrammingarr) {            // Direct key value taken vice-versa of For of loop
    // console.log(key);   // Returing index values as key here
   console.log(myprogrammingarr[key]);
}