// // array destructuring 
// const myArray = ["value1", "value2", "value3","value4"];
// // let myvar1 = myArray[0];
// // let myvar2 = myArray[1];
// // console.log("value of myvar1", myvar1);
// // console.log("value of myvar2", myvar2);
// //The below line would work same as above line at 3 and 4
// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);

const arr1 = ["one","two","three","four"];
const [myVar1,myVar2,...newArr] = arr1; //This is destructuring of array
console.log(myVar1);
console.log(myVar2);
console.log(newArr);
console.log(arr1);
//There we should keep in mind that our original array will not change
//don't confuse it with destruct in C++ there is no relation between these two.


