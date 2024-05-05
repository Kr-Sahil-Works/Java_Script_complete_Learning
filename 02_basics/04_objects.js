// const instagramuser = new Object()         // SingleTon object 
const instagramuser= {}                 // Non-Single Ton object or literals 

instagramuser.id = "123ab"
instagramuser.name = "Sam"
instagramuser.isLogginedIn = "true"


// console.log(instagramuser);


const regularobj = {

    email:"xyz@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Nobita",
            secondname:"Nobi"
        }
    }
}

// console.log(regularobj.fullname?.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {6:"v",8:"y"}
// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4) // we assign an empty object {} as target and all other arrays as source 
// Copy the values of all of the objects from one or more source objects to a target object. Returns the target object.


                                                                      // ----------------------     Ctrl + L to clear terminal shortcut -------------------------

// const obj3 = Object.assign(obj1,obj2,obj4)
// console.log(obj1);  // If we donot give empty object so it will take first object as target and put values in it

const obj3 = {...obj1,...obj2,...obj4}          // Use This

// console.log(obj3); 

const users = [
    {
        id:"123423dvfd",
        email:"s@gmail.com"
    },
    {
        id:"123423dvfd",
        email:"s@gmail.com"
    },
    {
        id:"123423dvfd",
        email:"s@gmail.com"
    },
    {
        id:"123423dvfd",
        email:"s@gmail.com"
    }
]

// console.log(users[1].email)

// console.log(instagramuser);

console.log(Object.keys(instagramuser));
console.log(Object.values(instagramuser));
console.log(Object.entries(instagramuser));

console.log(instagramuser.hasOwnProperty('name'));