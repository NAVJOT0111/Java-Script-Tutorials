/*
memory: Stack(Primitive): we get copy of the variable declared
Heap (non primitive): we get reference of the original value
*/

let Youtube = "Navjotdotcom";
let anothername = Youtube;
anothername = "NavisCool";
console.log(Youtube);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
};
let userTwo = userOne;