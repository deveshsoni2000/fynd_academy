// // objects reference type  
// // arrays are good but not sufficient 
// // for real world data 
// // objects store key value pairs 
// // objects don't have index

// // how to create objects 

// // const person = {name:"Harshit",age:22};
// const person = {
//     name: "harshit",
//     age: 22,
//     hobbies: ["guitar", "sleeping", "listening music"]
// }
// console.log(person);

// // how to access data from objects 
// // console.log(person["name"]);
// // console.log(person["age"]);
// // console.log(person.hobbies);

// // how to add key value pair to objects
// person["person"] = "male";
// console.log(person);

const p ={
    name: "Devesh Soni",
    age : "22",
    hobbies: ["sleep","eat","code"]
}

console.log(p);

console.log(p.name);
console.log(p["name"]);
console.log(p.hobbies);
console.log(p.hobbies[2]);
console.log(p["hobbies"]);

p.gender = "male";
p["Disability"] = "No";
console.log(p.gender);
console.log(p.Disability);


//In C++, to create objects first we need to create class then only we can even think of creating objects.
//We cannot create new object properties in C++ like we did it here
//So please don't get confused.