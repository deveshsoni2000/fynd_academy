// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "harshit";

// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

//let newString = firstName.slice(1); // hars
//console.log(newString);

//trim()
//how to trim myFirstName without spaces.
let myFirstName = "     Devesh   ";
//first lets check length
console.log(myFirstName.length);//OUTPUT : 14
myFirstName.trim();
console.log(myFirstName.length);//OUTPUT : 14
//Since strings are immutable (unchanging) in JS therefore this gives same output.
//so myFirstName.trim() itself gives new string.

//So we can do it in two ways
//1)change the value of myFirstName itself
//2)Declare a new variable and assign the new string value
let newString = myFirstName.trim();
console.log(newString); //OUTPUT: Devesh

myFirstName = myFirstName.trim();
console.log(myFirstName);//OUTPUT: Devesh
console.log(myFirstName.length);//OUTPUT: 6


//toUpperCase()
//This changes all alphabets to uppercase.
let string = "devesh";
string.toUpperCase();
console.log(string);//OUTPUT: devesh 
//The reason is same since strings are immutable (unchanging) in JS
console.log(string.toUpperCase());

//slice()
//This will slice the string or we can select or cut a part of string
let string1 = "HelloWorld";
console.log(string1.slice(0,4)); //OUTPUT: Hell
//slice(start,end) here the end is not included.
console.log(string1.slice(2));//OUTPUT: lloWorld.
//If we don't provide end index then it will automatically will be till end of string.