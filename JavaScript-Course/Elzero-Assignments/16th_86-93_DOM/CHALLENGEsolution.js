
// if number 3 divs appended. result must be: 
/*
<div class="box" title="Element" id="id-1">Hello</div>
<div class="box" title="Element" id="id-2">Hello</div>
<div class="box" title="Element" id="id-3">Hello</div>
*/

function generateEl(num,str) {
  const elNumber = document.querySelector('input[type="number"]');
  const elText = document.querySelector('input[type="text"]');
  const myEl = document.querySelector('select[name="type"]');
  const result =  document.querySelectorAll('.results');

  const myDiv = document.createElement("div");
  const mySec = document.createElement("section");
  const myTitle = document.createAttribute("title");
  const myId = document.createAttribute("id");
  const myText = document.createTextNode("Product One");
  
  for (let i = 0; i < result.length; i++) {
      result[i].setAttribute("title", "Element");
      result[i].setAttribute("id",`id-${i}`);
  }

  // result.innerText = 3;
}
document.querySelector('input[type="number"]').addEventListener('input', generateEl);

/*
<form action="">
    <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
    <input type="text" name="texts" class="input" placeholder="Elements Text" />
    <select name="type" class="input">
      <option value="Div">Div</option>
      <option value="Section">Section</option>
    </select>
    <input type="submit" name="create" value="Create" />
    <div class="results"></div>
  </form>
*/

let myElementYo = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");

myElementYo.className = "product";
myElementYo.setAttributeNode(myAttr);
myElementYo.setAttribute("data-test", "Testing");

// Append Text To Element
myElementYo.appendChild(myText);

// Append Comment To Element
myElementYo.appendChild(myComment); //if before div's text,AddItAbove myText

// Append Element To Body
document.body.appendChild(myElementYo);

function paraMi(a) {
  mainH3.appendChild(h3TextChildren);
  mainDiv.appendChild(mainH3);
  mainP.appendChild(pTextChildren);
  mainDiv.appendChild(mainP);
}
for (let i = 0; i < 100; i++) {
  // console.log(paraMi[a] + i);❎ wasn't able to loop text 100-time
  mainH3.appendChild(h3TextChildren)[i];
  mainDiv.appendChild(mainH3)[i];
  mainP.appendChild(pTextChildren)[i];
  mainDiv.appendChild(mainP)[i];
}

/* useful to append elements




// create a main div with class "product", and inside it add h3 and p both with text

let mainDiv = document.createElement("div");
let pTextChildren = document.createTextNode(`Product Description`);
mainDiv.className = "product";

// Add Heading Text
mainH3.appendChild(h3TextChildren);
// Add Heading To Main Element
mainDiv.appendChild(mainH3);
// Add Paragraph Text
mainP.appendChild(pTextChildren);
// Add Paragraph To Main Element
mainDiv.appendChild(mainP);


*/