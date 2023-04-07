// every method
// const numbers = [2,4,6,9,10];


// const ans = numbers.every((number)=>number%2===0);
//callback function boolean value
// and our every method will return true only when for all elements in our array we get 
//true boolean value from callback function
//This method will return false at the first instance when the callback function return false
// and will stop checking for further elements
// console.log(ans);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);