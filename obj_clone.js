// //clone1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};
// for (let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);


// //clone2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };
// let src2 = {value:25};

// let dest = Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest);


//clone3
let src = {
    a:10,
    b:20,
    c:30
};
let dest = {...src};
console.log(src);

src.a++;
console.log(dest);