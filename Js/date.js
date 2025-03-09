let myDate = new Date();
// console.log(myDate);                               //2025-03-07T19:54:56.332Z
// console.log(myDate.toString());                 //Sat Mar 08 2025 01:24:56 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())              //Sat Mar 08 2025
// console.log(myDate.toISOString());                  //2025-03-07T19:57:11.824Z
// console.log(myDate.toLocaleString());               // 8/3/2025, 1:28:19 am
// console.log(myDate.toLocaleDateString());                     //8/3/2025
// console.log(myDate.toJSON());                     // 2025-03-07T20:00:45.630Z

// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);          // 2023-01-22T18:30:00.000Z
// console.log(myCreatedDate);     // or Date("01-24-2023")

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());       // now we can easily compare time between the two dates

// console.log(Date.now());                             // gives time in millisec
// console.log(Math.floor(Date.now()/1000));               // gives the time in sec

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());                  // 0 is January

newDate.toLocaleString('default',{
    // used for customisations
    weekday: "long"
})