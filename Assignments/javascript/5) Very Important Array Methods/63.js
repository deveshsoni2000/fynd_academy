// some method 

const numbers = [3,5,11,9];

// kya ek bhi number esa hai jo even hai 
// true 
//if the callback method returns true for atleast one item in array then the some method
//will return true else false.

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

const ans = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);