// 1. Despot some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();                           //getting input from the user

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
};

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};





const deposit = () => {                                              // creating a function called deposit
    while (true){                                                                //here while statement is a loop
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again.");
        }
        else{
            return numberDepositAmount;
        }
    }
};

const numberofLines = () => {
    while (true){                                                                //here while statement is a loop
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberofLines = parseFloat(lines);

        if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines <= 3){
            console.log("Invalid number of Lines, try again.");
        }
        else{
            return numberofLines;
        }
    }
};

const getBet = (balance,lines) => {
    while (true){                                                                //here while statement is a loop
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet <= 3){
            console.log("Invalid bet, try again.");
        }
        else{
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i =0 ; i< count; i++){
            symbols.push(symbol);
        }
    }
    
    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++){
        for (let j = 0; j < ROWS; j++){
            
        }
    }
};
spin();

let balance = deposit();
const getNumberofLines = numberofLines();
const bet = getBet(balance, numberofLines);

