
// pick this HTML text by using 15 methods,
// 4 as querySelector and 4 as querySelectorAll
<div id="elzero" class="element" name="js">JavaScript</div>

let myIdElement = document.getElementById("elzero");
let myTagElement = document.getElementsByTagName("div");
let myClassElement = document.getElementsByClassName("element");
let myQueryElement = document.querySelector(".special");
let myAllQueryElements = document.querySelectorAll(".special");// if many

let myQueryName = document.getElementsByName('js');
console.log(myTagElement.getAttribute("class"));


console.log(myTagElement[0]);