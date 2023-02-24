// 102nd lesson 00:00:10 What's BOM

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window 
  --- Window Contains The Document Object
  --- All Global Variables, Objects, and Functions are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do with Window Object?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After A Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Be Used Later🔴IMPORTANT🔴
*/

// 103rd lesson 00:04:20 Alert, Confirm, Prompt
/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/
// as we know, in global scope, there's no difference in🔽

window.alert('Test');
this.alert('Test');
alert('Test');
// alert will stop every other code after it, as 
console.log('Test');
/* We'll not need to use these three in modern life, see other libraries as:
  https://sweetalert2.github.io
  see normal alert Vs. sweetAlert2 inside the site. I 💗 It
*/

/*
  We use confirm when user has decesions to make, as:
  -!! do you wanna remove this item permanently!! 🆗⛔
*/
let confirmMsg = confirm('Are you sure?');
console.log(confirmMsg);
if(confirmMsg === true) console.log('Item Deleted');
else console.log('Item Isn\'t Deleted');

// prompt wants us to write sth

let promptMsg = confirm('Select a Free Time for An Appointment', 'Use three Letters as Sat');
// let promptMsg = confirm('message', 'default placeholder');
console.log(promptMsg);
if(promptMsg === true) console.log('Item Deleted');
else console.log('Item Isn\'t Deleted');

// 104th lesson 00:13:15 setTimeout And clearTimeout
/* 🔴EXTREMELY IMPORTANT🔴
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/
setTimeout(() => {//this is an anonymous function, whether if arrow or normal
  console.log(`Msg`);
}, 3000);// in milliseconds this is 3s

function sayMsg(){
  console.log(`I'm A Msg`);
};
setTimeout(sayMsg, 3000);
// we can't append the argument in the function as:
// setTimeout(sayMsg('Hanady'), 3000);
// but we can as:
function sayHiBabe(babe, age){
  console.log(`I'm A Msg For You ${babe}, sincere love, ${age} is here`);
};
setTimeout(sayHiBabe, 3000,'Hanady',29);
// setTimeout, done. clearTimeout stops the [setTimeout]

let handlerCounter = setTimeout(sayMsg, 3000);
function sayMsg(){
  console.log(`I'm A Msg`);
};
// Handler is the ID for timeout
let btn = document.querySelectorAll('button');
btn[0].onclick = function (){
  clearTimeout(handlerCounter);// here handleCounter is 1
  // clearTimeout(1);// so this is useful
};
// so WHEN I CLICK ON THE BUTTON, IT STOPS THE Msg FUNCTION
// setTimeout 🔴it's extremely important🔴

// 105th lesson 00:20:05 setInterval And clearInterval
/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
    similar to setTimeout, but setInterval repeats the function repeatedly
    meaning: setInterval waits for 3000 then repeats after 3000 or until using clearInterval
*/
setInterval(function (){
  console.log(`I'm A Msg`);
},1000)
// same as:
setInterval(sayHiBabe, 2000,'Hanady',29);

function sayHiBabe(babe, age){
  console.log(`I'm A Msg For You ${babe}, sincere love, ${age} is here`);
};
// see this
let div = document.querySelectorAll('div');
function countdown() {
  div[0].innerHTML -= 1;
  if (div[0].innerHTML === '0') {// it's in string not as number
    clearInterval(counter);
  }
}
countdown();//calling it, or 🔽
let counter = setInterval(countdown, 1000);

// 106th lesson 00:24:25 Window Location Object
// Important
/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/
window.location//or console.log(location); same results
window.location.href// our hyper text reference as https://www.google.com
// this is all getting attributes
// 💋right click on ◀️ or ▶️ button in your browser💋 to see tab's history
// current page isn't in history, when you pass to another, it'll be gathered
// we'll take things to delete that history!
window.location.href = "https://www.google.com";
// we can go directly to our section as:
location.href = '/#sec02';
location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#description";

console.log(location.host)// host name and its port
console.log(location.hostname)// host name

console.log(location.protocol);// it's HTTP || HTTPS
console.log(location.hash);// as #sec02, when we're in it at thy address bar 
// as http://127.0.0.1:5500/#sec02

// we'll need to separate it to check for things, to know where the user came from
// or what did he/she opened etc.

// location.reload(); //we'll need it as for when user saves settings

location.replace('https://elzero.org');// it removes current page from section history
location.assign('URL bla bla bla');//doesn't remove current page'history

// 107th lesson 00:36:31 Window Open And Close
/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- width [Num]
  --- height [Num]
  --- left [Num]
  --- top [Num]

  🔴Search for🔴
  - window.Open window Features
*/
window.close()//exclusively close windows opened by JS
window.open('','_self')//target's default is _blank[2nd attr]
// 1st attr's def is blank page
// features are as for X Y Z, is it resizable or not? etc...
// 4th is boolean value for replacing as above
setTimeout(() => {
  window.open('https://google.com','', 'width=400,height=400,width=400,left=400,top=100');
}, 2000);
// width,height ... , we don't type px for pixels

// 108th lesson 00:42:25 Window History Object
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  🔴Search for🔴 to get Advanced in it
  - pushState() + replaceState()
*/
history.length;// the pages you visited and current one
history.back();// the previous page
history.forward();// the next page. if last. it'll return undefined
history.go(-1);//◀️prior one, 0 current, 1 next
history.go(-3);//third 🔽 when thou see by clicking right button on history bar in thy browser

// 109th lesson 00:45:47 Scroll, Focus, Print, Stop
/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// when You Click On Esc Key When Downloading Page Resources, It Stops, as for images etc.
let myNewWindow = window.open("https://www.google.com",'','width=500,height=500,left=500');
myNewWindow.focus();//when we're at the parent page, we focus on child one
myNewWindow.close();// we can, because we opened it
// scrollTo && scroll are [equals] && supported in various browsers
// but scroll isn't supported in safari[apple's browser]
window.scrollTo(500,200);
window.scrollBy(500,200);//starting from last point, not inherently as scrollTo

window.scrollTo({
  left: 500,
  top: 200,
  behavior: 'smooth'
});
// there are some methods that scrolls an entire page,
// and some other good features

// 110th lesson 00:53:32 Scroll To Top Using ScrollX && Y
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
  // old browsers prefer using [Alias] with
*/
// we check
console.log(window.scrollX === window.pageXOffset); //true

window.onscroll = () =>{
  if (window.scrollY >= 600) {
    // console.log(`Scrolling Y Value Is ${window.scrollY}`)
    btn[1].style.display = 'block';
  }else btn[1].style.display = 'none';
}
btn[1].onclick = function (){
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth',
  });
}

// 111th lesson 00:59:12 Local Storage
/*🔴EXTREMELY IMPORTANT🔴 even more than upcoming lessons
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/
/*
  Osama spoke about this design: https://www.youtube.com/playlist?list=PLDoPjvoNmBAzvmpzF-6l3tAviiCPbwkB8
  it's named  special design master
  though he said:
  and Contains Many Practical Concepts
  in JavaScript and DOM🔴💋
*/
window.localStorage.setItem('color','#2490ff');//blue
// window.localStorage.setItem('color','#fc2455');//red
// in console, it prints as Storage

/*
  To see our Storage:
  beside console >> go to [Application]
  Storage 👇 Local Storage 👇 our site
  
  It'll show us our values as keys && values
*///all 3 methods are set
window.localStorage.fontWeight = "bold";//these are other approaches
window.localStorage['fontSize'] = "20px";
// now the get
console.log(window.localStorage.getItem('color'));// as working with any object 
console.log(window.localStorage.color);
console.log(window.localStorage['fontSize'])
// changing body BG color:
document.body.style.backgroundColor = window.localStorage.getItem('color')//any of three
// it saves the current value
// to remove we type:
window.localStorage.removeItem('fontSize');
// this removes all. clear
window.localStorage.clear();//length will be zero
// when length is +1 we use Get Key:
console.log(window.localStorage.key(0));

// 112th lesson 01:08:40 Local Storage Color Application Practice
// I brought the script from https://elzero.org/category/courses/javascript-bootcamp/

// 113th lesson 01:18:33 Session Storage And Use Cases
/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same URL = New Session
*/
// Local storage Vs. Session Storage
// session doesn't save values as local one
// 🔷when I close the TAB, session will get vanished🔷
// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue"); they're different, so you can use both

// When You Open same Tab As new, it'll get A NEW SESSION
//🔴To save same session data, DUPLICATE THE TAB🔴
document.querySelector(".name").onblur = function () {
  // console.log(this.value);
  window.sessionStorage.setItem("input-name",this.value);
  // don't make is as localStorage, User will be scared.
  // sessionStorage => refreshing ✅, closing ❎
};

// 114th lesson 01:25:15 BOM Challenge ❎💩
/* elzero tips:
  Don't start coding when you see problems!
  separate sections into phases[pseudo code as YOU LEARNED]
  Do each step in a separate FUNCTION
  or you'll get [spaghetti code🍕🍝]
*/
/* FORM or DIV, same functionality
  <body>
    <div class="container">
      <div class="form">
        <input type="text" class="input">
        <input type="submit" class="add" value="Add Task">
      </div>
      <div class="tasks"></div>
    </div>
    <script src="main.js"></script>
  </body>
*/
// text field eg: create Python Course [Add Task]
// tasks field => 🔼 [as block, its key is[title]] && delete button on right edge
// save values in localStorage
// delete will vanish both in storage and the element

// 115th lesson 01:27:41 Destructuring Arrays Part 1
/*
  Destructuring
  "is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps And sets them into new, distinct variables."
  - Destructuring Array
*/
let myFriends = ["Ahmed","Sayed","Ali","Maysa" ];
let [first,second,third,forth] = myFriends;// destructuring is done✔️

console.log(first);
console.log(second);
console.log(third);
console.log(forth);
// if we type: let [first = 'A'] = myFriends
// 'A' will not be valuable, it won't redeclare it, but type myFriends' first variable
// and if it's not declared it'll do declare it
// to pass an element inside the array, type an empty space as:
let [uno, dos, ,cuatro] = myFriends;// it'll pass 'Ali'

// 116th lesson 01:33:47 Destructuring Arrays Part 2
let myFriendsDist = ["Ahmed","Sayed","ali",["Shady", "Amr",["Mohamed","Gamal"]]];
console.log(myFriendsDist[3][2][1]);

// little challenge
// let alf = myFriendsDist[3][0];// use spaces!
// let bah = myFriendsDist[3][2][1];// use spaces!

// let [,,,alf,,bah,,] = myFriendsDist;//shady✅, gamal❎because I didn't access the nested array using []as
// let [,,,[alf,,[,,bah]]] = myFriendsDist;//I added one more comma
let [,,,[alf,,[,bah]]] = myFriendsDist;//✅✅
console.log(alf);// Shady
console.log(bah);// Gamal
// he used a lovely way to teach us, cloning the prior one, and only removing unimportant values,
//  changing string into our var,and finally = myFriends ||  it was identical

// 117th lesson 01:38:00 Destructuring Arrays Part 3 Swap Variables
// Destructuring Array => Swapping variables
let book = "video";
let video = "book";
/* This is swapping, too boring, see the love downwards
// Save book value in stash
let stash = book;// Video
// change Book value
book = video;// Book

// Change Video value
video = stash;// Video
*/
[book, video] = [video, book];// swapping using destructuring love
console.log(book);
console.log(video);

// 118th lesson 01:41:25 Destructuring Objects Part 1
const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};
console.log(user.theName);//the normal property calling as we know
const { theName, theAge, theTitle, theCountry} = user;//for updating these the values wrap it all as🔷
// { theName, theAge, theTitle, theCountry} = user;//this = means following:
// they ask us to wrap the whole object within  (parenthesis)
({ theName, theAge, theTitle, theCountry} = user);// as this🔷

console.log(theName);// as a normal variable
// if we pass a property, we don't need to add ,, as arrays, see:
// const { theName, theAge, theCountry} = user;

// 119th lesson 01:46:20 Destructuring Objects Part 2
/*
  Destructuring Object
  -- Naming Variables
  -- add New Property
  -- Nested Object
  -- Destructuring Only Nested Objects
*/
