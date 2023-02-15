
// pick this HTML text by using 15 methods,
// 4 as querySelector and 4 as querySelectorAll
<div id="elzero" class="element" name="js">JavaScript</div>

let myIdElement = document.getElementById("elzero");
let myTagElement = document.getElementsByTagName("div");
let myClassElement = document.getElementsByClassName("element");
let myQueryName = document.getElementsByName('js');
let myQueryElement = document.querySelector(".special");
let myQuery2 = document.querySelector("#elzero");
let myQuery3 = document.querySelector("[name='js']");
let myQuery4 = document.querySelector("div");
let myQuery5 = document.querySelector("[class='element']");//don't count it
let myQuerySeries = document.querySelector("body .special");//don't count it

let myAllQueryElements = document.querySelectorAll(".special");
let myQueryAll2 = document.querySelectorAll("#elzero");
let myQueryAll3 = document.querySelectorAll("[name='js']");
let myQueryAll4 = document.querySelectorAll("div");
let myQueryAll5 = document.querySelectorAll("[class='element']");//don't count it
// 3 remaining❎


myQuery4.getAttribute()
myQuery4.getAttributeNS()
myQuery4.getAttributeNames('js')
myQuery4.getAttributeNode()
myQuery4.getAttributeNodeNS()
console.log(myTagElement[0]);//if it's applicable we can get a double of each, but let it as last choice