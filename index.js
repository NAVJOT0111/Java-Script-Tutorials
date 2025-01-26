// // This line is used to print on the console window 
// console.log('Sat sri akal ji')

// let Name = 'babbar';   // naming a variable
// console.log(Name);

// const number = 12;     // setting a permanent value to a variable

// console.log(3 >= 3);
// console.log( 5 === 3);  //checking the equality

// let num = 1;
// let str = '1';
// console.log(num === str);
// console.log(num == str);
// console.log(true || false);
// console.log(false || 'babbar');
// console.log( false || 1);

// // for loop 
// for(let i = 0; i<5; i = i+1){
//     console.log("Babbar",i);
// }

// // while loop 
// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// // do-while loop 
// let y = 1;
// do{
//     console.log(y);
//     y++;
// } while(y<10);


let rectangle = {
    length : 2,
    breadth : 4
};
//for-in loop: generally applied on objects
for (let key in rectangle){
    // values = rectangle[key]
    console.log(key,rectangle[key]);
}
// for-on loop: generally applied on iterables
for(let key of Object.keys(rectangle)){       //rectangle is not iterable therefore we use Object.keys(rectangle)
    console.log(key);
}


// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

// let a = {value: 10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// let a =10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

if ('color' in rectangle){
    console.log('Present');
}
else{
    console.log("Absent");
}