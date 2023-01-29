

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

// Real working example⚠️
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// Elzero
let results = [];

let elzero = mix.map(function (element, index, arr) {
  // 
})