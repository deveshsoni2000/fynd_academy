// callback functions 

//such functions are called higher order functions
function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){//here the callback name is actually a convention but we can give any name and it will work
    console.log("hello there I am a func and I can..")
    callback("harshit");
}


myFunc(myFunc2);

//This can also be done in C++ using pointers. What we do is we create a pointer variable
//which points to that function and will pass this pointer (our function contains a 
//argument which is also a pointer variable).