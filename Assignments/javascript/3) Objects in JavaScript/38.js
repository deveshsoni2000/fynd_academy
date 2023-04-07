// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// for in loop 
 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// Object.keys
console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

//My practice
//In this below for in loop we have to keep in mind that when we used same loop for array we were getting index
//But for objects it is actually getting the key value of that index starting from 0.
for(let key in person){
    console.log(key);
}

for(let key in person){
    console.log(person[key]);
}

for(let key in person){
    console.log(`${key}:${person[key]}`); //remember we have to use backticks for string templates
}

for(let key in person){
    console.log(key+" : "+person[key]);
}

console.log(Object.keys(person)); //This gives an array object containing keys of objects
console.log(typeof (Object.keys(person)));
//To check whether the above code outputs an array or not we can do like this as studied previously
console.log(Array.isArray(Object.keys(person)));//This gives true output therefore the object is actually an array.

//Object literals are not iterable in JS that means we cannot use for..of loop on them