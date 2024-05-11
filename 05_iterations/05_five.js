const coding =["html","css","ruby","python","js","c++","java"]

coding.forEach( function  (items) {
    // console.log(items);
} )

// coding.forEach( (items) => {

//     console.log(items);
// } )

function printme(items) {
    console.log(items);
}

// coding.forEach(printme)   // Only reference no call needed

coding.forEach( (items,index,arr) =>{
    // console.log(index ,items, arr );
} )


const prlang = [
{
    Language : "Javascript",
    LanguageShort : "js"
},
{
    Language : "hypertextmarkuplanguage",
    LanguageShort : "html"
},
{
    Language : "c programming",
    LanguageShort : "c"
},
{
    Language : "python",
    LanguageShort : "py"
}
]

prlang.forEach( (items) => {
    console.log(items.Language);
}  )