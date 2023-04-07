// hoisting 

// hello();

// function hello(){
//     console.log("hello world");
// }
// console.log(hello); //here we get undefined
// const hello = "hello world";
// console.log(hello);

//This won't work in function expression

//But this thing work in arrow function (Not in Harshit Vashishth video at this point of time)

console.log(ans);
const ans = (num)=>{
    if(num%2===0) return true;
    return false;
}

/*JavaScript Hoisting refers to the process whereby the interpreter appears to move the 
declaration of functions, variables or classes to the top of their scope, prior to 
execution of the code. */