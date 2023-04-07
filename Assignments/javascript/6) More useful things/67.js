// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);

//My practice
// const arr = [1,1,1,2,2,2,3,3,3,3,34,4,4,4,4,5656,];
// // const mySet = new Set(arr);
// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(2);
// mySet.add(2);
// mySet.add(2);
// mySet.add(4);
// mySet.add(5);
// mySet.add(3);
// mySet.add(3);
// console.log(mySet);
// mySet.has(15);


//Difference between Sets in JS vs Sets in C++
//The timecomplexity of method is not clearly specified or defined in ECMA documentation
//So we can't say anything about the time complexity of these methods in JS.

//In JS we have only Set object that is also came in new version of JS whereas in C++
//we have multiset, unorderded set and set containers as defined in C++ STL

//In both languages we cannot access set elements using "[]" operator i.e. no index based access

//In C++ set container the elements are stored in particular order whereas no order is
//guaranteed in JS
