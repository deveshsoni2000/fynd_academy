// filter method 
//The function that we pass or write in filter method always returns a boolean value
const numbers = [1,3,2,6,4,8];



const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
//obviously our filter method will return an array.
console.log(evenNumbers);

//My practice
// const numbers = [1,2,3,4,5,6,7,8,9];

// function isEven(num){
//     return num%2===0;
// }

// const myArr = numbers.filter(isEven);
// console.log(myArr);