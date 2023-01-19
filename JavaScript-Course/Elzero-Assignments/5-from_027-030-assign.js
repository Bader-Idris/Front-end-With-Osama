let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.split("",1).join("").toLowerCase()); // e
console.log(userName.slice(3, 4));// e
console.log(userName.charAt(3)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.trim().charAt(3));// bonus by me💪
console.log(userName.split("",1).join("").toLowerCase().repeat(3)); // eee
// bring back firstIndex of that string
// 1st Assignment✅

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True
// 2nd Assignment✅