const promiseOne = new Promise(function(resolve,reject){
     
    // Do an async task
    // DB Calls,network calls , cryptography

    setTimeout(function () {
        resolve()
        console.log('My async tasks is completed');
        
    },1000)
})

promiseOne.then(function () {
    console.log('promise comsumed');
})


new Promise(function(resolve,reject){
    setTimeout(function () {
        console.log("Async task2 completed");
        resolve()
    },1000)
   
}).then(function () {
    console.log("Async task2 is consumed :) ");
})


const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({ username : "Nobita",phone : "96588965"})
    },1000)
})

promiseThree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error = false;
        if (!error){
        console.log("promise Four is completed");
            resolve({username : "Nobi", email : "xyas@gmail.com"})}
        
        else{
            reject("Error : File not found ")
        }
    }, 1000);
})

promiseFour
.then((user)=> {
      return user.username 
})
.then((username)=>{
    console.log(username);
})
.catch(function (error) {
    console.log(error)
})
.finally(()=>{
    console.log("The promise is Either Rejected or resolved");
})


const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let error = false;
        if (!error){
            console.log(" Promise Five ");
            resolve({ username : "Javascript", password : "126783"})
        }
        else{
            reject("ERROR : JS NOT WORKING")
        }
    },1000)
})


async function ConsumePromisefive() {
    try{
      const response = await promiseFive 
    }
    catch{
         console.log(error);
    }
}
ConsumePromisefive()

// async function getallusers (){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     //  console.log(response);   
  
//     const data = await response.json()
  
//     console.log(data);
  
// } catch (error) {
//     console.log("Error : ",error);
//    }
// }

// getallusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    let data = response.json();
    return data
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})