//  Dates  [ Our First Module In JavaScript] 

let myDate = new Date()
// console.log(typeof myDate);   // Datatype = object

// console.log(myDate);                    //  Just returns the one moment object of date [ 2024-05-03T11:26:24.556Z ]
// console.log(myDate.toString());         //  Returns More Readable format then default  [ Fri May 03 2024 11:26:24 GMT+0000 (Coordinated Universal Time) ]
// console.log(myDate.toDateString());     //  Much better and clean format the above     [ Fri May 03 2024 ]    // Gives day name also
// console.log(myDate.toISOString());      //  Returns date in ISO format                 [ 2024-05-03T11:26:24.556Z ]
// console.log(myDate.toJSON());           //  Same output as ISO string                    Same as above
// console.log(myDate.toLocaleDateString());  // Returns date in this format              [ 5/3/2024 ]
// console.log(myDate.toLocaleString());      //                                          [ 5/3/2024, 11:28:45 AM ]
// console.log(myDate.toLocaleTimeString());  //                                          [ 11:29:58 AM ]
// console.log(myDate.toTimeString());        //                                          [ 11:31:16 GMT+0000 (Coordinated Universal Time) ]
// console.log(myDate.toUTCString());         //                                          [ Fri, 03 May 2024 11:32:08 GMT ]
// console.log(myDate.getTimezoneOffset());   // Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).  
// console.log(myDate.getHours());            // Gets the hours in a date, using local time.
// console.log(myDate.getMonth());            // Gets the month, using local time.
// console.log(myDate.getSeconds());          // Gets the seconds of a Date object, using local time.

//  _________________________________________________________________________________________________________________________________________________________________________________________

// let mycreatedDate = new Date(2024 , 4, 20 )    // In Javascirpt Months starts from 0 and end to 11 so, [ put 1 less value equal to your desired month number ]
// let mycreatedDate = new Date(2024 , 4, 20 , 7 , 23 , 14 )    
// let mycreatedDate = new Date ("2024-05-03") //  ("YY-MM-DD") // Not generally used in India
let mycreatedDate = new Date ("05-03-2024")    //  ("MM-DD-YY")
// console.log(mycreatedDate.toDateString());
// console.log(mycreatedDate.toLocaleDateString());
// console.log(mycreatedDate.toLocaleString());

// _________________________________ TIME STAMP  ____________________________________________

let mytimestamp = Date.now();

// console.log(mytimestamp);  // miliseconds value from 1970, 1 janurary [ one moment object ]
// console.log(typeof mytimestamp);  // Number DataType

// console.log(mycreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));      // In seconds, from 1970 1 jan to now date 

let Newdate = new Date()

console.log(Newdate.getMonth());  // month in js starts from 0
console.log(Newdate.getDay()); // 1 = monday , 2 = tuesday ..... 6 = saturday , 7 = sunday |

//        ------------>   ``  This is called Back_ticks 

//          `${Newdate.getDay()} and the times  `

Newdate.toLocaleString('default',{                  // In the below line, Press [ ctrl + space ] to get properties options to choose 
          weekday:"long",               
                                                                            
})