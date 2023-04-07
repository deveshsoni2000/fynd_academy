// same method in subclass
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
    constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
    }

    eat(){
        return `Modified Eat : ${this.name} is eating`
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 
// object / instance 
// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());
// console.log(tommy.eat());

const animal1 = new Animal('sheru', 2);
console.log(animal1.eat());

//my practice

class Animal{
    constructor(name,legs,gender,age){
        this.name = name;
        this.legs =legs;
        this.gender = gender;
        this.age = age;
    }

    isCute(){
        console.log("Yes");
    }
    isAdult(){
        if(this.age>=10){
            console.log("Yes, adult");
        }
        else{
            console.log("No, not adult")
        }
    }
}

const cat = new Animal("Tom",4,"M",12);
cat.isCute();
cat.isAdult();


// //we use keyword extends for inheritence
// class Dog extends Animal{
    
// }

// const doge = new Dog("Doge",5);//since there is no constructor in Dog class so it will use constructor from Animal class
// //and same thing for functions.
// doge.isCute();


// class Dog extends Animal{
//     constructor(name,age,gender){
//         super(name,age);//this will invoke super class's constructor
//         this.gender = gender;
//     }
//     //first it will look here otherwise it will look in super class or parent class
//     isCute(){
//         console.log("Yeah, Doge is very cute.");
//     }
//     isNaughty(){
//         console.log("Depends on Mood");
//     }
// }
// const doge = new Dog("Doge",5,"M");
// doge.isAdult();
// doge.isNaughty();
// doge.isCute();