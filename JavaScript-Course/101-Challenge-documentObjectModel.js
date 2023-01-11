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
let myHead = document.createElement("div");
let myText = document.createTextNode("Elzero");
// let myAttr = document.createAttribute("data-custom");
let myDiv = document.createElement("div").cloneNode(true);
let myList = document.createElement("ul");
let myOrdered = document.createElement("li");

myHead.className = "header";
myDiv.className = "logo";
// myHead.setAttributeNode(myAttr);
// myHead.setAttribute("data-test", "Testing");

// Append Text To Element
myDiv.prepend(myText);
// myHead.prepend(myText);

// Append Element To Body
document.body.prepend(myDiv);
// document.body.prepend(myHead);


// append[in last index], prepend[in first index🟢]