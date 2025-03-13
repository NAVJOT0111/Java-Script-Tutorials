
const balance = 1000;
// if (balance > 500) console.log("test") ;

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard){
    // console.log("Allow to buy course");
}

if (LoggedInFromEmail || LoggedInFromGoogle){
    // console.log("User logged in");
}

const month = 3
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
}