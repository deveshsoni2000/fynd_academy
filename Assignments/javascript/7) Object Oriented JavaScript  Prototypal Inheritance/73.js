function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

// apply
// about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();


//My practice and notes


// function hello(){
//     console.log("hello world");
// }

// hello.call();
//hello.call(this);//This will give same result as above
//because 'this' refers to nothing in that because
//but if we use 'this' outside let's say with console log statement
//then at that time it refer to global object.


//we can call a function with call() method also

/*
Normally, when calling a function, the value of this inside the function is the object that the function was accessed on. 
With call(), you can assign an arbitrary value as this when calling an existing function, without first attaching the function to the object as a property. 
This allows you to use methods of one object as generic utility functions.


*/

//

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about : function(){
//             console.log(this.firstName,this.age);
        
//     }
// };
// const user2 = {
//     firstName : "Devesh",
//     age : 22
// };

// user1.about.call(); //this will give us undefined undefined as output
// user1.about.call(user2);//this will pass user2 object
// // and we can bind the function of user1 to use in user2 

//we can also define function outside and object and can bind to whichever object we want with using call method

// function about(){
//     console.log(this.firstName,this.age);
// }

// const user1 = {
//     firstName : "Harshit",
//     age : 21
// }

// const user2 = {
//     firstName : "Devesh",
//     age : 22
// }

// about.call(user2);

//This is how we bind our about function to object literals

//lets say now we have parameters in function also

// function about(hobby,favMusic){
//     console.log(this.firstName,this.age,hobby,favMusic);
// }

// const user1 = {
//     firstName : "Harshit",
//     age : 21
// }

// const user2 = {
//     firstName : "Devesh",
//     age : 22
// }

// about.call(user2,"fuck","Somebody's Me");//that's how we pass additional parameters

// about.call(user2,"fuck","Somebody's Me","sdfsf","sdfdfd");//even if we pass more parameters than defined it won't give error it will just neglect extra parameters provided as input

// //Now lets see apply
// //it's same as call method only difference is
// //we pass other parameters as array, other than object

// about.apply(user1,["Music","Top of you"]);

// //bind method
// // its also same as call method
// //but it returns an function

// const func = about.bind(user1,"music","I Like It");
// func();
