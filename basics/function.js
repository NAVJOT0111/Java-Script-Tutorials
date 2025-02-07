 HEAD
// function call or invoke
run();

//function declaration
function run(){
    console.log('running');              //we can declare function even before or after it
}

//named function assignment
let stand = function walk() {
    console.log('walking');
}

// Anonymous function assignment
// let stand2 = function {
//     console.log('walking');
// }

stand();      //if we are creatiing a function by function assignment method, then function call should be made after it

let jump = stand;
jump();


function sum(a,b){
    // let total = 0;
    // for (let value of arguements)
    //     total = total + value;
    // return total;
    return a+b;
}

console.log(sum(1,2));     // returns 3
console.log(sum(1));          // returns NaN
console.log(sum());             // returns NaN
console.log(sum(1,2,3,4,5));    // returns 3


// function call or invoke
run();

//function declaration
function run(){
    console.log('running');              //we can declare function even before or after it
}

//named function assignment
let stand = function walk() {
    console.log('walking');
}

// Anonymous function assignment
// let stand2 = function {
//     console.log('walking');
// }

stand();      //if we are creatiing a function by function assignment method, then function call should be made after it

let jump = stand;
jump();


function sum(a,b){
    // let total = 0;
    // for (let value of arguements)
    //     total = total + value;
    // return total;
    return a+b;
}

console.log(sum(1,2));     // returns 3
console.log(sum(1));          // returns NaN
console.log(sum());             // returns NaN
console.log(sum(1,2,3,4,5));    // returns 3

 23c79649f520edc8f9dce5fbe3c084143c1a04a4
