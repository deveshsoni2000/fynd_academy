// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
//Lets say we want to write the arrow function for the above myFunction function

// const myFunction = (power)=>{
//     return function(number){
//         return number** power;
//     }
// }

//now more refined arrow function version of above code snippet

// const myFunction = (power)=>{
//     return (number)=> {
//         return number** power;
//     }
// }
//now more refined arrow function version of above code snippet

// const myFunction = (power)=>{
//     return (number)=> number** power;
// }

//now more refined arrow function version of above code snippet

// const myFunction = (power)=> (number)=> number** power;

//now more refined arrow function version of above code snippet

const myFunction = power=> number => number** power;


const square = myFunction(2);
const ans = square(3);
console.log(ans);


const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2);