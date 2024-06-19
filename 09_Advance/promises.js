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