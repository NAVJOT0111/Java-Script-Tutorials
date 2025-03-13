var c = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);         //  a is not defined
// console.log(b);          //  b is not defined
// console.log(c);

function one(){
    const username = "hitshesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);       // cann't be accessed outside the curly brace
    two();
}
// one();

if(true){
    const username = "navjot" ;
    if(username === "hitesh"){
        const website = " youtube" ;
        console.log(username + website);        
    }
    // console.log(website);                       //// cann't be accessed outside the curly brace, scope
}

// console.log(username);

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));                     // this will not give any error and execute properly
function addone(num){
    return num + 1 ;
}


console.log(addTwo(5));                         // this will give an error
const addTwo = function(num){
    return num + 2;
}


