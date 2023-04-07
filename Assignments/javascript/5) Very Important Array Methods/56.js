// important array methods 
//forEach method
 const numbers = [4,2,5,8];
//forEach method does not return anything meaning it returns undefined.
// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });
//we have to pass a function as parameter in forEach array method.
//and the passed function can be anonomous function or arrow function or function declaration
//and function expression 
// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// });

// for(let user of users){
//     console.log(user.firstName);
// }


/*
One limitation of the forEach() method in comparison with the for loop is that you cannot
use the break or continue statement to control the loop.

To terminate the loop in the forEach() method, you must throw an exception inside the
 callback function.
*/

//for each loop is also there in C++

//My practice
//const myArray = [1,2,3,4,5,6,7,8,9];

// function print(num,index){
//     console.log(`${index} : ${num}`);
// }

// const multiplyBy2 = function myFunc(num){
//     console.log(`${num} * 2 = ${num*2}`);
// }

// myArray.forEach(multiplyBy2);//This multiplyBy2 have 1 parameters
// console.log('\n');
// myArray.forEach(print);//This print function has 2 parameters
//This thing is kinda new
//since we don't know what parameters this forEach
//passes.

//here we need to keep in mind that our parameter itself will work as a variable and it
//will iterate to our array items.
// //anonomyous function 
// myArray.forEach(function(num){
//     console.log(num);
// });

// myArray.forEach((num)=>{
//     console.log(num);
// })


// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// // users.forEach((user)=>{
// //     console.log(`firstName : ${user.firstName} , age : ${user.age}`);
// // });

// for(let user of users){
//     console.log(user);
// }

