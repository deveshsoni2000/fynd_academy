// function execution context 

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("harshit", "sharma");
console.log(personName);

//we can also use arguments[1] to print the value at 1st index of argument 
//we can also use arguments.length to print the length of arguments