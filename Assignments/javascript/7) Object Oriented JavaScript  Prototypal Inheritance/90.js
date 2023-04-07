// getter and setters 

//First check this section then above one
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
    
//     setName(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
    
// }


// const person1 = new Person("harshit", "sharma", 5);

// //we can set name here in two ways
// // person1.setName("harshit","vashishth");

// // person1.firstName = "harshit";
// // person1.lastName = "vashishth";
// console.log(person1.fullName);

// //but what if we want it to change it such that we provide complete name in one go 
// //and somehow it itself get in firstName and lastName.

//Second section
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());//methods ko call karna padhta hai aur properties ko nahi
// console.log(person1.fullName);//but when we use getters we can write it like property and here internal call happens

// person1.fullName = "mohit vashistha";
// console.log(person1);




