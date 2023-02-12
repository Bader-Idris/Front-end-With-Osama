

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
let solution = myString.split('').filter((element,ind) => {
  return isNaN(parseInt(element));
}).reduce(function(acc, current){
  if(acc === current){ return ''}
  else return acc + current ;
});
console.log(solution);
// 2nd Assignment❎

// can't use array.flat()

let myArray = ["E", "l", "z", ["e", "r"], "o"];
// Elzero
let reduceflatting = myArray.reduce((ele,ind)=>{
    return ele.concat(ind);
},[])
console.log(reduceflatting);

// a greater method 🔽
let flatArray = [].concat(...myArray);
// just search for hot to flat an array 
// 3rd Assignment✅ stolen with other methods from www.flexiple.com

// use filter, map and other methods to output only numbers, and reverse their statement as - or +
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let reverseNum = numsAndStrings.map((ele)=>{
  return !isNaN(parseInt(ele)) ? ele * -1: '';//must convert it into map not filter
  // whether map is here or down🔴
}).filter((ele)=>{
  return ele ;
})
console.log(reverseNum);
// [-1, -10, 10, 20, -5, -3]
// 4th Assignment✅

// if % of current is 1 do sum accumulator and current. if it's 0 then multiply acc && cur
// initial value must be 1

let nums = [2, 12, 11, 5, 10, 1, 99];
let moduleNum = nums.reduce((acc,cur)=> {
  return acc % cur === 1 ? acc + cur : acc % cur === 0 ? acc * cur: '';
},1)
console.log(moduleNum);
// 500

// 5th Assignment❎ A challenge 🔴

// String(Math.abs(array))🔴this is used to convert negative numbers to positive numbers and vice-versa








// practices on map, reduce, and filter 

let swappingCases = "elZERo";
let sw = swappingCases.split("").map(function (ele){
  return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
}).join("");
console.log(sw);
// as arrow function
let sw2 = swappingCases.split("").map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()).join("");
console.log(sw2);//ele can be as var [a]

// ----------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------

// filter examples ----------------------------------------------------------------------------

let numbers = [11, 20, 2, 5, 17 , 10];
let nigga_ability = numbers.filter((el) => el % 2 === 0)
console.log(nigga_ability);

// ----------------------------------------------------------------------------

let mixo = "A13BS2ZX";
let mixedContent = mixo.split("").filter(function (el){
  return !isNaN(parseInt(el));
}).map(function (el){
  return el * el;
}).join("");
console.log(mixedContent);

// ----------------------------------------------------------------------------

let removeChars = ["E","@","@","L","Z","@","@","E","R","@","O"];
let finalString = removeChars.filter(function(ele) {
  return !ele.startsWith("@");
}).reduce(function (acc, current){
  return `${acc}${current}`;
})
console.log(finalString);

// ----------------------------------------------------------------------------

let removenums = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let finalString22 = removenums.filter(function(ele) {
  return isNaN(ele);
}).reduce(function (acc, current){
  return `${acc}${current}`;
})
console.log(finalString22);
// ----------------------------------------------------------------------------