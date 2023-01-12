/* only [DOM] in adding content
  Everything is having its class

  header
  elzero logo on left, 4 ul on right[Home About Service Contact]
  🔼 same as 3rd template, 71 pixels height. 
  logo's color is same as footer's background
  padding-left: 20px

  .content div
  inside <span>${n}</span>product</div>
  15 products separated with flex into 5 rows and 3 columns
  20px margin  text-align: center  each number has Product beneath it
  he asks to use loop n*15


  footer with 70px height, its text is Copyright 2021
  background: #19986d;
*/

/*header must be as:
  <div class="header" id="header">
    <div class="container">
      <a href="#" class="logo">Elzero</a>
      <ul class="main-nav">
        <li><a class="active" href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Service">Service</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </div>
  </div>

*/

let myHead = document.createElement("div");
let logo = document.createTextNode("Elzero");
let myDiv = document.createElement("div").cloneNode(true);
let myList = document.createElement("ul");
let myOrdered = document.createElement("li").cloneNode();
// let myAttr = document.createAttribute("data-custom");

myHead.className = "header";
myDiv.className = "logo";
myList.className = "main-nav";
// myHead.setAttributeNode(myAttr);
// myHead.setAttribute("data-test", "Testing");

// Append Text To Element
myDiv.prepend(logo);
// myList.prepend(myOrdered[0] );
// for (let i = 0; i < 4; i++) {
//   myList.append(i + myOrdered);//see reduce
// }
let unordered = [ 0,"Home", "About", "Service", "Contact"];

let testing = myList.append(myOrdered);

let add75 = unordered.reduce(function(acc, current, index, arr){
  document.body.append( current);
  return;
});
console.log(add75);
// myHead.prepend(logo);

// Append Element To Body
document.body.prepend(myList);
document.body.prepend(myDiv);
// document.body.prepend(myHead);


// append[in last index], prepend[in first index🟢]

// I'll be back after solving every Assignment until this lesson. Starting the real working😁🤓🤪