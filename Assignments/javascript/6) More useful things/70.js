// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}


//read as if user exists and then
//        if user does not exists then give undefined 
console.log(user?.firstName);
console.log(user?.address?.houseNumber);