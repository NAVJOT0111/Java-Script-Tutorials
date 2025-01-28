// //----------------------------------------------------rest operator
// function sum(...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6);

// //--------------------------------------------------default parametrs
// function interest(p, r=5, y=10) {
//     return p*r*y/100 ; 
// }

// console.log(interest(1000,10,5));                  //no error
// console.log(interest(1000, undefined ,5));          //no error


// let person = {
//     fName : 'Love',
//     lName : 'Babbar'
// }
// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName());                       // read only function

// // --------------------------------------------------------------------------GETTER SETTER
// getter -> access properties
// to make getter, use get keyword with functionname and remove function keyword
// setter -> change or mutate properties

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName() {                                       //get function
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if( typeof value !== 'String') {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };
// console.log(person.fullName);


// //  ------------------------------------------------------Exception Handling
// try {
//     person.fullName = 'rahul kumar';
// }
// catch (e) {
//     console.error('You have sent a number in fullname');
// }


// -----------------------------------------Reducing an array
let arr = [1,2,3,4];
let total = 0;

for (let value of arr)                  // for-of loop
    total = total + value;
console.log(total);

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);                  //accumulator-callabckfunction with initial value assigned 0
console.log("PRINTING TOTAL SUM: ");
console.log(totalSum);