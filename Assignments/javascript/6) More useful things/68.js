// Maps
//Its different from map method that we have seen previously. It was a method whereas Maps
//is an object here.
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]); //even if we write a number in key place it will automatically get converted to string
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair 
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }

const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);


//My practice and notes
// const newMap = new Map();
// // console.log(newMap);
// newMap.set(123,"fuck");
// newMap.set(456,"Me");
// newMap.set([..."789"],"harder");
// newMap.set({"1":"girl"},{2:"devesh"});
// // console.log(newMap);
// // console.log(newMap.get("123"));

// // console.log(newMap.get({1:"girl"})); //Here we have problem

// // for(let key of newMap.keys()){
// //     console.log(key, typeof(key));
// // }

// // for(let key of newMap){
// //     console.log(Array.isArray(key));
// //     console.log(key);
// // }
// // for(let [key,value] of newMap){
// //     console.log(key,value);
// //}


// const person1 = {
//     id: 1,
//     firstName: "harshit"
// }
// const person2 = {
//     id: 2,
//     firstName: "harshta"
// }

// const extraInfo = new Map();
// // extraInfo.set(person1,{age:21,gender:"male"});
// extraInfo.set(person1,{age:21,gender:"male"},{virgin:"No",depressed:"Yes"});
// //Here the third argument is getting neglected like as there is no 3rd parameter
// //since set method of Map takes two parameter (key,value)

// extraInfo.set(person2, {age: 9, gender: "female"});//these gets added as another key value pair in Map object


// console.log(extraInfo);
// console.log(person1);


// //Here we need to understand that when we are adding new object
// //then it gets added not in the person1 object literal but in Map
// //extraInfo and also the object literal get adding in Map as key
// //value pair i.e. person1 as key and another object as value.


// console.log(extraInfo.get(person1).age); //here we are able to access using person1 in 
//.get because when we use .set method we are actually passing the refernce to object and
// not the actuall object therefore when using .get we are able to get desired result


//Imp note by myself 
//different section from here so please comment out other code if any

// const newMap = new Map();

// const person3 = {
//     firstName:"Hardik",
//     lastName:"Mahajan"
// }

// newMap.set({firstName:"Devesh",lastName:"Soni"},{age:22,gender:"M"});
// newMap.set({firstName:"Yash",lastName:"Dhakad"},{age:23,gender:"M"});
// newMap.set(person3,{age:22,gender:"M"});
// newMap.set({firstName:"Anushka",lastName:"Dixit"},{age:22,gender:"F"});

// // console.log(newMap);
// const person2 ={
//     firstName:"Yash",lastName:"Dhakad"
// }

// console.log(newMap.get(person2));//Why undefined...
// //Because objects are reference type and in map "newMap"
// //we have object thereonly but when we using this get method
// //we are actually passing the reference and not actuall object 
// //value therefore we are getting undefined.

// //But now the question is how to get the value when we 
// //write actuall object in key argument when using .set()
// //on our map object.


// // for(let key of newMap.keys()){
// //     console.log(key);
// // }

// for(let key of newMap.keys()){
//     if(key.firstName === "Yash"){
//         console.log(key);
//     }
// }