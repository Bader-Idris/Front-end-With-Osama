const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
Element.prototype.$ = function (selector) {
  const elements = this.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
const input = $('.input'),
      submit = $('.add'),
      tasksDiv = $('.tasks')
      ;
let tasksArray = [];
submit.onclick = () => {
  if (input.value !== '') {
    addTaskToArray(input.value);
    input.value = '';
  }
};

function addTaskToArray(taskTxt) {
  const task = {
    id: Date.now(),// good idea of making id special by making it as this
    title: taskTxt,
    completed:false,
  };
  tasksArray.push(task);
  appendMe(tasksArray);
};
function appendMe(tasksArray) {
  tasksDiv.innerHTML = '';
  tasksArray.forEach(task => {
    let div = document.createElement('div'),
        span = document.createElement('span');
    div.className = 'task';
    div.dataset.id = task.id;
    div.appendChild(document.createTextNode(task.title));
    span.className = 'del';
    span.appendChild(document.createTextNode('Delete'))
    div.appendChild(span);
    tasksDiv.appendChild(div);
  });


  

};