
// pick this HTML text by using 15 methods,
// 4 as querySelector and 4 as querySelectorAll
<div id="elzero" class="element" name="js">JavaScript</div>

let myIdElement = document.getElementById("elzero");
let myTagElement = document.getElementsByTagName("div");
let myClassElement = document.getElementsByClassName("element");
let myQueryName = document.getElementsByName('js');
// console.log(myTagElement.getAttribute("class"));
let myQueryElement = document.querySelector(".special");
let myAllQueryElements = document.querySelectorAll(".special");// if many


let myQuery2 = document.querySelector("#elzero");
let myQuery3 = document.querySelector("js");
let myQuery4 = document.querySelector(".special");
let myQuerySeries = document.querySelector("body .special");//check before it


document.body.getAttribute()
document.body.getAttributeNS()
document.body.getAttributeNames()
document.body.getAttributeNode()
document.body.getAttributeNodeNS()

// let myAllQuerySeries = document.querySelectorAll(".special");




console.log(myTagElement[0]);//if it's applicable we can get a double of each, but let it as last choice