const metaUser = new Object()           // declared an empty object
// const metaUser = {}                      // declared an empty object

metaUser.id = "123abc";
metaUser.name = "Harry";
metaUser.isLoggedin = false;

// console.log(metaUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Navjot",
            lastname: "Ghotra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
// adding two objects

// const obj3 = Object.assign(obj1,obj2);
const obj3 = Object.assign({}, obj1,obj2);          // right way that will give guaranteed result: target, source1, source2, source3
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    }
]

users[1].email ;

// console.log(metaUser);

// console.log(Object.keys(metaUser));                 // returns all the keys of the object in array form
// console.log(Object.values(metaUser)); 
// console.log(Object.entries(metaUser));          // makes every key value pair into a nested array

// console.log(metaUser.hasOwnProperty('isLoggedin'));


//-----------------------------------------------------------object destructing and json API--------------------------------------------------

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor;                                // to fetch value of ccourseInstructor

// const {courseInstructor} = course ;                         // we can use courseInstructor variable repeatedly after this 
const {courseInstructor : cI} = course ;                      // alias naming
console.log(courseInstructor);

// json looks same like an object withot a name