// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

//declarative function, function expression and arrow function all are functions
//and we cannot create two function (can be of any type) with same name

const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}

singHappyBirthday();
//when we have single parameter in arrow function we can remove braces ()

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(2,3,4);
console.log(ans);

// const isEven = function(number){
//     return number % 2 === 0;
// }
//when we have single return statement then we can write arrow function like this below
const isEven = number => number % 2 === 0;


console.log(isEven(4));

const firstChar = anyString => anyString[0];

console.log(firstChar("harshit"));


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}