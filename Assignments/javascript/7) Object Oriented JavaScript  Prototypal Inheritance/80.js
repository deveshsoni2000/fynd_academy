const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]  //this are same thing


//but this prototype property is different thing
// prototype    

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__);

//My practice and notes


// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// };

// // const obj2 = {
// //     key3 : "value3"
// // };

// // console.log(obj2.key3); //this will print value3

// // //what if I want something like this
// // console.log(obj2.key1); //this is giving undefined
// // //but what in case we want that if the key does not there in obj2 then check obj2

// //other ways to create objects
// // const obj2 = {};
// // obj2.key3 = "value3";

// // console.log(obj2.key1);//same result as above

// //For such cases we create obj2 something differently
// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// console.log(obj2.key1);

// //Now this way we are getting our desired result

// //now lets dig down this way a little
// console.log(obj2);
// //When we expand the result we get something like this [[prototype]] or __proto__
// // this is how the objects are actually referenced and we are getting our desired result

// console.log(obj2.__proto__)
// //or
// // console.log(obj2.[[Prototype]]); //this way its giving error

// and the prototype property in JS is different from what we just saw in above lines