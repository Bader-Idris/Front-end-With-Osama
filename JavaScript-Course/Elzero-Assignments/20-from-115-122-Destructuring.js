let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a, b, c, d, e] = myNumbers;
console.log(a * e); // 5
// 1st Assignment  ✅

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// Write Your Destructuring Assignment Here
[a, b, c, [d, e, [f, g]]] = mySkills;
console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
// 2nd Assignment  ✅


let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];
// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here
[a, b, c] = [arr3[1], arr3[2], arr1[0]];// his question isn't clear
console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// My Best Friends: Shady, Mahmoud, Ahmed

// 3rd Assignment CHALLENGE ✅
//! revise object destructuring
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};
// Write Your Destructuring Assignment Here
let {a,b,c,d:{h1,h2,h3}} = member;
console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working
console.log(`I Live in ${c}`);
// I Live in Egypt
console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// 4th Assignment 
