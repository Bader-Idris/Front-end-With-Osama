// Test Case 1
let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

if (num < 10) console.log(`00${num}`);
else if (num > 10 && num < 100) console.log(`0${num}`);
else if (num >= 100) console.log(`${num}`);
// 1st Assignment✅

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
/*
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
*/
num1 === str
  ? console.log("{num1} Is The Same Value As {str}")
  :num1 == str
  ? console.log("{num1} Is The Same Value As {str} But Not The Same Type")
  :num1 != str2 || typeof num1 !== typeof str2//Does he mean nor or or🙃
  ? console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
  :typeof str === typeof str2 && str !== str2
  ? console.log("{str} Is The Same Type As {str2} But Not The Same Value")
  :num1 === str
// 2nd Assignment✅

let num1st = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
/*
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1st} And Type Is Not The Same As {num2}"
*/
if (num3 > num1st && typeof num3 !== typeof num2 && num3 == num2 & typeof num3 !== typeof num1st) {
  console.log(`
  "30 Is Larger Than 10 And Type string Not The Same Type As number"
  "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  "{num3} Value And Type Is Not The Same As {num1st} And Type Is Not The Same As {num2}"
  `)
}
// 3rd Assignment✅

// 🔴Only Change The Variables to Output true boolean value🔴
// Edit What You Want Here
let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/
// Condition 1✅
// let num1 = 20 , num2 = 10, num3 = "10", num4 = 20;
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2✅
// let num1 = 20 , num2 = 10, num3 = "10", num4 = 25;
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3✅
// let num1 = 20 , num2 = 10, num3 = 20, num4 = 25;
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4✅
// let num1 = 20 , num2 = 10, num3 = 20, num4 = 50;
if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5✅
// let num1 = 20 , num2 = 10, num3 = 20, num4 = 50;
if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6✅
// let num1 = 20 , num2 = 10, num3 = 20, num4 = 100;
if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7✅
// let num1 = 20 , num2 = 10, num3 = 20, num4 = 51;
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
// 4th Assignment✅