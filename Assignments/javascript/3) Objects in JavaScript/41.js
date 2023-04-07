// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);


const{bandName:var1,year:var2,...arr1} = band;
console.log(var1+","+var2);
console.log(arr1);
