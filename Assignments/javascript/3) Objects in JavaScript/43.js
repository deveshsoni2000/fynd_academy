// nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);


//My practice
const[user1,...user2] = users;
console.log(user2);

const[{firstName},,user3] = users;
console.log(firstName);
console.log(user3);

const [{firstName:var1,gender:g1},,{gender:g3}] = users;
console.log(var1);
console.log(g1);
console.log(g3);