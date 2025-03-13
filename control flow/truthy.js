const userEmail = "j@navjot.ai"

if (userEmail){
    console.log("Got user email ");
} else {
    console.log("Don't have user email");
}

// falsy values: false, 0 ,-0, null , undefined, BigInt, 0n, NaN, ""
// truthy values: "0", 'false' , " ", [], {}, function(){}

const emptyObj = {}                                 // to check of object is empty or not
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// +++++++++++++++++++++++++++++ Nullish Coalescing Operator(??): works on null undefined +++++++++++++++++++++++++++++++++

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1) ;

// +++++++++++++++++++++++++++++++++ ternary operator ++++++++++++++++++++++++++++++++++++++++

const iceTeaPrice = 100                                                             // only one question mark
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")