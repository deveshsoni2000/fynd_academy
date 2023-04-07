// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 
//we can store elements of any data type in same array
//array is a reference type and all reference types are objects
//therefore array is an object in JS

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
//Unlike C++, in JS we can print the array simply using console.log(array_name);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
console.log(typeof fruits);
console.log(typeof obj);
//Array.isArray(object_name); is used to check whether the object is array or not.
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));


// array indexing 