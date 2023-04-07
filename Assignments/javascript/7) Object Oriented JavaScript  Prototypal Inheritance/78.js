//When we watch previous file we can see that each time we create an object even after using function
//still it takes memory for functions also which can be saved if we declare our functions outside object 
//and then refernencing it whenever required in this way we can save lots of memory.

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about());