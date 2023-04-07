// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

// we cannot simply write thousands and millions of objects when we want objects in large quantities
// so we can create a function which creates objects for us in easy way.

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    }
    return user;
}



const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);