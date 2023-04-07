// array push pop 

// array shift unshift 

//array's are mutable (changable)
let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);
// push 
//In C++ we have push_back to do the same but for STL containers
//push adds new item at the end of the array
// fruits.push("banana");
// console.log(fruits);
// pop 
//In C++ we have pop_back to do the same but for STL containers
//pop also removes the item at last index and also return it.
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);

//We don't have shift and unshift in C++
//but to perform this operation in C++ we can use emplace or insert methods of STL containers
// unshift 
//unshift adds the element at the starting of the array
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift 
//shift removes the starting element/item in an array and also returns it
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);