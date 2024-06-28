document.write("<h1>Elzero</h1>");
document.querySelector("h1").style = `color: blue;
font-size: 80px;
font-weight: bold;
text-align: center;
font-family: Arial`;
// document.querySelector("h1").style.fontWeight = "bold";// if separately
// 2nd assignment✅
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size: 40px",
  "color:green; font-size: 40px;font-weight: bold",
  "background:blue; font-size: 40px"
);
// 3rd assignment✅
/* from MDN
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");
*/
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
// 4th assignment✅
console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);
// 5th assignment✅
console.log("Iam In Console");
document.write("Iam In Page");//this removes previous document.write
// 6th assignment❎
// stop the code without touching the source code, either before the line or after
// you have two ways to doing it!