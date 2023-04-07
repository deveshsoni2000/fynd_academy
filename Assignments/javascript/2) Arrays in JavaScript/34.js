// for in loop in array
// Not in C++
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];
//This index variable in below for in loop will contain the index of array
for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);