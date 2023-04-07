// function returning function 

//such functions are called higher order functions
function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

const ans = myFunc();
console.log(ans());