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

