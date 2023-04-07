// undefined 

// let firstName;
// console.log(typeof firstName);
// firstName = "Harshit";
// console.log(typeof firstName, firstName);

// null
// let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);// bug , error 
//Unfortunately, in JavaScript, the data type of null is an object. 
//You can consider it a bug in JavaScript that typeof null is an object.


// BigInt
//Two ways to write BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);//In C++ we use INT_MAX for this if you remember
// console.log(myNumber+ sameMyNumber);

// let num1 = 13n;
// let num2 = 14;
// console.log(num1+num2); //This is actually invalid
//We cannot mix BigInt and other types we have to use explicit conversion to make it work

//In C++ we too have BigIntegers in Boost Library but its not the part of Standard Library.