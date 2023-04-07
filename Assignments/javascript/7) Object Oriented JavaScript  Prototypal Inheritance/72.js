// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();

//My practice and notes


// console.log(this);
//When we print 'this' object then it will print a window object in JS
//which has various functions inside it.

// console.log(window);//here we print window object directly


// //So is the object reference by this keyword same as window object
// console.log(this === window); //result is true which means yes they are same in here

// function myFunc(){
//     console.log(this);
// }
// // myFunc();

// //Here our function also prints the window object
// //When we see the functions list in window object we can see that our function 'myFunc' is also there
// //therefore
// window.myFunc(); //here it will also print same window object.

//So this is how things work in JS but sometimes the behaviour we see above creates problem for various
//So we use strict mode

// "use strict" //we can use strict here also  
// function myFunc(){
//     "use strict" //can use here also same effect
//     console.log(this);
// }

// //So using strict mode we get undefined as our output