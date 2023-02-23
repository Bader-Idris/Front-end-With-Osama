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

let deleteMe = document.getElementsByTagNameNS('p');
let task = document.querySelectorAll('.task');
document.querySelectorAll('.task').forEach((elem)=>{
  task.addEventListener("click",(e)=>{
    elem.remove();
  });
})
// document.querySelectorAll('.task').forEach((elem)=>{
//   elem.addEventListener("click",(e)=>{
//     elem.remove();
//   });
// })


// let taskSet = document.querySelectorAll('.task');
// taskSet.forEach((li)=>{
//   li.addEventListener("click",(e)=>{
//     // e.currentTarget.classList.remove('task');
//     e.parentElement.remove();
//   });
// });

// for (let i = -1; i < count; i++) {
//   // document.querySelector('.task p').parentElement.remove();
//   document.querySelector('.task p').parentElement.remove();
//   document.querySelector("[name='username']");
// }