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
  inside it there'e a property named close, when called it'll close the window
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
console.log("I wanna %cStyle %cYou", "color:red; font-size: 40px", "color:blue; font-size: 32px");/*
  so, we're able to append many c directive signs, when having many properties
  Console is tended for web API, not JS [Application programming interface], so JS uses web APIs
  Read API on MDN web Docs
*/

/* ##9th lesson ##:48:38 What Is ECMAScript[Eg: ES6] stand for
  ECMA company standardized Data as Langs & whatnot
  [http://ES6-features.org] shows us what updates got after ES6
  instead of knowing pervious versions we use compilers as 
  [http://babeljs.io], it compiles ES6 to ES5 and older versions[old code called legacy-code]
  [+] is the concatenation in JS, not . as PHP
*/

/* #10th lesson ##:55:00 Data & operator Types 
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

/* #11th lesson #1:04:54 Variables Intro
  we [Declare] variables
  var, let, const are [keywords]
  syntax (Keyword | Variable Name | Variable Value )
*/
var user = "Bader";
/* it's not mandatory to type [var] when appending a variable,
  but it overrides the existing vars when not added as [user = "Bader"]
*/
// when we add many vars in a line we use comma sign as
var user = "Bader",
    age = 17;// second line's formatting is after two tabs
// when we have an Id inside HTML, JS counts it as a variable
// we can declare it as is:
/*
  HTML: <div id="hello"></div>
  JS: console.log(hello)
*/
// To change content of an Id we type:
myVarId.innerHTML = "Do it.";
// Search for [Loosely typed lang VS Strongly typed lang], JS is loosely, C is strongly
/* #12th lesson #1:11:11 Identifiers Name Convention & Rules
  No spaces, No Numbers, No symbols, 
  except for [$]& [[NOs] & [_] after first letter],[$] can be used everywhere
  [$_us1$_er1_$] this is valid

  [!@#%^&] are called special characters
  Reserved keywords are not allowed
  in Windows we can't name files with [con, aux]
  in JS [var, if, function] are some examples

  best practice of naming vars in JS is: userName[camelCase]
*/
/* #13th lesson #1:15:02 Var, Let, Const Comparison
  Some declared in ES6
 */
/*
  Var 
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Function Scope

  Let 
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Function Scope

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Function Scope
*/
var a = 1;
var a = 2;// This is re-declaring
console.log(a);
//  In Let & const, it'll give an error as ['a' has already been declared]
console.log(b);
var b = 1;// This will give an error as Undefined
//  it won't access before declare, IT'S BAD, AS UNDEFINED, WE KNOW NOTHING ABOUT ITS REASON
// Let & const gives us an error message:[cannot access 'b' before initialization]

// Any [var] will be shown in [window] object, to access it type: window.myVar
// That gives a real Drama 😁🤯, to see it type: window ↵ window 🔽
// search for [Variable Scope Drama] to see results

/* #14th lesson #1:22:05 String Syntax & Chars Escape Sequences
    String Syntax & Character Escape Sequences
    \ Escape + Line Continues
    \n
[Google them ⬆️]
  To Enable/Disable formation of code we search for[formatOnSave] in settings

  Including single quote inside of double quotes is ENABLED, eg:
*/
console.log('Bader"Idris"Alright!');//[""]inside ['']
console.log("Bader'Idris'Alright!");//['']inside [""], In any lang though
console.log("Bader\"Idris\"Alright");// We append backslash [\] to Escape/ignore quotes
// [\\] two backslashes to append one inside our string, [\n] as we know it

// To connect next line inside our code we append a backslash at last, e,g:
console.log("Pedro\
nigga\
");// No problem connecting them here!

// #15th lesson #1:29:20 Concatenation [+] 
let a15 = "We Love" + "JS";
let b15 = "JavaScript";
document.write(a15 + " " + b15);
// To print many vars with spaces append comma, type:
console.log(a15, b15);
// #16th lesson #1:31:55 Template Literals (Template Strings)
let a16 = "He Loves";
let b16 = "JavaScript";
let c16 = "And";
let d16 = "Programming";

console.log(a16 + " " + b16 +
"\n" + c16 + " " + d16);
// The best practice is to use backtick [`], then $ then carly braces {}
console.log(`${a16} ${b16} ${c16} ${d16}`);

console.log(`${a16} ' " \\ ${b16}
${c16} ${d16} ${5 ** 5}`);//Here only by separating the line, it makes one
// All quotes are valid, and a \ needs 2nd \ as \\
// we can add expressions as `${5 ** 5}`  A real Example
let markUp = `
  <div class="card">
    <div class="child">
      <h2> Title</h2>
      <p> Paragraph</p>
    </div>
  </div>
`;
document.write(markUp);
// Got to [babelJs.io] to see, legacy code Tragedy 😁🤯
// , to write that simple code, Escaping and formatting are Bad

// #17th lesson #1:39:55 Variables & Concatenation Challenge ✅after learning let a = 1, b = 2, c = 3; method[External files]
/* We have to impact the mission, and we can use [Repeat] command
after searching for it, I need more practice to do it well 14th/12/22
*/

/* #18th lesson #1:42:42 Arithmetic Operators\
  [+ - *] are normal
  [**] came in (ES7)
  % Modulus (Remainder) We know if it's even or odd
  ++ Increment [ Post / Pre ], post is var++[not printed], pre is ++var[prints]
  -- Decrement [ Post / Pre ], same, in post we print afterwards
*/
console.log(10 + "Bader");// This will count it as a concatenate, not an operator
// Numbers in console are in Blue, and string in Black.
console.log(10 - "Bader");// NaN [No a number] can't count it, NIGGA
console.log(typeof NaN);// People think it's weird, as it's a number, but'll be explained
// #19th lesson #1:42:42 Unary Plus And Negation Operators
/*
  - [+] Unary Plus [Returns Numbers If NaN]
  - [-] Unary Negation [Returns Numbers If NaN && Negates It]
  Tests
  - Normal Numbers
  - String Numbers
  - String Negative Numbers
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
console.log(+100);
console.log(+"100");//Becomes a number
console.log(+"-100");//same ⬆️
console.log(+"Bader");//NaN
console.log(+0xff);// 255
console.log(+null);
console.log(+false);//0
console.log(+true);//1
// Negation
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Bader");
console.log(-0xff);
console.log(-null);
console.log(-false);//-0
console.log(-true);
// We'll learn in constructors && OOP, what we can turn numbers by [number()] constructor
console.log(Number("100"));
/* #20th lesson #1:56:05 Type Coercion (Type Casting)
  It's inverting a type into another
  - [+]
  - [-]
  - [""] - 2
  - false - true
*/
let a20 = "10";
let b20 = 20;
let c20 = true;
console.log(a20 + b20);// 1020 as + concatenate, not + operator,
// use unary instead
console.log(+a20 + b20);
console.log(Number(a20)+ b20);// this is usable though, number constructor
// With minus it works well, or gives NaN
console.log(+"" - b20);//"" here represents 0,
console.log(false - true);// 0 - 1
console.log(a20 + b20 + c20);// It converts true to string, so 10 20 true
// This is type coercion[enforced converting]
// It happens because of the string
console.log(+a20 + b20 + c20);// Amended by making a20 as a num with Unary +

/* #21st lesson #2:01:42 Assignment Operators
  += -= *= /=
*/
let a21 = 10;
a21 = a21 + 20;
a21 += 100; // a21 = a + 100
/* #22nd lesson #2:04:42 Operators Challenges ❎
  we'll use unary, type casting, post and pre increment, and whatnot

*/
let a22 = 10, b22 = "20", c22 = 80;// looks like each unary reset the var to its original value
console.log(++a22 + +b22++ + +c22++ - +a22++);
console.log(++a22 + -b22 + +c22++ - -a22++ + +a22);
console.log(--c22 + +b22 + --a22 * +b22++ - +b22++ - +b22 * a22 + --a22 - +true);
/*
  [++a22] [+]
  [++a22]
  - Value:
  - Explain:
  [+]
  - Explain:
*/
// Each line need to be explained,
// as +a++ means: unary with post increment, don't change var values

/* Challenge 2 [½] */
let d22 = "-100", e22 = "20", f22 =30, g22 = true;
// Use only variable Values
// Don't Use A Variable Twice
console.log(-d22 * +e22);// must be 2000
console.log();// must be 173, Man it socks ❎


/* #23rd lesson #2:07:46 Number [data type]*/
/*
  Number
  - Double Precision [complex,float and irrational integers]search for it 
  - Syntactic Sugar "_" [💻 🔬 word, making the syntax sweeter]
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/
console.log(1000000);
console.log(1_000_000);// Here we use syntactic sugar, simplifying the NO
console.log(1e6);//e means how many digits, so e3 means 000
console.log(10 ** 6);// a million though
console.log(Number());// This number is a function that uses a constructor
/*
  to access a function/object's attributes, append . after it, so: window. 
  [ctrl + space] to let VSC appears options
*/
console.log(Number.MAX_SAFE_INTEGER);//tells what is the maximum safe irrational number 
console.log(Number.MAX_VALUE);// can't append more numbers to that number in the lang

/* #24th lesson #2:14:44 Number Methods 
  [methods stands for functions here]

  - Two Dots To Call A Methods
  - toString() 
  - ToFixed() 
  - parseInt() 
  - parseFloat() 
  - isInteger() [ES6]
  - isNaN() [ES6]
*/
console.log((100).toString);
console.log(100..toString);//same as above, if one period it'll consider it as a decimal number
console.log(100.10.toString);//this is another way, the formatter'll use the parentheses one 
console.log(100.555555.toFixed(2));// EXTREMELY IMPORTANT, (2)outputs only 2 decimals, [it output it as a [string]]
//  if the 3rd decimal is 5 or more it gives [100.56]
// if 4 it'll output [100.55]
console.log(parseInt("100 Bader"));// returns it as an integer, overlooking text if exists after the number
console.log(parseFloat("100.50 Bader"));// same but with float

console.log(Number.isInteger("100"));// false, it's a string
console.log(Number.isInteger(100.500));// false, it's a float
console.log(Number.isInteger(100));

console.log(Number.isInteger("Bader"));// it's weird, false
console.log(Number.isInteger("Bader" / 20));// true, use it with operators

/* #25th lesson #2:22:44 Math Object 
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [ES6]
*/
console.log(Math.round());// separates it between 4< or 5>
// so if the decimal is 4 as 99.4 => 99.0 and if 99.5 => 100
console.log(Math.ceil(99.2));// sends it to the top, to 100
console.log(Math.floor(99.9));// sends it to the ground to 99

console.log(Math.min(10, 20, 100, -100, 90));// The minimum number
console.log(Math.max(10, 20, 100, -100, 90));//The maximum number

console.log(Math.pow(2, 4));// stands for power[exponent] 2^4, 2**4
console.log(Math.random());// as its name
console.log(Math.trunc(99.5));// Will be used much| makes float integer

/* #26th lesson #2:27:30 Number Challenge ✅⅔, ⅓❎*/
let a26 = 1_00;
let b26 = 2_00.5;
let c26 = 1e2;
let d26 = 2.4;
// Find The Smallest number In All Vars Then Return them as [integer]
console.log(Math.min(a26, b26, c26, d26));//✅
// Use Variable a + d Only once To output the Requirements
console.log(Math.pow(Math.round(d26)), a26);//10000 ✅
// console.log(Math.pow(a26, Math.round(d26))); I didn't include the math.round with parentheses

// Get Integer "2" From d Variable using 4 Methods
console.log(parseInt(d26));  //✅
console.log(Math.floor(d26));//✅
console.log(Math.round(d26));//✅
console.log(Math.trunc(d26));//✅

// Use Variables b + d To Output These Values🔽: [b = 200.5, d = 2.4]
console.log();// 66.67 => String ❎
console.log();// 67 => Number ❎ [length doesn't accept numbers, so we convert it into string]


//The useful hint is that when using a function as math.round(),
// we can use anything inside as math.ceil(), so 
// console.log(Math.random(Math.ceil())); Extremely IMPORTANT To solve the challenge
// codepen.io student links for solutions are in the description of the main 🧪 video

/* #27th lesson #2:29:40 String Methods Part 1 
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain methods [Most important🟢]
*/
let theName = "Ahmed";
let theList = [1, 2, 3, 4, 5];// indexed array with sequence of objects
// the index is the [n] z based index
console.log(theName[1]);// H letter, as the second [data sequence]of the string, alike arrays
// charAt() means character at a position
console.log(theName.charAt(1));
console.log(theName.length);// length is used in every language

console.log(theName.charAt(5));// Empty, he said undefined so there're maybe same negative
console.log(theName[5]);// undefined[not empty]
// trim is to cut the string as we learned in PHP 
console.log(theName.trim());// when empty it removes spaces
console.log(theName.toUpperCase());// all as upperCase
console.log(theName.toLowerCase());// all as lowerCase

console.log(theName.trim().charAt(2).toUpperCase());// here we trimmed everything excluding M letter and changed its style to upperCase
// when we include a function inside another, it's called chaining

/* #28th lesson #2:37:51 String Methods Part 2
  String methods [Mand]&&[Opt] are mandatory and optional
  - indexOf(value [Mand], Start [Opt] 0)
  - lastIndexOf(value [Mand], Start [Opt] length)
  - slice(Start [Mand], End [Opt] Not Including End)
  - repeat(Times)[ES6]
  - split(Separator [Opt], Limit [Opt]) [He 💗 it]
*/
let a28 = "Elzero Web School";
console.log(a28.indexOf("Web"));//Starting from 0 letter
console.log(a28.indexOf("Web", 8));// we set where to start, -1 means look previously
console.log(a28.lastIndexOf("o"));// 15, starts from left but count normally

console.log(a28.slice(2, 6));//not including the End
console.log(a28.slice(-5, -3));

console.log(a28.repeat(5));// 5 times of repeating it as we learned

console.log(a28.split());// both are opt, when empty, it makes is as an array
console.log(a28.split(""));// Cuts each element, even spaces
console.log(a28.split(" "));// Cuts each word, because spaces'll be removed
console.log(a28.split(" ", 2));// 2 here is the limit of straps

/* #29th lesson #2:50:15 String Methods Part 3
  String Methods
  - Substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 Starting With 0
  --- Use Length To Get The Last Character
  - Substr(Start [Mand], Character To Extract)
  --- Start >= Length = ""
  --- Negative Starts At The End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endWith(Value [Mand], Length [Opt] Default Full length) [ES6]
      Last Three are boolean methods
*/
let a29 = "Elzero Web School";
console.log(a29.substring(2, 6));// Different than slice,Not including End


console.log(a29.substring(6, 2));// If mistakenly swapped them, it'll re-set them
console.log(a29.substring(-10));// Any Negative Number will start at 0
console.log(a29.substring(a29.length -1));// A great way of counting last word
console.log(a29.substring(a29.length -5, a29.length - 3));
//To calculate last 5 to last 4, not including the End, Now, it's similar to slice function
console.log(a29.substr(0, 6));// counts how many characters
console.log(a29.substr(18));// When we type greater number, it'll output an empty line

console.log(a29.includes("Web"));// default starts at 0
console.log(a29.includes("Web", 8));// false because after nth 8 It didn't find "Web"

console.log(a29.startsWith("E"));// true because it does
console.log(a29.startsWith("E", 2));// false because 2nd starts with z
console.log(a29.startsWith("z", 2));// true because it does with z

console.log(a29.endsWith("o"));// false, not ending with o character
console.log(a29.endsWith("o", 6));// we count length not index ⚠️

/* #30th lesson #3:02:56 String Challenge, ⅓❎
  All Solutions Must Be In One Chain
  You Can Use Concatenation
*/

let a30 = "Elzero Web School";

// Include These Methods In Your Solutions [slice, charAt]
console.log(Math.slice);
console.log(a30.slice(2, 6));// Zero
// console.log(a30.slice(2, 6), a30.charAt(0).toUpperCase);❎❎
console.log(a30.slice(2, 6).charAt(0).toUpperCase());// must to slice other CHs

// 8 H
console.log(a30.trim().charAt(a30.length -4).toUpperCase().repeat(8));// HHHHHHHH ✅

// Return Array
console.log(a30.slice(0,6).split(" "));// [Elzero] ✅

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a30.substr(0, 6), a30.substr(11, 17));// Elzero School ✅

// Solution Must Be Dynamic And String May Change
console.log(); // eLZERO WEB SCHOOl [first and last characters must be small, with any string comes along]
// console.log(a30.substring(a30.length -5, a30.length - 3));❎❎

/* #31st lesson #3:05:32 Comparison Operators
  - == Equal
  - != Not Equal
  
  - === Identical
  - !== Not Identical

  - >Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/
console.log(10 == "10");
console.log(10 != "10");

console.log(10 === "10"); // Type and value, as we know[Recommended]
console.log(10 !== "10");

console.log(typeof "Bader" === typeof "Osama");// if we don't want to change operators and values, and output true
/* #32nd lesson #3:11:05 Logical Operators
  - ! Not
  - && And
  - || Or
*/
console.log(true);
console.log(!true);
console.log(!(10 == "10"));// turning boolean value into false
console.log(10 == "10" && 10 > 8 && 10 >= 10);
// A customer needs three paper, passport, ID card, and Military state, we use 3 of &&

console.log(10 == "10" || 10 > 80 || 10 > 50);// No Xor in JS, if one or more, it's true
/* #33rd lesson #3:16:20 If Conditions
  Control Flow
  - if
  - else if
  - else

  if (Condition){
    // Block of code
  }

*/
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";

console.log(price);
if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else { // It has no conditions
  price -= 10;
}
/* #34th lesson #3:24:54 Nested If Conditions🐣

*/
let price34 = 100;
let discount34 = false;
let discountAmount34 = 30;
let country34 = "Egypt";
let student34 = true;
/* instead of appending many if conditions, for a student
  and if the student is having a special case 
  as an orphan to grand greater grant, or whatnot,
  we only use nested codes
*/
if (discount34 === true) {
  price34 -= discountAmount34;
} else if (country34 === "Egypt") {

  if (student34 === true) {

  price -= discountAmount34 + 30;

  } else {
  
    price -= discountAmount34 + 10;
  }

} else if (country34 === "Syria") {
  price34 -= discountAmount34 + 20;
} else {
  price34 -= 10;
}
// it must not be more than 4 nested if conditions in normal cases

/* #35th lesson #3:29:47 
  Conditional (Ternary) Operator [brief if]
*/
let theName35 = "Mona";
let theGender35 = "Female";
let theAge35 = 30;

if (theGender35 === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}
// Condition ? If True : If False
theGender35 === "Male" ? console.log("Mr") : console.log("Mrs");
// We can sort Ternary operator inside a variable
let result35 = theGender35 === "Male" ? "Mr" : "Mrs";// we don't print, but set data

document.write(result35);
// we can easily print the result
console.log(theGender35 === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theName35}`);// in old days normal if was used instead
console.log(`Hello ${theGender35 === "Male" ? "Mr" : "Mrs"} ${theName35}`);
// What about if else?! 
theAge35 < 20
  ? console.log(20)
  : theAge35 > 20 && theAge35 < 60
  ? console.log("20 To 60")
  : theAge35 > 60
  ? console.log("Elder than 60")
  : console.log("Unknown");
// last is the false [else without conditions]

/* #36th lesson #3:36:51 [Nullish Coalescing Operator & Logical Or]
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/
let price36 = 100;
console.log(`The Price Is ${price36}`);// Normally it'll print null if not exists
// This lesson is to append other sting instead,[2 Vertical bars ||]
console.log(`The Price Is ${price36 || 200}`);//this logical or is useful with any falsy value
// as if it's: let price36 = 0/ false / "" / undefined / null
// let price36; equals to undefined
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));// this boolean outputs the falsy or true values
// Nullish Coalescing Operator ?? is available in PHP

console.log(`The Price Is ${price36 || 200}`);
console.log(`The Price Is ${price36 ?? 200}`);// outputs 0 when needed

/* #37th lesson #3:41:09 If Condition Challenge  ❎*/
let a37 = 10;
if (a37 < 10) {
  console.log(10);
} else if (a37 >= 10 && a37 <= 40) {
  console.log("10 To 40");
} else if (a37 > 40){
  console.log("> 40")
} else {
  console.log("Unknown");
}
// Write It With Ternary If Syntax ✅

a37 < 10
  ? console.log(10)
  : a37 >= 10 && a37 <= 40
  ? console.log("10 To 40")
  : a37 > 40
  ? console.log("> 40")
  : console.log("Unknown");

// ********************************
let st = "Elzero Web School";

/*
if ("????" === "34") {
  console.log("Good");
}
*/
if (st.repeat(2).length.toString() === "34") {//✅ this is the correct answer, not the next one
  console.log("Good");
}

if (typeof "????" === typeof "34") {//✅ I consider it done🤣 typeof, not a real answer, above is better
  console.log("Good");
}
// use any method with var instead of ????
// and make it print Good

// W Point May Change, any string has W character ❎❎
if ("????" === "w") {
  console.log("Good");
}
// if (st.split("W", 2) === "W") {
//   console.log("Good");
// }

//************

if ("????" !== "String") { //🙃
  console.log("Good");
}

if ("????" !== "Number") {
  console.log("Good");
}

// let st = "Elzero Web School";
if ("????" === "ElzeroElzero") {//🙃
console.log("Good");
}
// firstly make elzero as an array, then repeat it twice, then remove the space between
// failed in repeating the outcome, instead of the var ❎❎
st.split(" ", 1).repeat(2);
st.repeat(2, st.split(" ", 1));

// ********************************
/* #38th lesson #3:43:43 Switch Statement */
// it controls flow of code, as if condition
/*
  switch(expression) {
    case 1:
      // Code Block
      break;
    case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/
// if else, works more with boolean values, and highly complicated block of code

// Switch works codes has many cases, eg: week's days
let day38 = 0;

switch (day38) {
  case 0:
    console.log("Saturday");
    break;// if we copy same case, it won't work, break stops the flow, if no break, both run
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:// we can append many cases for same results
    console.log("Monday");
    break;
  default:
    console.log("Unknown Day");
}
// it compares using [identical operator] if str && n,it won't work
// we need to append default value, instead of falsy with if statements
// we can append [default] in first case, but only with break command

/* #39th lesson #3:49:33 Switch && If Condition Challenges */

/*
  Switch Challenge ✅
*/
let job39 = "Manager";
let salary39 = 0;

if (job39 === "Manager") {
  salary39 = 8000;
} else if (job39 === "IT" || job39 === "Support") {
  salary39 = 6000;
} else if (job39 === "Developer" || job39 === "Designer") {
  salary39 = 7000;
} else {
  salary39 = 4000;
}
// job39 will change, and we need to type it with switch
// the line before .console, we'll type salary value[not re-declaring vars]

// ******************************** Start solution

switch (job39) {
  case "Manager":
    salary39 = 8000;
    console.log(salary39);
    break;
  case "IT":
  case "Support":
    salary39 = 6000;
    console.log(salary39);
    break;
  case "Developer":
  case "Designer":
  salary39 = 7000;
  console.log(salary39);
  break;
  default: 
    salary39 = 4000;
}

// ******************************** End solution
/*
  If Challenge
*/
let holidays39 = 0;
let money39 = 0;

switch (holidays39) {
  case 0:
    money39 = 5000;// this is updating not re-declaring we can type let var [an error]
    console.log(`My Money is ${money39}`);
    break;
  case 1:
  case 2:
    money39 = 3000;
    console.log(`My Money is ${money39}`);
    break;
  case 3:
    money39 = 2000;
    console.log(`My Money is ${money39}`);
    break;
  case 4:
    money39 = 1000;
    console.log(`My Money is ${money39}`);
    break;
  case 5:
    money39 = 0;
    console.log(`My Money is ${money39}`);
    break;
  default:
    money39 = 0;
    console.log(`My Money is ${money39}`);
}
// Turn it into if statement
// this one helps us solving the previous task

// ******************************** Start solution ✅

// let holidays39 = 0;
// let money39 = 0;

if (money39 === 5000) {
  console.log(`My Money is ${money39}`);
} else if (money39 === 3000) {
  console.log(`My Money is ${money39}`);
} else if (money39 === 2000) {
  console.log(`My Money is ${money39}`);
} else if (money39 === 1000) {
  console.log(`My Money is ${money39}`);
} else {
  console.log(`My Money is ${money39}`);// appending ["Unknown";] is better, or the whole if is not necessary
}
// ******************************** End solution

/* #40th lesson #3:52:49 Array Big Introduction */

/*
  Arrays [المصفوفة/list]
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/
let myFriends40 = ["Ahmed", "Mohammad", "Sayed", ["Marwan","Ali"]]// same syntax as python and PHP
console.log(`Hello ${myFriends40[0]}`);
console.log(`Hello ${myFriends40[1][2]}`);//3rd ch in 2nd array, Marwan and ali are in a nested array
console.log(`Hello ${myFriends40[3][1][2]}`);// 2nd ch in 1st inside nested array 
// changing array's data🔽
console.log(myFriends40);//😈 are to see results
myFriends40p[1] = "Gamal";// instead of mohamed
console.log(myFriends40);//😈
myFriends40p[3] = ["Gamal", "Sameh"];// an array instead of string
console.log(myFriends40);//😈

console.log(typeof myFriends40);// object, it's an array
console.log(Array.isArray(myFriends40));// true

let str40 = "Bader";//
console.log(Array.isArray(str40));// false, it's a sequence but not an array

/* #41st lesson #4:00:40 Using Length With Array */
/*
  Arrays Methods
  - Length
*/

// Index Starts With 0 [0, 1, 2, ...]
let myFriends41 = ["Ahmed","Mohamed","Sayed", "Alaa"];
console.log(myFriends41.length);// 4
//  if we append an index with absence number as 7 here, it'll make the length as 7, possessing [empty x 2]
// [[ Length = index + 1]]
// if I have 4 indexed elements, I type [4] as a fifth element
// Instead, we use a var, arr[arr.length] = "Gamal";

myFriends41[myFriends41.length] = "Gamal";

// myFriends41.length = 4; // only 4 not including 0 

/* #42nd lesson #4:06:40 Adding && Removing of Arrays */

/*
  Array Methods [Adding and Removing]
  - unshift("", "") Add Element To First Index
  - push("", "") Add Element To End Index
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/
let myFriends42 = ["Ahmed","Mohamed","Sayed", "Alaa"];
console.log(myFriends42);

myFriends42.unshift("Osama", "Nabil");// 1+ The Start

console.log(myFriends42);

myFriends42.push("Samah", "Eman");// 1+ The last

console.log(myFriends42);

myFriends42.shift(); // Removes the First element

console.log(myFriends42);

myFriends42.pop(); // Removes the last element

console.log(myFriends42);

/* #43rd lesson #4:11:14 Searching in Arrays */
/*
  Array Methods [Search]
  - indexOf(Search Element,From Index [Opt])
  - lastIndexOf(Search Element,From Index [Opt])
  - indexOf(ValueToFind, FromIndex[Opt]) [ES7]
*/
let myFriends43 = ["Ahmed","Mohamed","Sayed", "Alaa", "Ahmed"];

console.log(myFriends43);
console.log(myFriends43.indexOf("Ahmed"));// if many are existing, it'll appear only the first one
console.log(myFriends43.indexOf("Ahmed", 2));// if many are existing, it'll appear only the first one
console.log(myFriends43.lastIndexOf("Ahmed"));
console.log(myFriends43.lastIndexOf("Ahmed", -2));

console.log(myFriends43.includes("Ahmed"));// true as 0
console.log(myFriends43.includes("Ahmed", 2));// true as 4
// if not exists, it will output -1
if (myFriends43.lastIndexOf("Bader") === -1) {
  console.log("Not Found");
}

/* #44th lesson #4:16:34 Sorting Arrays */

/*
  Array Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/
let myFriends44 = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

console.log(myFriends44);
console.log(myFriends44.sort());
console.log(myFriends44.reverse());// reverses last sorted array, if 1st wasn't sorted, it'll only reveres it 
// Alphabetically sorted, 1 before 2 overlooking subsequent CHs
//  so 20 comes after 1000, not before; and 20 before 2000 because it has less characters

// we can use compare function with it, as (2) in length to represent binary[bin], eg: myNumbers.toString(2)
// and to Hex[255] as (16), and as Oct(8)
console.log(myFriends44.sort().reverse());// using both with chaining

/* #45th lesson #4:19:34 Slicing Arrays */

/*
  Array Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Starts gets Undefined => 0
  --- Negative counts at the End
  --- If Ends gets Undefined || > Indexes => Slice To The End Array.length
  --- Returns a new Array
  - splice(Start, [Mand], DeleteCount [Opt] [0 No Remove], An Item To Sort [Opt])
  --- If Negative => Starts At The End
*/
let myFriends45 = ["Ahmed", "Sayed","Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends45);
console.log(myFriends45.slice());// counting each index
console.log(myFriends45.slice(1));// Overlooking 0 index
console.log(myFriends45.slice(1, 3));// Overlooking 0 and 3, so [1 2]
console.log(myFriends45.slice(-3));// Counts -3 but continues normally
console.log(myFriends45.slice(1, -2));// overlooking 0, -1, -2 'cause not included
// slice doesn't change original array

myFriends45.splice(0,0, "Sameer", "Samara");// Splice changes the original array [!important]
// 2nd 0 is for [[DeleteCount]], 1st 0 is the appending position
myFriends45.splice(1,2, "Sameer", "Samara");//starts at 1 not 0, and deletes 2 elements, before appending

/* #46th lesson #4:26:34 Joining Arrays */
/*
  Arrays Methods [Joining]
  - concat(array, array) => Returns A new Array
  - join(Separator)
*/
let myFriends46 = ["Ahmed", "Sayed","Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends46 = ["Sameer", "Samara"];
let schoolFriends46 = ["Haythem", "Shady"];
// concat stands for concatenation
let allFriends46 = myFriends46.concat(myNewFriends46, schoolFriends46, " Gameel", [1 ,2]);
// included arrays comes at the end, can append strings and arrays though
console.log(allFriends46);

console.log(allFriends46.join());// separate 'em with comma
console.log(allFriends46.join(""));//set them together
console.log(allFriends46.join(" @ "));// any separator
console.log(allFriends46.join("|").toUpperCase());// chaining string to upperCase

/* #47th lesson #4:30:00 
  Arrays Challenge ✅
*/
let zero47 = 0;

let counter47 = 3;

let my47 = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// Write your code here

console.log(my47);// ["Osama", "Elham", "Mazero", "Ahmed"] me: reverse it and remove -1 && -2
console.log(my47.slice(0, 4).reverse());// or slice(0, length -2) without appending [.] to length ✅

console.log(my47.slice("????"));// ["Elham", "Mazero",]
console.log(my47.slice(1, length -3).reverse());//✅

// "Elzero" // me: two letters of elham, and 4 of mazero  ✅
let elzero47 = my47.slice(1, length -3).reverse();
let Elzero47 = elzero47[0].slice(0,2) + elzero47[1].slice(2,6);
console.log(Elzero47);

console.log();// "rO"
console.log(my47[1][4] + my47[3][0]);//✅

// No numbers allowed to type, use vars

/* #48th lesson #4:32:00 Loop
  [For keyword] and Loop Concept
  for([1] [2] [3]) {
    // Block Of Code
  }

  in for[1] = initialization[launching]
        [2] = condition [looping until it acts]
        [3] = action after looping

  MDN wrote:
  for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement
*/
for (let i = 0; i < 10 ; i++) {
  console.log();
}
//why don't we type <= 10 🤔, because 0 index is counted, so 0 to 9 are 10
/* #49th lesson #4:39:48
  Looping On Sequences
*/

let myFriends49 = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal"];
// Instead of repeating this code 5 times! we use looping
console.log(myFriends49[0]);

for (let i = 0; i < 5; i++) {
  console.log(myFriends49[i]);
  // console.log(myFriends49[0]);
  // by not changing 0 into the var, it'll repeat same code 5 times, and appears a circle with n 5 in the console
}
// to make it more dynamic we change condition into a variable.length as
for (let i = 0; i < myFriends49.length; i++) {
  console.log(myFriends49[i]);
}

// A useful way to use looping is to separate numbers from string as
let myFriends492nd = [1, 2, "Ahmed", "Mazero", 3, 4, "Elham", "Osama", "Gamal"];
let namesOnly49 = [];
// without looping
if (typeof myFriends492nd[0] === 'string') {
  namesOnly49.push(myFriends492nd[0]);
}// and we repeat it until the end of the array
console.log(namesOnly49);

// with looping

for (let i = 0; i < myFriends492nd.length; i++) {
  if (typeof myFriends492nd[i] === 'string') {
    namesOnly49.push(myFriends492nd[i]);
  }
}
console.log(namesOnly49);

/* #50th lesson #4:48:00 Nested loops And Practices */

let products = ["keyboard", "Mouse","Pen","Pad","Monitor"];

let colors = ["red", "green", "black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}
/* #51st lesson #4:52:03 
  Loop Control
  - Break
  - Continue
  - Label 
*/
let products1 = ["keyboard", "Mouse", 10, 20,"Pen","Pad", 30, 40, "Monitor"];

let colors1 = ["red", "green", "black"];
// If we want to type only 3 items we use break!
for (let i = 0; i < products1.length; i++) {
  if (typeof products1[i] === "number" ) {
    continue;
  }
  console.log(products1[i]);// if we don't add it after the check, it'll type all
  // if (products1[i] === "Pen" ) {
  //   break;
  // }
  // console.log(products1[i]);
  // If we type firstly, it'll type "Pen" then stops
}

// we can control break and continue by using label

// we can control the main loop within a sub-loop as this [mainLoop:]

let products2 = ["Keyboard", "Mouse","Pen","Pad","Monitor"];
let colors2 = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products2.length; i++) {
  // if (typeof products2[i] === "number" ) {
  //   continue;
  // }
  console.log(products2[i]);
  nestedLoop: for (let j = 0; j < colors2.length; j++) {
    console.log(`- ${colors2[j]}`);
    if (colors2[j] === "Green") {
      break mainLoop;
    }
  }
}
// We're Not gonna use Label in 100%, but have to get its idea

/* #52nd lesson #4:59:00 
  Loop For - Advanced Example
*/
let products3 = ["Keyboard", "Mouse","Pen","Pad","Monitor"];

let i = 0;// [var] instead of [loop initialization]
for (;;) {
  // we have to append semicolon to set [1st exp]
  console.log(products3[i]);
  i++;//[instead of loop 3rd exp][after printing, to not lose 0 index]
  if ( i === products3.length) {//this is the [condition]
    break;
  }
}
// we can remove the {Curly braces}, and append: break; as
// if ( i === products3.length) break;
// [i++;] = [i = i + 1;] = [i += 1;]
// if i += 1; it'll be passing even numbers, as day by day

/* #53rd lesson #5:03:25 
  Practice -Add Products To Page
*/
let products4 = ["Keyboard", "Mouse","Pen","Pad","Monitor","iPhone"]
let colors4 = ["Red", "Green","Black"];
// we need to sort how many product
let showCount = 5;
// we need to have a dynamic number in a heading
document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}]${products4[i]}</h3>`);//i +1 => showing 1 instead of 0
  for (let j = 0; j < colors4.length; j++) {
    document.write(`<p>${colors4[j]}</p>`);
  }
  document.write(`<p>${colors4.join(" | ")}</p>`);
  document.write(`</div>`);
}
/* #54th lesson #5:10:00
  Loop - While
*/
/*
let index = 0; //initialize comes here
while (index < 10 [condition]) {
  console.log(index);// if we leave it here, it'll run for keeps
  index += 1;//increment Expression
  if (index === 3){
    break;// another place for [condition]
  }
}
*/
let products5 = ["Keyboard", "Mouse","Pen","Pad","Monitor","iPhone"]
let index5 = 0;
while (index5 < products5.length ) {
  console.log(products5[index5]);
  index5 += 1;
}
/* #55th lesson #5:14:50
  Loop - Do, While
*/
let products6 = ["Keyboard", "Mouse","Pen","Pad","Monitor","iPhone"]
let i6 = 0;
while (false) {
  console.log(i6);
  i6++;
}
console.log(i6);// same as before while, we stopped it
// Do while loop, impacts firsts condition, without asking
do {
  console.log(i6);
  i6++;
} while (false);
console.log(i6);// the action, even with false condition
/* #56th lesson #5:18:03
  Loop - Challenge, ✅⅔, ⅓❎
*/
let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"]
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"]
document.write(`<div>We Have X Admins</div>`);
/*
  we have to create | <div>We Have X Admins</div>
  then under it, the number of admins, in a div[dynamically]
  then force the array to stop when sees [stop] string, as stop/samera
  we use if condition for it!
  then Create <hr>, and separate each team with making the members starting with same letter
  as For Ahmed admin, Amgad/Ameer employees, For Osama give Omar and othman
  with hr after each set ... <div>The Admin for Team [n] is ${admin}</div>
  h3 team members: 
  <p> 1 amgad</p> etc [n] ${Employee}
In another Page!!!
        🙃🤔 I tacked sorting strings alphabetically, so A, O, S are separated to each Admin set!!
*/


/* #57th lesson #5:21:19
  Function Intro And Basic Usage
  - What's a function!?
  - User-Defined Vs Build In
  - Syntax + Basic Usage
  - Real Life Examples
  - Parameter + Argument
  - Practical Example
*/
// It's a block of code that impacts specific tasks
// Impacts the origin of [DRY] Don't Repeat Yourself!
console.log(typeof console.log);// It's a built-in function
/*
  function[Keyword] sayHello[Identifier]([The parameter[to alter things]]) {
    // The block of code
}
*/
function SayHello(userName) {
console.log(`Hello ${userName}`);
}
// we need to trigger it -Call it - as:
SayHello();// this is the basic way
// [مُعامل التجربة في الكيمياء === parameter 🧪🤘]

//after defining the parameter, it'll ask for it
SayHello("Bader");//Called [argument][it's the value of the variable]
SayHello("Sayed");
SayHello("Ali");// these are instead of repeating yourself
// and when we change the function values as Hi instead of Hello, it'll do it Only once[DRY]

/* #58th lesson #5:29:17
  Function Advanced Examples
*/
// we can trigger many parameters as:
function sayHello2(userName, age) {
  // changes its place into else statement
  if (age > 20) {
    console.log(`Our App Isn't Suitable For Your Age`)
  } else {
    console.log(`Hello ${userName} Your age is ${age}`);
  }
}
sayHello2("Bader");// undefined, needs age
sayHello2("Sayed", 45);
sayHello2("Osama", 39);//his current age in 22

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(1982, 2021);// the age of Osama
generateYears(1982, 2021,2020);

/* #59th lesson #5:35:22
  Function Return Statement & Use Cases
*/
/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/
function sayHello3(userName) {
  // console.log(`Hello ${userName}`); instead we use return
  return `Hello ${userName}`;//🔽
}
sayHello3("Osama")
// Normally, function have to impact computing before outputting, so we use return
// after creating [return] we can declare it as a var, or log it
let result58 = sayHello3("Bader");
console.log(result58);// 🤘as this one

function calc(num1, num2) {
  return num1 + num2;
}
// we can change things like this one:
let calcResults = calc(10, 20);
console.log(calcResults + 100);
/*
  🔴Return stops the execution of Code,
    and [line terminators] aren't allowed
  🔴
  This won't work and appends ; after return

function calc(num1, num2) {
  return
  num1 + num2;
}
  
*/
function generate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);//if put under [if], won't type 15
    if (i === 15) {
      return `Interrupting`;
    }
  }
}

generate(10, 20)
//it'll stop at 15 because [return statement] interrupts code flow

/* #60th lesson #5:42:27
  Function Default Parameters
  - Function Parameters Default [Undefined]🔴
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/
function sayHello4(username = "Unknown", age = "Unknown") {//3️⃣ making default as unknown
  // if (age === "undefined") {
  //   age = "Unknown";
  // }//🔽[truthy falsy pattern]
  // age = age || "Unknown";// 2️⃣
  return `Hello ${username} Your Age Is ${age}`;
}
console.log(sayHello4("Osama", 38));

/* #61st lesson #5:46:53
  Function Rest Parameters
  - Rest Parameters [...myVar]
  - Only One Allowed
  - Must Be At Last
*/
// function calc2(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
console.log(calc2(10, 20, 10));
/* with Rest parameter we can append many unset ones
  we type: ...parameterName to append a [Rest Parameter]
  [...sth] is an array of arguments 

*/ 

// function calc2(...numbers) {
//   console.log(Array.isArray(numbers))//without triple dots[true]
// }
function calc2(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Final Result: ${result}`;// important to bring the number back after calculation
}
console.log(calc2(10, 20, 10, 30, 50));

/* #62nd lesson #5:53:50
  Function Ultimate Practice
*/
/*
  Function Advanced Practice
  - Parameters
  - Defaults
  - Rest
  - Loop
  - Condition
*/
// we can append rest parameter with other types, but only in the last
// us => userName, ag => age, rt => ourRate , ...sk => skills[rest 📏]
function showInfo (us = "Un", ag = "Un", rt= 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Showed Skills </p>`);
    }
  } else {
    document.write(`<p>Skills Are Hidden</p>`);
  }
  document.write(`</div>`);
}
showInfo("Bader", 22, 20, "Yes", "HTML", "CSS");
/**
 *  The reason of this Video is: 
 * Logical thinking!
 * Scenarios To Each Situation
 * 🟢Ability to append rest📏 with fixed vars, as skills to others🟢
 * Using Default for 🦥 people
 * 🔴We can create a loop inside if sk.length statement🔴
 */
/* #63rd lesson #6:05:13
  Random Arguments Function Challenge ❎
*/

/*
  Function -Random Argument Challenge
  ===================================
  Create Function ShowDetails
  Function Accepts 3 Parameters [a, b, c]
  Data Types For Info Are
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument is Random
  Unsorted Data Outputs Depending On Data Type
  - Use Ternary Conditional Operator
*/
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38);// "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// function showDetails(a, b, c) {
//   if (a === true && typeof b === "string" && typeof c === "number") {
//     console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`);
//   } else if (a === false && typeof b === "string" && typeof c === "number") {
//     console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`);
//   } else {
//     console.log(`Nigga`);
//   }
// }


function showDetails(a, b, c) {//d string ,e number, f true, g false
  typeof a === 'string' ? d = a :
  typeof a === 'number' ? e = a :
  a = true ? f = a :
  a = false ? g = a :
  typeof b === 'string' ? d = b :
  typeof b === 'number' ? e = b :
  b = true ? f = b :
  b = false ? g = b :
  typeof c === 'string' ? d = c :
  typeof c === 'number' ? e = c :
  c = true ? f = c :
  c = false ? g = c :
  console.log(`Hello MotherF`);

  console.log(`Hello ${d}, Your Age Is ${e}, You Are Available For Hire`);
}
//🔴 It didn't work!🔴
showDetails(true, "Osama", 38);
// the data will shuffle, [its argument place will change]

/* #64th lesson #6:08:17
  Anonymous Function With Practice
  - calling Named Function vs anonymous function
  - Argument To another Function
  - SetTimeout
*/
// We can print functions before declaration
console.log(calc3(10, 20));
function calc3(num1, num2) {
  return num1 + num2;
}
// here we type an anonymous function
let calculator = function (num1, num2) {
  return num1 + num2;
};// It has no name.🟢we append ; after its braces
// to invoke it we type its name as:
console.log(calculator(10, 20));// But it must be after declaring the var
// we can name it to get its errors as:
let calculator2 = function elzero(num1, num2) {
  return num1 + num2;
};//🤔not explained yet
// we use this anonymous func for events as clicks etc.
document.getElementById("show").onclick = function () {//no need to name it🟢
  console.log("Show");
};//this is called a [higher-order function]

setTimeout(function () {//it's type after its period as 2s here!
  console.log("Good");// No need to name it though
}, 2000);// 2 seconds
// to use declared functions type it after onclick = 
document.getElementById("show").onclick = sayHello2;
/* #65th lesson #6:16:44 Return Nested Functions */
// It might be the solution for prior challenge 🟢

// example 1
function replyMessage(fName, lName) {
  let message = `Hello`;
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg()//this is its usage
  return message;//returning the original one
}
console.log(replyMessage("Osama", "Mohammed"));
// Example 2
function sayMessage(fName, lName) {
  let message = `Hello`;
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg;//returning the nested function as a value
}
console.log(sayMessage("Osama", "Mohammed"));
// Example 3
function sayMessage1(fName, lName) {//using a nested func inside another nested one
  let message = `Hello`;
  function concatMsg() {//here is the 2nd nested one
    function getFullName() {
      return `${fName} ${lName}`
    }
    return `${message} ${getFullName}`;//instead of 2 values, they're nested now
  }
  return concatMsg;
}
console.log(sayMessage1("Osama", "Mohammed"));

/* #66th lesson #6:23:02
  Arrow function Syntax
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/
// If we have a line on its own, we can remove braces and return, with appending => as
let print = () => 10;
// let print = _ => 10;// Another way, popular in other langs as [go] underscore instead of ()

console.log(print());
/* instead of this normal one, 🔴we can't remove return and parentheses() if more than two params🔴
  let print = () => {
    let a = 10;
    return 10;
  };
  console.log(print());
*/
// let printo = function (num) { // normal one
//   return num;
// };
let printo = (num) => num;// removed itsName, {}, and return, and added =>
// if one argument/param, we can remove () as num instead of (num)
;
console.log(printo(100));

// let printYo = function (num1, num2) {// Normally
//   return num1 + num2;
// };

let printYo = (num1, num2) => num1 + num2;//arrow one, not able to remove (), as for two params
console.log(printYo(100, 50));

//🟢personal notes: arrows are called [lambda] || [fat Arrow] in some other langs🟢

/* #67th lesson #6:29:00
  Scope - Global && Local
*/
// it's the concept of controlling the existing of our vars
// so by it we know where to access vars, and when!
var a67 = 1;
let b67 = 2;//these two are Global, accessible from everywhere

function showText() {
  console.log(`Function - From Global${a67}`);
  console.log(`Function - From Global${b67}`);
  var a67 = 10;
  let b67 = 20;// these two are Local, can't print before declaration
  //It reads Locally and if not existing, search globally
}
console.log(`From Global${a67}`);
console.log(`From Global${b67}`);

showText();

/* #68th lesson #6:34:50
  Scope - Block [If, Switch, For]
*/
// Var in if statements can output errors, so we use let and const
var x68 = 10;
if (10 === 10) {
  let x68 = 50;/*Don't swap both, must declared before print*/
  console.log(`From If Block ${x68}`);
}
console.log(`From Global ${x68}`);
/* #69th lesson #6:39:30
  Scope - Lexical
*/
/*
  Scope 
  - Lexical Scope

  🟢🔴Search  For🔴🟢
  - Execution Context
  - Lexical Environment
*/
/* 
  The child can take from his father, but father can't,
  as nested blocks
*/
/* #70th lesson #6:44:30
  Arrow Function Challenge ❎
*/

// [1] One Statement In a Function
// [2] Convert To Arrow Function
// [3] Print THe Output [Arguments May Change]

let namesTest = function() {
  // Parameter ?
  return "???";
};

console.log(namesTest("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohammed], [Ali], [Ibrahim] => Done !

// 🟢length is unknown, and [], => are printed as string, not function

let names = function (...sth) {
  console.log(`String [${sth.join(" ],")} => Done !`);
};

/* ================================== 2nd task*/

// [1] Replace ??? IN Return Statement To Get the Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Argument TO Get The Output

let myNumbersTest = [20, 50, 10, 60];
let calcTest = (one, two, ...nums) => "???";


console.log(calcTest(10, "???", "???"));// 80

let calc = (one, two, ...nums) => one + two + nums;
console.log(calcTest(10, myNumbersTest[1], myNumbersTest[0]));
// 🟢 1st func can be called inside calc one, only with its index

/* #71st lesson #6:47:00
  Higher Order Functions - Map
*/

/*
  Higher Order Functions
  ---> are functions accepts functions as parameters and/or returns a function.

  - Map
  --- A method that creates a new array
  --- popular with results of calling provided functions in each element
  --- in the calling array🤔

  Syntax map(callBackFunction(Element, index, array) { }, thisArgu)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map returns A New Array

  Examples
  - Anonymous Function
  - Named Function
*/
let muNums = [1, 2, 3, 4, 5, 6];
let newArray = [];

for (let i = 0; i < muNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

let addSelf = myNums.map(function (element, index, arr) {
  console.log(`Current Element =>  ${element}`);
  console.log(`Current Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(`This => ${this}`);
  // return element + element;
}, 10);//10 is ${This}
// el => element, i => index
console.log(addSelf);// ❇️ it
// Element [mand], 2nd && 3rd [Opt]


let addSelf2 = myNums.map((el) => el + el);

console.log(addSelf2);//same result as above, when printing only element

function incrementing(ele) {
  return ele + ele;
}
let incre = myNums.map(incrementing);

/* #72nd lesson #6:55:30
  Higher Order Functions - Map Practice
*/

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean value
*/
let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";
// Solution
let sw = swappingCases.split("").map(function (ele){//converting string into an array
  // Condition ? True : False
  return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
}).join("");//join to return as string

console.log(sw);
// Arrow Function Version
let sw2 = swappingCases.split("").map((ele) => ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()).join("");
console.log(sw2);//ele can be as var [a]

// 2nd one
let inv = invertedNumbers.map(function (ele) {
  return -ele;// Just remember,[نفي النفي إثبات]
})
console.log(inv);
// 3rd one
let ign = ignoreNumbers.split('').map(function (ele) {
  return isNaN(parseInt(ele)) ? ele : "" ;
}).join("") //using isNaN, and parseInt
console.log(ign);

/* #73rd lesson #7:04:04
  Higher Order Functions - Filter
*/

/*
  - Filter
  --- method creates a new array
  --- with all elements passes the implemented test by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) {}, ThisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/
// Get Friend names starting with A
let friends73 = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// Get Only Even Numbers
let numbers73 = [11, 20, 2, 5, 17 , 10];
// Map Vs Filter

let addMap = numbers73.map(function (el){
  return el + el;
});
console.log(addMap);
// Filter
let addFilter = numbers73.filter(function (el){
  return el + el;// because it didn't see anything to filter, it got [true], so no changes
});
console.log(addFilter);

let filterFriends = friends73.filter(function (el){
  return el.startsWith("A");// It's a condition
  // same as el.startsWith("A"); ? true: false;
});
console.log(filterFriends);

let evenNumbers = numbers73.filter(function (el){
  return el % 2 === 0;
});
console.log(evenNumbers);
/* #74th lesson #7:10:35
  Higher Order Functions - Filter Practice
*/

/*
  Filter
  - Filter Longest Word By Number
*/

// FIlter +4 letters Words
let sentence = "I Love Foood Code Too Playing Much";

// Ignore Numbers
let ignoreNumbers74 = "Elz123er4o";

let ing74 = ignoreNumbers74.split("").map(function (el){
  return isNaN(parseInt(el)) ? el : "";
});
