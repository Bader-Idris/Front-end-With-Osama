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
// Search for [Loosely typed lang VS Strongly typed lang], JS is loosly, C is strongly
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
  To Enable/Disable formation of code we search for[formatonsave] in settings

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
// Got to [babeljs.io] to see, legacy code Tragedy 😁🤯
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

/* Challenge 2 */
let d22 = "-100", e22 = "20", f22 =30, g22 = true;
// Use only variable Values
// Don't Use A Variable Twice
console.log(-d22 * +e22);// must be 2000
console.log();// must be 173, Man it socks


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

/* #26th lesson #2:27:30 Number Challenge */
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
// Use Variables b + d To Output These Values [b = 200.5, d = 2.4]

console.log();// 66.67 => String ❎
console.log();// 67 => Number ❎
//The useful hint is that when using a function as math.round(),
// we can use anything inside as math.ceil(), so 
// console.log(Math.random(Math.ceil())); Extremely IMPORTANT To solve the challenge
// codepen.io student links for solutions are in the description of the main 🧪 video

/* #27th lesson #2:29:40 String Methods Part 1 */

