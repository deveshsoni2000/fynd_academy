// fill method 
// value , start , end 
// Array.fill(value_to_be_filled,start_position,ending_position);
// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5); //keep in mind here that the end position is actually excluded
console.log(myArray);


//my practice
const array = ["zero","one","two","three","four","five"];
const insertArr = ["item1","item2"];
array.fill(insertArr,3,5);
console.log(array);