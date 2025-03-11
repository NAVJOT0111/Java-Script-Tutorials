const name = "Navjot";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nav_X-site');
// console.log(gameName);                                      //creates a String object rather than a primitive string

// console.log(gameName[0]);
// console.log(gameName.__proto__);                        //This shows the prototype of the String object, which contains all the methods available to strings.
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(1));                    // pass index here, whereas string=NaN=0
// console.log(gameName.charAt('a'));                     // whick character at which place

// console.log(gameName.indexOf('X'));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8,4);           // can add -ve values here also
// console.log(anotherString);

const newString1 = "   navjot    ";
console.log(newString1);
// console.log(newString1.trim());                   // cutts off whitespace characters and line terminators

const url = "https://navjot.com/navjot%20ghotra";
// console.log(url.replace('%20','-'));

// console.log(url.includes('na'));
// console.log(gameName.split('-'));

// // variable.toString() : typecasts the variable to string
// // variable.toFixed(number)  : to show this much number of digits after decimal

const otherNum = 123.8966;
console.log(otherNum.toPrecision(3));            // shows three digit of the answer

const hundreds = 1000000;
console.log(hundreds.toLocaleString());                  // 10,00,000
console.log(hundreds.toLocaleString('en-IN'));              //10,00,000 : according to the indian standards