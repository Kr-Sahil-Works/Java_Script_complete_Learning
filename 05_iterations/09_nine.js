const myitemsprice = [1,2,3]


// const mytotal = myitemsprice.reduce( function (accumlator,currval){
//     console.log(`Accumlator value : ${accumlator}  & Current value : ${currval}`);
//     return accumlator+currval
// },0 )

const mytotal = myitemsprice.reduce(  (acc,currval)=> (acc + currval),0)


// console.log(mytotal);

//   1 +  3  +  6  Last value returns

// Live Example

const Shoping_cart = [
{
    item:"box",
    price : 99
},
{
    item:"bag",
    price : 299
},
{
    item:"lunch_table",
    price : 999
},
{
    item:"laptop",
    price : 150000
},
{
    item:"phone",
    price : 29000
},
{
    item:"clothes",
    price : 199
},
{
    item:"clothes",
    price : 480
}
]

const pricetopay = Shoping_cart.reduce(  (acc,item) => (acc +  item.price),0)

console.log(pricetopay);