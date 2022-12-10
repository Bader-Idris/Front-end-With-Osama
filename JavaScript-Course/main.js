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
  iside it there'e a property called close, when clicked it'll close the window
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

// ##7th lesson ##:36:21 Output To Screen
