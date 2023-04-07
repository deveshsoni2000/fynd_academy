// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

// function addTwo(a=0,b){//
//     return a+b;
// }

function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4, 8);
console.log(ans);

//This default parameters is also there in C++

//When we have two function declaration with same name then it works and the last function
//declaration will get exceuted.
//Whereas in function expression the above statement doesn't works and give error that
//function expression is already defined and same with arrow function