let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1✅
console.log(`["${myFriends[0]}", "${myFriends[1]}", "${myFriends[2]}"]`); // ["Ahmed", "Elham", "Osama"];

// Method 2✅
let first = myFriends[0], second = myFriends[1], third = myFriends[2];
console.log(`["${first}", "${second}", "${third}]"`); // ["Ahmed", "Elham", "Osama"];
// Third Method by Me:🤪
// let brothers = myFriends.pop(); didn't work
let brothers = [myFriends[num-3], myFriends[num-2], myFriends[num-1]];
console.log(`["${brothers[0]}", "${brothers[1]}", "${brothers[2]}"]`);
// Although I can use slice, and other cutting methods here
//1st Assignment✅

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// Write Your Code Here
friends.splice(0,1)+friends.pop();
console.log(friends); // ["Eman", "Osama"]
//2nd Assignment✅

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr.splice(0,0,(finalArr.concat(arrTwo.pop(),arrOne.reverse(),arrTwo.reverse())));
// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//3rd Assignment✅

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// only one line
console.log("Your Code Here"); // ZERO
// how can I do this function without using numbers!🤪🤪
console.log(words[2][0].slice(2,6).toUpperCase()); // ZERO
//  Too much methods. not important🙃🙃. slice, split, join, etc.😒
//4th Assignment [Half✅]

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) console.log('Found');
haystack.includes("JS") ? console.log('Found'): null;
haystack[1] == needle ? console.log('Found'): null;
for (let i = 0; i < haystack.length; i++) {
  haystack[i] == needle ? console.log('Found'): null;
};//good simple for loop☑️
//5th Assignment✅

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here🔴No Numbers  allowed🔴
myVarBoy = arr2.pop() +arr1.pop()+arr2.pop().split("");// not willing to reverse
console.log(allArrs); // fxy
//6th Assignment