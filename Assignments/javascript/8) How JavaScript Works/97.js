// lexical environment, scope chain

const lastName = "Vashistha";

const printName = function(){
    const firstName = "harshit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()
    
}
printName();

//pls check how_js_works.doc file to understand in details with notes picture. 