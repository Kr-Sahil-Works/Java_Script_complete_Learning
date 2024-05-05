// Functions Demo

function saymyname (){
    console.log("N");
    console.log("O");
    console.log("B");
    console.log("T");
    console.log("A");
}

// saymyname  // Reference
// saymyname() // call or excution

// function add2numb (num1,num2){   // When we define function then the value we pass [inputs] in is called parameters
        
// console.log(num1+num2);           // function here is not returing anything it just printing something

// }

// add2numb(3.3,4)                  // When we call the function then the value we pass in is called arguments

// const result = add2numb(3,4)
// console.log(result);

 function add2numb (num1,num2){   

    // let result = ( num1+num2 )
    // console.log("Function working");      // it will work because it is reachable and before return of the function
    // return result                                // After return in function no other code will be excuted 
     return  num1+num2
    // console.log("Function working");                // Unreachable code detected.
    }

const result = add2numb(3,5)
// console.log(`My result is ${result}`);      // String-Interpolation

function userLogginedIn (username = "default value can be passed here"){
// if(username === undefined){  
    if(!username){
             console.log("Please enter your username ");
             return // as a break using
    }
     return(`${username }, User just logged In `); // hERE, Function Returns only , not printing anything
}

// console.log(userLogginedIn("Nobita"))              // Now, its printing 

// console.log(userLogginedIn()) 


function cartlistitems_price (val1,val2,...numb1){                // Rest operator
            return numb1
}

// console.log(cartlistitems_price(200,90,78,56));

const user = {
    name:"Nobita",
    email:"nuy@gmail.com",
    age:19
}

function handlingobject (anyobject){
           console.log(`User name is ${anyobject.name}, User email Id is ${anyobject["email"]}`);
}

// handlingobject(user)

handlingobject({                  // object passed
          name:'sam',
          email:'xyz@yahoo.com'
         
})

 // Array passed

 const value = [200,300,4000,6000]

 function arrinput (anyarray){
            //   console.log(anyarray[1])
              return anyarray[1]
 }

//  arrinput(value)
console.log(arrinput([200,400,600,800]))