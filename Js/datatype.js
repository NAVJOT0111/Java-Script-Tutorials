"use strict";                                 //this says to treat all the code of js as newer version
let state;                                    //undefined value

// alert(3 + 3)     //we are using node js, not browser
// number => 2^53
// big int 
// string
// boolean
//null => standalone value
//undefiend value
// symbol => talks about uniqeness

console.log(typeof "Navjot");
console.log(typeof null);
console.log(typeof undefined);

/*
datatypes in js: Primitive and non primitive; 
categorized on the basis of how data is kept and the memory and 
how the data is accessed    
*/

/*
Primitive: call by value; 7 types => String, Number, Boolean, null, undefined, Symbol(to make a value unique), BigInt
Reference/ Non primitive: Array, Objects, Functions
*/

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);                      // false

const bigNumber = 34535543566465677n                // adding n at last gives you a bigint


const heroes = ["shaktiman", "naagraj", "doga"]         // array

let myObject = {
    name: "Navjot",
    age: 19,
}

const myFunction = function(){
    console.log("Hello World");
}



