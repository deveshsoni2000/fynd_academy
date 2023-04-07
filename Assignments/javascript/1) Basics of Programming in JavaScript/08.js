// typeof operator 

// data types (primitive data types) according to ECMA (latest)
// Boolean. true and false.
// null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
// undefined. A top-level property whose value is not defined.
// Number. An integer or floating point number. For example: 42 or 3.14159.
// BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
// String. A sequence of characters that represent a text value. For example: "Howdy".
// Symbol. A data type whose instances are unique and immutable.

// let age = 22; 
// let firstName = "harshit";

// console.log(typeof age);
// console.log(typeof firstName);

// // 22 -> "22"
// // convert number to string. 
// age = age + "";
// console.log(typeof(age)); "22"
//these parenthesis after typeof is not compulsory


// // convert string to number. 

// let myStr = +"34";
// console.log(typeof myStr);

let age = "18";
age = Number(age);
console.log(typeof age);
age = String(age);
console.log(typeof(age));

// JavaScript is a dynamically typed language. 
// This means you don't have to specify the data type of a variable when you declare it. 
// It also means that data types are automatically converted as-needed during script execution.