
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


// must only use loop for for repetition

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;//after searching for object length I found
// Object.keys(obj).length is the solution, because object.keys() alone picks ONLY the properties

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${keys(myFavGames)[i]}`);//✅
  console.log(`The Publisher Is ???????`);
  console.log(`The Price Is ???????`);

  // Check If Nested Object Has Property (bestThree)
  if (???????) {
    console.log("- Game Has Releases");
    console.log(`First => ???????`);
    console.log(`Second => ???????`);
    console.log(`Third => ???????`);
  }
  console.log("#".repeat(20));
}

/* Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"

*/

// 4th Assignment CHALLENGE ❎

// MDN in an object we can declare a function as bio(){},
// without typing bio: function (){}


