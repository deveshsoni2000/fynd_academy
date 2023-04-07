
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// user1.about();
const myFunc = user1.about.bind(user1);
myFunc();

//My practice and notes



const user2 = {
    firstName : "Devesh",
    age : 22,
    about: function(){
        console.log(this.firstName,this.age);
    }
};

// const myFunc = user2.about;
// //this myFunc contains the address of our about method/function
// myFunc();

// //Here we are getting undefined undefined but why??
// //One important thing to understand about this keyword
// //this ki value tabh pata lagti hai jab hum function call karte hai
// //this reference to object when method call happens (in our case we are taking about this in functions keep in mind that)

// const myFunc1 = user2.about();
// console.log(myFunc1);//this will return undefined since we executed the function in above line and function returned undefined

const myFunc2 = user2.about.bind(user1);

myFunc2();
