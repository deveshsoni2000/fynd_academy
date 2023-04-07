function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalalla";
// };
// console.log(hello.prototype.sing());


//My practice and notes

//In JS function is an function and also an object

//Every function in JS have a prototype that is an object which contains an constructor that is same as function
//we can use this prototype object 
//only functions provide prototype that means object don't have prototype

//Something which I didn't understand here, learn it later
function myFunk(){
    console.log("Hi, I am myFunc");
}

// console.log(myFunk.prototype);

myFunk.add = "Hi, I add two nums";
//This above lines adds a key value pair in constructor of 
//myFunk

//Will learn it later

// console.log(myFunk);

// myFunk.prototype.about = function(){
//     console.log("Hi, I am about function");
// }

console.log(myFunk.prototype);

//to add key value pair in function prototype object
// myFunk.prototype.key = "value";