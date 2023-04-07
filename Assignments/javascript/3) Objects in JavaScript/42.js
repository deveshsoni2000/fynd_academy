// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}

// for(let i=0;i<users.length;i++){
//   console.log(users[i].firstName);
// }

// for(let i of users){
//   console.log(i.firstName)
// }

for(let i in users){
    console.log(users[i]);
  }

  //All for loops work fine just learn how different for loops work
  