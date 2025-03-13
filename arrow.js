const user = {
    username: "navjot",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);        // we use this keyword here to tell that we are reffering to the current context
        console.log(this);
    }
}

// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "navjot";
//     console.log(this);                      
//     console.log(this.username);     //undefined because this.variablename is not used inside a function
// }
// chai();

// const chai = () => {                // arrow keyword
//     let username = "navjot"                
//     console.log(this);     
// }
// chai();


// const addTwo = (num1, num2) => {         // basic arrow function
//     return num1 + num2 ;                 // we've to write return keyword in curly braces 
// }

// const addTwo = (num1, num2) =>  num1 + num2 ;       // implicit return arrow function

const addTwo = (num1, num2) => ({username: "hitesh"});

console.log(addTwo(3,4));