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