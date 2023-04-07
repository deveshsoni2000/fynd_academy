// map method 
//Our map method will return an array and it's items depends on our function that we
//write/pass in map method
//MDN description of map method
// The map() method is an iterative method. It calls a provided callbackFn function once 
//for each element in an array and constructs a new array from the results.
//it will only iterate till the initial length of array on which we use map
// const numbers = [3,4,6,1,8];

//when a function don't return anything then by default it returns 'undefined'
// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// const userNames = users.map((user)=>{
//     return user.firstName;
// });

// console.log(userNames);


//My Practice
// const numbers = [3,4,6,1,8];

// const myArr = numbers.map(function(num){
//     return num*num*num;
// })

// //we have to understand that just like in forEach method
// //in map method also when we right one parameter then it iterates our
// //array items but when we write two parameters then the second one will
// //contain the index of that array element.
// const myArr1 = numbers.map((num,fuck)=>{
//     return `${fuck}:${num*num}`;
// })
////To be able to use map method we make sure that we return something
////from the function that we pass/write in map method parameter
////because the default return type is undefined and it can give 
////array of undefined items. 
// console.log(myArr1);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
];


/*
function firstName(fN){
    return fN.firstName;
}
const myArr2 = users.map(firstName(users));
we are writing this above code because we feel that fN is actually
the array of objects (i.e. 'users' in our case)
We need to keep in mind that our map method by default takes care of
function parameter as said in above comments.
*/

function firstName(user){
    return user.firstName;
}

const myArr2 = users.map(firstName);
console.log(myArr2);

//Difference between map() and forEach()
//1) The map() method is similar to the forEach() method, but it returns a new array whereas
//forEach() method returns undefined.
// 2)The second difference between these array methods is the fact that map() is chainable. 
// This means that you can attach reduce(), sort(), filter() and so on after performing a map() 
// method on an array.
// That's something you can't do with forEach() because, as you might guess, it returns undefined.

