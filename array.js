//insertion of any new item
let numbers = [1,4,2,7];
console.log(numbers);
numbers.push(9);
console.log(numbers);
numbers.unshift(8);
console.log(numbers);
numbers.splice(2,0,'a','b');
console.log(numbers);

// //searching any item
// console.log(numbers.indexOf(10));

// //check if a number exists in an array

// // -1 is often used to indicate "not found" or "an invalid index.
// if (numbers.indexOf(10) != -1)
//     console.log("present");

// console.log(numbers.includes(7));

// // numbers.indexOf(ClipboardItem, index to start our search from )
// numbers.indexOf(4,2);

let courses = [
    {no:1, name:'Love'},
    {no:2, name:'Babbar'}
]
// console.log(courses);

// console.log(courses.indexOf({no:1, name:'Love'}));  //-1 because they both are not the same

// let course = courses.find(function(course){
//     return course.name == 'Love';
// });
// console.log(course);

let course = courses.find(course => course.name === 'kavish');
console.log(course);


let n1 = [1,2,3,4,5,6,7];
//end
n1.pop();
//beginning
n1.shift();
//middle
n1.splice(2,1);
console.log(n1);

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let X = arr1.concat(arr2);
// console.log(X);
// let Y = X.slice(2,4);
// console.log(Y);
// let Z = X.slice();           //clones the entire array
// console.log(Z);

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let X = [...arr1, ...arr2];
// console.log(X);

// let message = 'This is my first message';
// let parts = message.split(' '); 
// console.log(parts);

let num = [7,8,9,10];
let items = num.map(function(value){
    return 'student_no' + value;
});
console.log(items);
