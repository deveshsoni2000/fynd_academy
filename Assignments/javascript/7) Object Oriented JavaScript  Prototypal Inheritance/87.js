class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    
} 

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());


//My Practice and notes

// class Animal{
//     constructor(name,legs,gender,age){
//         this.name = name;
//         this.legs =legs;
//         this.gender = gender;
//         this.age = age;
//     }

//     isCute(){
//         console.log("Yes");
//     }
//     isAdult(){
//         if(this.age>=10){
//             console.log("Yes, adult");
//         }
//         else{
//             console.log("No, not adult")
//         }
//     }
// }

// const cat = new Animal("Tom",4,"M",12);
// cat.isCute();
// cat.isAdult();


// //we use keyword extends for inheritence
// class Dog extends Animal{
    
// }

// const doge = new Dog("Doge",5);//since there is no constructor in Dog class so it will use constructor from Animal class
// //and same thing for functions.
// doge.isCute();


