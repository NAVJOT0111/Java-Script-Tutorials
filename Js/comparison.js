console.log("2" > 1);               //true
console.log("02" > 1);              //true

console.log(null > 0);              //false
console.log(null == 0);             // false
console.log(null >= 0);             // true, comparisons convert null to a number

console.log(undefined == 0);            //false               
console.log(undefined > 0);             //false
console.log(undefined < 0);             //false

// strict check: also checks the datatype of values ===

console.log("2" == 2);                  // true
console.log("2" === 2);                 // fzlse