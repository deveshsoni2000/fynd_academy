// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1);


//My practice and notes

//this keyword in arrow function
const user2 = {
    firstName : "Devesh",
    age : 22,
    about : ()=>{
        console.log(this.firstName,this.age);
    }
}

user2.about.call(user2); //it doesn't matter whatever object you pass
//here we are getting undefined undefined
//why??

//because arrow function takes value of this differently in arrow functions
//it takes value of this from one level up
//i.e. in our case 'this' refers to global object

//In technical terms we can say that 'this' will always refer to the lexical scope
