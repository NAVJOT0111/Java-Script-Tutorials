// objects declared in two ways: literals and constructors
// singleton : when object is made from constructor, such as: "Object.create"

// object literals : singleton object nahi banega

const mySym = Symbol("key1");

const Jsuser = {
  name: "Navjot",
  "full name": "Navjot Ghotra",
  // mySym : "myKey1",                           // here we are trying to use it as a symbol but the return dt is string, therefore we declare symbols in a asquare bracket
  [mySym]: "myKey1",
  Age: 18,
  location: "Kpt",
  email: "Navjotk@google.com",
  isLoggedin: false,
  lastLogindays: ["Monday", "Saturday"],
};

// console.log(Jsuser.email);
// console.log(Jsuser["full name"]);

// to overwrite the values of object
Jsuser.location = "New York";

// Object.freeze(Jsuser); // chnages made after that will not be propagated, we cann't chnage the values of object after this

// console.log(Jsuser);

Jsuser.greeting = function () {
  console.log("Hello Js user");
};

console.log(Jsuser.greeting);                               // [Function (anonymous)]
console.log(Jsuser.greeting());                              // Hello Js user

// name refrence in function

Jsuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
};
console.log(Jsuser.greetingTwo());   