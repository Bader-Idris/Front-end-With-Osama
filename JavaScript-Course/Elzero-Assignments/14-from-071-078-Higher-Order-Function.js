

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// // Elzero
// let results = [];


for (let i = 0; i < mix.length; i++) {
  if(typeof mix[i] === 'number')results.push(mix[i]);
  else continue
}
console.log(results);//Did not work as for normal. let's use Reduce and map together

// let myNums = [1, 2, 3, 4, 5, 6];
// let newArray = [];
// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i]);
// }
// console.log(newArray);

let addSelf = myNums.map(function (element, index, arr) {
  console.log(`Current Element =>  ${element}`);
  console.log(`Current Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(`This => ${this}`);
  // return element + element;
}, 10);//10 is ${This}
// el => element, i => index
console.log(addSelf);// ❇️ it
// Element [mand], 2nd && 3rd [Opt]

let swappingCases = "elZERo";
let sw = swappingCases.split("").map(function (ele){
  return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
}).join("");
console.log(sw);
// as arrow function
let sw2 = swappingCases.split("").map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()).join("");
console.log(sw2);//ele can be as var [a]

// Ignoring numbers using isNaN that includes parseInt method
let ignoreNumbers = "Elz123er4o";
let ign = ignoreNumbers.split('').map(function (ele) {
  return isNaN(parseInt(ele)) ? ele : "" ;
}).join("") //using isNaN, and parseInt
console.log(ign);

// with filter 
let ing = ignoreNumbers.split("").filter(function (el){//filter instead of map
  return isNaN(parseInt(el))// ? el : ""; no need to these conditions with filter, but map needs them
}).join("");
console.log(ing);

// filter examples 
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filterFriends = friends.filter(function (el){
  return el.startsWith("A");// It's a condition
  // same as el.startsWith("A"); ? true: false;
});
console.log(filterFriends);

let numbers = [11, 20, 2, 5, 17 , 10];
let nigga_ability = numbers.filter((el) => el % 2 === 0)
console.log(nigga_ability);

// Real working example⚠️
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// Elzero
let results = [];

let elzero = mix.map(function (element, index, arr) {
  // 
})