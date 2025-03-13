// to separate from the global svope and to execute it immedialty
// global scopes de pollution tu problem hundi a kai var, osde pollution nu hatan li iife da use hunda a 

// Immediately Involked Funcion expession (IIEF)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()


// (function chai(){                               // it is somewhat like (definition)(execution)
//     console.log(`DB CONNECTED`);             // named iife
// }) ();                                  // semicolon has to be added at last to show that this function ends here and next function can start otherwise error


// it can be rewritten as -
( (name) => {                                   // unnamed iife
    console.log(`DB CONNECTED ${name}`);
}) ('navjot'); 