

// Real working example⚠️
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// Elzero
let elzero = mix.map((element) => {
  return isNaN(parseInt(element)) ? element : "";
}).reduce(function (acc, current){
  return `${acc}${current}`;
})
console.log(elzero);
// 1st Assignment✅

let myString = "EElllzzzzzzzeroo";
// Elzero
let unfossed = myString.split('').filter((element,ind) => {
  if(element !== ind) return element;
}).reduce(function (acc, current){
    return `${acc}${current}`;
})
console.log(unfossed);
// 2nd Assignment


// practices on map, reduce, and filter 

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

let mixo = "A13BS2ZX";
let mixedContent = mixo.split("").filter(function (el){
  return !isNaN(parseInt(el));
}).map(function (el){
  return el * el;
}).join("");
console.log(mixedContent);



let removeChars = ["E","@","@","L","Z","@","@","E","R","@","O"];
let finalString = removeChars.filter(function(ele) {
  return !ele.startsWith("@");
}).reduce(function (acc, current){
  return `${acc}${current}`;
})
console.log(finalString);

let removenums = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let finalString22 = removenums.filter(function(ele) {
  return isNaN(ele);
}).reduce(function (acc, current){
  return `${acc}${current}`;
})
console.log(finalString22);

// String(Math.abs(array))🔴this is used to convert negative numbers to positive numbers and vice-versa
// needs to be overlooked for now



let myString = "EElllzzzzzzzeroo";
// Elzero
let unfossed = myString.split('').filter((element,ind) => {
  for (let i = 0; i < ind.length; i++) {
    let result = [];
    
  }
  
  if(element !== ind) return element;
}).reduce(function (acc, current){
    return `${acc}${current}`;
})
console.log(unfossed);
// 2nd Assignment

// Re-watch the lessons ⚠️🟢
let myString = "EElllzzzzzzzeroo";
let solution = myString.split('').filter((element,ind) => {
  return isNaN(parseInt(element));
}).reduce(function(acc, current){
  if(acc === current){ return ''}
  else return acc + current ;
});
console.log(solution);