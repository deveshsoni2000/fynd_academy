// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
//just like we have cin in C++ similarly we have prompt in JS but it shows a prompt to input values to it.
//And prompt takes values as String only.
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}