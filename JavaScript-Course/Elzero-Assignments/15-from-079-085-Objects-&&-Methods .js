
// Create Your Object Here, to output the following

let member = {//name, age, country each one is a property
  name:"Elzero",
  age:38,
  country:"Egypt",
  fullDetails(){
    return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
  }
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// 1st Assignment✅

// create a new object in 4 different methods

// Method One
// Create Your Object Here
let objMethodOne = {
  property:'Method One'
};
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo = new Object({
  property:'Method Two'
}); 

console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = {};
objMethodThree.property = "Method Three";
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = new Object();
objMethodFour.property = "Method Four";
console.log(objMethodFour.property); // "Method Four"
let obj = Object.create({});//good way to create object
// 2nd Assignment✅



let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a}, threeNums, twoNums);
console.log(finalObject);
// finalObject.a = a,finalObject.threeNums = threeNums,finalObject.twoNums = twoNums;

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
// 3rd Assignment✅





// 4th Assignment CHALLENGE