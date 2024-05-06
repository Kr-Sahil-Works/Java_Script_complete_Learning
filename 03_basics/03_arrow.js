//             -------------- >   .This      = refers the current context [ who you are refering to ]


const user = {
      username:"Nika",
      price : 999,
                                             // between this curley barcket is our current context
      welcomemessage : function () {
        
      
               console.log(`Hello ${this.username} ,Welcome to our website`); 
               console.log(this);
            }   
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this);           // return { empty object } like this {} if there is nothing in the global context unlike broswer window global context  

// function runit () {
//     let username = "sam"
//     console.log(this.username);
// }


// const runit = function () {
    
//     let username = "sam"
//     console.log(this.username);
// }

const runit = () => {
    
    let username = "sam"
    console.log(this.username);
}

// runit()

// () => {}  // Basic arrow function | empty arrow function

const addTwo = (num1,num2) => {  // explicit return     // arrow function can be store in a variable like this 
       return num1+num2
}

// console.log(addTwo(4,5));


const add = (num1,num2) =>  num1+num2       // implicit [ lets assume the syntax ] return 
     
const addok = (num1,num2) =>  (num1+num2)   // when parenthese then no return required but, in carly barcket return required 

const objreturn = () => ( {username : " myname"} )

console.log(objreturn());