// 2015 / es6 
// class keyword 
// class are fake

class CreateUser{
    //this is similar to our function that we created previously
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    //and this is similar to creating key value pair in prototype of the above function (herer it is constructor)
    //so the below methods are actually the prototype object only
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }

}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(Object.getPrototypeOf(user1));

//when we create a object first constructor gets called 
