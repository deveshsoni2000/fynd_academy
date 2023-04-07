// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// const newObject = { ...obj2, ...obj1, key69: "value69" };
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);

//There will always be one unique key in an object
//for example:
const obj ={
  key1: "v1",
  key2: "v2",
  key1: "v32"
};
//In above case the last modified key1 value will be there when we print it
console.log(obj);

//In this case key:value pair will automatically comes up
//keys will be index and each iterable value will be its value
const objNew = {..."abcdefgh"};
console.log(objNew);