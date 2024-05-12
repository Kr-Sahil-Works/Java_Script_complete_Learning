const mynumber = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynumber.map( (num)=> num + 10 )


// const newnums = mynumber.forEach( (num) => {   // Can be also done in forEach loop but,avoid it as it doesnot return anything
// console.log(num + 10);
// })

// ---------------------------------------   Chaning   --------------------------------------------------------

const newnums = mynumber.map( (num)=> num *3 )
.map( (num)=>num + 1 )
// .filter ( (num)=> num % 2 == 0 && (num % 5 == 0)  )
.filter( (num)=> num % 2 != 0 && num % 3 != 0 && num% 5 != 0)


console.log(newnums);