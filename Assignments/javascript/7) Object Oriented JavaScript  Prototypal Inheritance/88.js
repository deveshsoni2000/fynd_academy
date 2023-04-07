// super 
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

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 
// object / instance 
const tommy = new Dog("tommy", 3,45);
console.log(tommy.run());


//My practice 

// class Dog extends Animal{
//     constructor(name,age,gender){
//         super(name,age);//this will invoke super class's constructor
//         this.gender = gender;
//     }
//     isNaughty(){
//         console.log("Depends on Mood");
//     }
// }
// const doge = new Dog("Doge",5,"M");
// doge.isAdult();
// doge.isNaughty();