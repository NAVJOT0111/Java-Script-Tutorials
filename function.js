function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("J");
    console.log("O");
    console.log("T");
}
// sayMyName() ;

// function addition(num1,num2){               // num1 and num2 is called parameter
//     console.log(num1 + num2);
// }
// addition(3,4);                          // here, 3 & 4 while function calling is called arguements
// addition(3,"4");
// const result = addition(3,"a");             // storing the result into a variable
// addition(3,null);

// console.log("Result: ", result);            // undefined becase we didn't returned the function


function addition(num1,num2){               
    return num1 + num2 ;
    // lines written after return are not executed
}

// function loginMessage(username = "sam"){     // we gave username a minimum value
//     return `${username} just logged in` ;
// }

// // loginMessage("Navjot");                 // we returned the value but didn't print it or store it in any variable
// console.log(loginMessage("Navjot"));
// console.log(loginMessage(""));
// console.log(loginMessage());                // undefined

function loginMessage(username){
    if(username === undefined){                          // or if(!username)
        console.log("Please enter a username");
        return ;
    }
    return `${username} just logged in` ;
}
// console.log(loginMessage()); 


// function calculateCartPrice(...num1){
//     return num1 ;
// }
// console.log(calculateCartPrice(200,300,500,2000));           // we've to use rest operator for it

function calculateCartPrice(val1,val2,...num1){
    return num1 ;
}
console.log(calculateCartPrice(200,300,500,2000));


const user = {
    username: "nav",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({                          // passing an object directly
    username: "sam",
    price: 399
})
