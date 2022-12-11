// ##4th lesson ##:22:26 Working With Chrome Developer Tools
/*
  After installing live server extension, we open HTML page in live
  then when it's open, only by saving the changes, it appears them quickly
  [F lovely 💋]

  To see error messages and standard actions, we open [console ]tab inside [inspect]
  The same we were opening to know files path
  it gives the main three levels:  [inside Default levels]
  * Info
  * Warnings
  * Errors
  
  Inside the console, we can run JS code directly
  eg:
  document.write('<h1>Hello Bader</h1>') ↵
  document.querySelector("h1").style.color = 'blue'; ↵
  document.querySelector("h1").style.fontSize = '80px';
*/

/*
document.write('<h1>Hello Bader</h1>');
document.querySelector("h1").style.color = 'blue';
document.querySelector("h1").style.fontSize = '80px';
*/
/* when typing 🔽 inside console we'll see window command [its properties commonly used]
  window
  iside it there'e a property named close, when called it'll close the window
  window.close
*/

// ##5th lesson ##:27:44 Where to put the code
/*
  So, it's either inside the head or the body
  if we add a h1 by typing: 
  [document.querySelector("h1").style.color = 'blue';]
  and having the <script src=""> inside the head, it'll reject the action/event,
  because a scripting lang needs to read each line to preform on it.

  Its solution is to append a func named [onload], which'll make JS wait for loading the page
  Before implementing its script. To do it, we type:

  window.onload = function () {
    document.querySelector("h1").style.color = 'blue';
  }

  Best practice is to append it to the [body]
*/
window.onload = function () {
  document.querySelector("h1").style.color = "blue";
};
// When we format the selection script, it will append a semicolon, or fix our bad practice
// With Prettier formatter
// ##6th lesson ##:32:12 Comments and Bad Practice
// As we know, // and / * and VSC shorthand [ctrl shift /], and not using it too much

/*  ##7th lesson ##:36:21 Output To Screen
  - window.alert()
  - document.write()
  - console.log()
  These are basics of OOP.
  Syntax:

*/
//window.alert("Welcome from JS")//it's not useful, because it stops the code
document.write("<h1>Hello<span>Page</span></h1>");//it appends html elements & content
//although it's not best practice, the good is this:
document.createElement("");
console.log("this is alike echo in PHP");
// So they are objects
// ##8th lesson ##:42:35 Console Methods and Styling with Web API
console.log("");// appears on the console as a command
console.error("appears as an error");
console.timeLog // We can count time with these, [time,timeEnd,timeLog,timeStamp]
console.table(["This","is","an","array"]);//inside the table, appears as table inside console
console.log("I wanna %cStyle you", "color:red; font-size: 40px");
// to format it we use [%c] C Directive, and by appending it more it uses 2nd property as
console.log("I wanna %cStyle %cyou", "color:red; font-size: 40px", "color:blue; font-size: 32px");/*
  so, we're able to append many c directive signs, when having many properties
  Console is tended for web API, not JS [Application programming interface], so JS uses web APIs
  Read API on MDN web Docs
*/

/* ##9h lesson ##:48:38 What Is ECMAScript[Eg: ES6] stand for
  ECMA company standardized Data as Langs & whatnot
  [http://ES6-features.org] shows us what updates got after ES6
  instead of knowing pervious versions we use compilers as 
  [http://babeljs.io], it compiles ES6 to ES5 and older versions[old code called legacy-code]
  [+] is the concatenation in JS, not . as PHP
*/

/* #10h lesson ##:55:00 Data & operator Types 
  typeOf, tells us what type of data is that, as gettype() in PHP
*/
console.log(typeof("my-string"));
typeof "is it right?";
typeof 5000;
// arrays in Python are named lists, in JS it's array, and its type is [[OBJECT]]
console.log(typeof ([14, 10, 12]));// Does it applicable to add many types of data inside JS arrays as PHP?
// array => Object
//This is the real object he said
console.log(typeof { name: "Bader", age: 17, country: "PL"});
// more types of data
console.log(typeof undefined);
console.log(typeof null);
//in ES6 and 2020,  Big ints -integers- & symbol appeared

/* #11h lesson #1:04:54 Variables Intro

*/