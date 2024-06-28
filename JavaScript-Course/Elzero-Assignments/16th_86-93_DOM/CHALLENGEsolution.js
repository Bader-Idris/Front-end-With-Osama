/* Final results
<div class="box" title="Element" id="id-1">Hello</div>
<div class="box" title="Element" id="id-2">Hello</div>
<div class="box" title="Element" id="id-3">Hello</div>
*/

const results = document.querySelectorAll(".results");

document.forms[0].onclick = function (e) {
  const elNumber = +document.querySelector('input[type="number"]').value;
  const elText = document.querySelector('input[type="text"]').value;
  const myEl = document.querySelector('select[name="type"]').value; //div or section
  const myB = document.querySelector('input[name="create"]'); //the submit button
  const results = document.querySelector(".results");
  for (let i = 0; i < elNumber; i++) {
    let textNode = document.createTextNode(elText);
    let element = document.createElement(myEl);

    element.appendChild(textNode);
    element.setAttribute("title", "Element");
    element.setAttribute("class", "box");
    element.setAttribute("id", `id-${i + 1}`);

    results.appendChild(element);
    document.body.appendChild(results);
  }
  e.preventDefault();
};
/*
document.links[3].onmouseenter = function (event) {
  console.log(event);
  event.preventDefault(); //to stop going to google, and other sets
  // look for return value this. onConsole💚
};


let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
document.forms[0].onsubmit = function (e) {
  let userValid = false, let ageValid = false;
  if (userInput.value !== "" && userInput.value.length <= 10) userValid = true; 
  if (ageInput.value !== "") ageValid = true;
  if (userValid === false || ageValid === false) e.preventDefault();
};
*/