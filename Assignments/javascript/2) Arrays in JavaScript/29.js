// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);

//we are concatening array1 and some other elements to an empty array
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");
//While comparing we need to keep in mind from memory point of view
//Since these two arrays have different memory locations therefore the result will be false
//but in case of shallow copy of array since they have same pointer or memory location therefore on comparing them
//the result will be true.
//This equality operators don't check for array elements equality here.
console.log(array1===array2);
console.log(array1)
console.log(array2)

//This is actually different from C++ right since here in JS array is an object and we can print it also wereas in C++ we can't directly print objects on screen like done here in JS.