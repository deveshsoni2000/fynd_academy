// splice method 
// start , delete , insert 
//Array.splice(start_position,Number_of_items_to_delete,elements_you_want_to_insert_comma_seperated);
//Don't confuse splice with slice.

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray);

//My practice
const array = ["zero","one","two","three","four","five"];

//array.splice(3,2);//deleted two items in array

//splice actually returns the deleted items also in form of array.
// const deletedItems = array.splice(3,2);
// console.log(deletedItems);
//Below line only inserts an item in array.
// const insertedItem = array.splice(1,0,"insertedItem");
// console.log(insertedItem); //when we just insert something then
//it will return an empty array.
//we can insert and delete in same line also
// const returnArray = array.splice(3,1,"insertedItem1");
// const returnArray = array.splice(3,1,"insertedItem1","insertedItem2","insertedItem3");

const insertArray = ["item1","item2","item3","item4"];
const returnArray = array.splice(3,1,insertArray);
console.log(returnArray); //will return only deletedItems in array
console.log(array);