// lexical scope 
const myVar = "value1";

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();

//Lexical scope means that any function have access to variables out of it.