let score = "34"
let score2 = 78
let imaginescore = "33abc"
let imaginescore2 = 3219023
let check = null
let check1 = undefined



let valueIncheck = Number(check)
let valueIncheck1= Number(check1)
// console.log("original score value is "+typeof score)
// console.log("original score2 value is "+typeof score2)
// console.log(typeof (score) )

// console.table([typeof score,typeof (score)])

let valueInNumber = Number(score)
let valueInString = String(score2)

// console.table([typeof valueInNumber])
// console.table([typeof valueInString])

let valueInNum = Number (imaginescore)
let valueInStr = String (imaginescore2)

// console.log(typeof valueInNum)
// console.log(typeof valueInStr)

// console.log(valueInNum)
// console.log(valueInStr)

let x = imaginescore*2
let y = imaginescore + "ok"
let a = imaginescore2 * 2
let b = imaginescore2 + "you"
// console.log(x)
// console.log(y)

// console.log(a)
// console.log(b)


// so, in javascript strictchecking is not there
// thats why many people0 use typescript

// so donot relay on Number in javascript   Do checking  

// console.log(typeof valueIncheck)
// console.log(valueIncheck)

// console.log(typeof valueIncheck1)
// console.log(valueIncheck1)


let boolean = true
let boolean2 = false

// console.log(boolean)
// console.log(boolean2)
// console.log(typeof boolean)

let valueInBoolean = Number(boolean)
let valueInBoolean2 = Number(boolean2)
// console.log(valueInBoolean)
// console.log(valueInBoolean2)



let String1 = "nobita"
let valueInstr1 = Number(String1)

// console.log(valueInstr1)



// "33" => 33
// "33abc"  => Nan  [ Not a Number ] but, type is still a Number
// true = 1 ; false = 0 ;


//  Basic conversation is overed
// Now, some more 

let IsLoggined = "kuch ve"
let valueInLoggined = Boolean(IsLoggined)   //      Type Casting

// console.log(valueInLoggined);


//    1 => true ; 0 => false ; 
//    ""  => empty string => false ;
//  "   " & "text"  => true ;

let somenumber = 23
let stringnumber = String (somenumber)

// console.log(stringnumber)
// console.log(typeof stringnumber)




// **************************   Operations   ******************************************


let value = 3
let negvalue = -value

// console.log(negvalue)


// console.log( 2 + 2 )
// console.log( 2 - 2 )
// console.log( 2 * 4 )

// // Power operator        [ a ** b ]
// console.log( 2 ** 2 ) 
// console.log( 3 ** 3 )

// console.log( 2 / 2 )
// console.log( 2 % 2 )

let str1 = "Hello"
let str2 = " Nobita"

let strm = (str1 + str2)

// console.log(strm);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")


// console.log("1" + 2 + 2 )  // if string is frist then the others are treated same in js

// console.log(1 + 2 + "2" )  // if string is not in start then others will be treated like there normal operations


// console.log(+true)

// console.log(+"")
// console.log(+"ok")

let n1,n2,n3 

n1=n2=n3 = 2+2    // Not used in bigtech companies bad code

// console.log(n2)

let gamescore = 89
gamescore++;
// console.log(gamescore);


let xi = 3
let yi = xi++  // Postfix

let ix =3
let iy = ++ix  // Prefix

console.log(xi,yi)

console.log(ix,iy);
