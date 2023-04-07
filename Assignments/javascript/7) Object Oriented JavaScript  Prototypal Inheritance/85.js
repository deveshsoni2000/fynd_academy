// let numbers = [1,2,3];

// // console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
// console.log(numbers);

// function hello(){
//     console.log("hello");
// }

//My practice and notes detailed

let numbers = [1,2,3];
console.log(numbers);

//Previously we have seen that array have various methods 
//like splice, slice, filler, reduce, some, every,etc,.

//Now all these methods were there in prototype only

//Now comes the question that we have learned that prototype are there only in function
//then how comes it for an array object

//Internally JS creates array object like this
// const newArr = new Array(1,2,3);
//Now this may look familier to us 
//we know what this 'new' keyword do
//lets revise about it here again
//1.) It creates new empty object
//2.) return this reference to newly created object
//3.) Do what Object.create(thisArg) do that is it adds __proto__ or [[Prototype]] reference to thisArg
// and this Array() function has all the methods inside its prototype objects

//when we see this
// console.log(Array.prototype);
//you can find all the properties or methods inside this prototype

//now generally how we create a new array
// let numbers = [1,2,3,4,5];
//since this is somewhat easy to write and all the things which are explained above are done internally to it.

//we can see the prototype of our array like this
// console.log(Object.getPrototypeOf(numbers));
//this will print prototype

//When we look the output of above line of code
//we can see that the result is an array but we have learned that prototype is an object
//then how it came an array??

//In JS array's are also objects
function hello(){
    console.log("hello");
}
console.log(hello.prototype);


//we can change the prototype object to array like this
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push(1);
console.log(hello.prototype);

//But we don't have the need for this now so leaving it.
