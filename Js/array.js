// // same as lists in pythin
// /// array copy operations create shallow copy

// const myArr = ["Thor", "Iron man", "spider man"]
// const arr2 = new Array(1,2,3,4,"N")                         // new keyword makes it an object

// // console.log(myArr[0]);

// myArr.push(6);                          // adding element
// // console.log(myArr);

// myArr.pop();
// myArr.unshift(9);               // adding element at the start 
// myArr.shift();                  // removing the first element
// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(9));

// const newArr = myArr.join();
// // console.log(newArr);
// // console.log(typeof newArr);

// // slice, splice
// console.log("A ", myArr);
// const myn1 = myArr.splice(1,3);
// // const myn1 = myArr.slice(1,3);


// console.log(myn1);
// console.log("B ", myArr);


// ----------------------------------------------------------array2-------------------------------------------------------------------
const marvel = ["thor", "ironman","spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc);                     // will add array as a single element
console.log(marvel);
marvel.push(...dc);                     // will combine elements of both arrays into one array

marvel.concat(dc);                      //The .concat() method creates a new array by concatenating marvel with dc but does not modify the original marvel array.
console.log(marvel);
