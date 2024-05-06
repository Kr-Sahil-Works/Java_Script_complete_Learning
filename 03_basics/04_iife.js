//  Immediately Invoked Function Expressions  ( IIFE )

//  To Solve Two Problems ->  Fast excution of the function as soon as possible [like connecting to database as the program runs ]
//                        ->  To avoid global scope polulation


(function database_st() {
    // named iife
     console.log(`DATABASE STARTED`);
})();                                 // In some cases invoked function doesnot know where to stop the context so must use [ ; ] at the end 

    // Semi-colon is must [ Donot forget ]

((status) => {
    // unnamed iife
    console.log(`DATABASE CONNECT ${status}`);
})(" OK ")


// database_st()