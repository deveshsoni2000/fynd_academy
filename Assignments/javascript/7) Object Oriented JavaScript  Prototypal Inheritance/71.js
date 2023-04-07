// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();


//My practice and notes

//comment out everything and uncomment one section to learn from that section
//by running it's code.

//Section -1
// const person1 = {
//     "firstName" : "Devesh",
//     "age" : 22,
//     "about" : function(){
//         console.log("Hi there, I am Devesh");
//         return 45;
//     }
// };

// console.log(person1);//This is print whole object including our function

// console.log(person1.about);//This will print the whole value of key "about" i.e. complete function

// person1.about(); //This will execute the function
// console.log(person1.about());//will work same as above line


//Section -2
// const person1 = {
//     "firstName" : "Devesh",
//     "age" : 22,
//     "about" : function(){
//         console.log(`first name is ${firstName} and age is ${age}`);
//     }
// };

// person1.about(); //This will actually give error because we can't directly access the keys of object inside function in same object

//Section -3
// const person1 = {
//     "firstName" : "Devesh",
//     "age" : 22,
//     "about" : function(){
//         console.log(`first name is ${this.firstName} and age is ${this.age}`);
//     }
// };
// //we can use this keyword to get desired result.
// //this keyword will actually reference to the currently calling object
// //this is actually an object.

// const person2 = {
//     "firstName" : "Yash",
//     "age" : 21,
//     "about" : function(){
//         console.log(`first name is ${this.firstName} and age is ${this.age}`);
//     }
// };
// const person3 = {
//     "firstName" : "Hardik",
//     "age" : 22,
//     "about" : function(){
//         console.log(`first name is ${this.firstName} and age is ${this.age}`);
//     }
// };

// person1.about();
// person2.about();
// person3.about();

// // we can also write the function outside the side then provide it as key value in object

//Section -4

// const person1 = {
//     "firstName" : "Devesh",
//     "age" : 22,
//     "about" : function(){
//         console.log(this);
//         // console.log(this.about);
//     }
// };

// person1.about();
// //Here, we wrote 'this' inside console.log we are getting the whole object in console


//Here we also learned how we use 'this' keyword inside a function
//that is one aspect of 'this' keyword

//MDN this description
//The value of this depends on in which context it appears: function, class, or global.