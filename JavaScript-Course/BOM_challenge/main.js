document.querySelector('.add').addEventListener('click', function(){
  let text = document.querySelector('.input').value;
  let div = document.createElement('div');
  let textNode = document.createTextNode(text);
  let tasks = document.querySelector('.tasks');
  let delButton = document.createElement('p');
  let deleting = document.createTextNode('Delete');
  let contain = document.createElement('div');
  let count = document.querySelector('.tasks').childElementCount;
  div.appendChild(textNode);
  contain.appendChild(div);
  delButton.appendChild(deleting);
  contain.append(delButton);
  contain.setAttribute("class", "task");
    for (let i = -1; i < count; i++) {
      contain.setAttribute("id", `del-${i+1}`);
    }
  tasks.appendChild(contain);
});

// Deletion didn't work, and afterwards I need to create localStorage values for Divs
//  I create, then delete them when clicking on delete button
// 5:25 PM 2/23/2023 🤮💩
