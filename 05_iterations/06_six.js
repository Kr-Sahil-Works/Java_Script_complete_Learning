// const coding =["html","css","ruby","python","js","c++","java"]

// const value = coding.forEach( (item) =>{
//     // console.log(item);
//     return item                                  // In forEach loop return donot works
// } )

// console.log(value);

const mynumber = [1,2,3,4,5,6,7,8,9,10]

// let newnums = mynumber.filter( (num) => num > 4 )   // Returns values  // Implicit Return 

// let newnums = mynumber.filter( (num) => num > (4) )

// let newnums = mynumber.filter ( (num)=> {
//    return num>4    // Beacause you started a scope now you must use return keyword to return a value // Explicit Return
// } )

const newnums = []
 mynumber.forEach( (num) => {
    if (num >4) {
        newnums.push ( num)
    }
 } )


// console.log(newnums);



const students = [
    { name: 'John', grade: 'A' },
    { name: 'Jane', grade: 'B' },
    { name: 'Bob', grade: 'C' },
    { name: 'sam', grade: 'B' },
    { name: 'hero', grade: 'C' },
    { name: 'spidy', grade: 'B' },
    { name: 'leo', grade: 'C' },
    { name: 'Jawrdne', grade: 'B' },
    { name: 'ane', grade: 'C' },
    { name: 'Jalohitne', grade: 'B' },
    { name: 'rohit', grade: 'C' },
    { name: 'nobita', grade: 'B' },
    { name: 'oggy', grade: 'C' },
    { name: 'nobita', grade: 'B' },
    { name: 'oggy', grade: 'C' },
  ];


// const stddetails = students.filter( (sec)=> sec.grade =='C' )

const stddetails = students.filter( (nm)=> nm.name.length === 3 )

// const stddetails = students.filter( (nm)=>{
//     if (nm.name.length == 3) {
//         return nm
//     }
// } )

// const lname= students.filter( (nm) => {return nm.name.length >5} )   // Donot forget scope and return keyword
const lname= students.filter( (nm) => { 
    return nm.name.length <5 && nm.name.length >= 4
} )   



// console.log(stddetails);
console.log(lname);



