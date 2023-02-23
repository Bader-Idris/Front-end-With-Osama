/* 
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
let taskField = document.querySelector('.input').value;
document.querySelector('.add').addEventListener('click', function(){
  let div = document.createElement('div');
  let textNode = document.createTextNode(taskField);
  div.appendChild(textNode);

  return document.body.appendChild(div);;
  // let delButton = document.createElement('p');
})

function createAnElement(textContent) {
  let element = document.createElement("div");
  let textNode = document.createTextNode(textContent);
  element.appendChild(textNode);
  return element;
}
// let div = createAnElement("div", "Hello niggas");
// document.body.appendChild(div);