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
*/