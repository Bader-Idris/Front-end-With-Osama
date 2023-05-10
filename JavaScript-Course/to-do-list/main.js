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
      tasksDiv = $('.tasks'),
      deleteAll = $('.delete-all-btn')
      ;
let tasksArray = [];
// check if localStorage isn't empty [EXTREMELY IMPORTANT FOR NOT LOSING DATA]
if (localStorage.getItem('tasks')) {
  tasksArray = JSON.parse(localStorage.getItem('tasks'));
}
if (localStorage.getItem('deleteAll') == 'appeared') {
  deleteAll.classList.add('active');
}
// invoked initially
takeMeToLocStorage();

submit.onclick = () => {
  if (input.value !== '') {
    addTaskToArray(input.value);
    input.value = '';
  }
  deleteAllAppearance();
};
tasksDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('del')) {
    deleteTaskWith(e.target.parentElement.dataset.id);//return all ids but not me
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains('task')) {
    toggleStatusTask(e.target.dataset.id);
    e.target.classList.toggle('done');
  }
});

function addTaskToArray(taskTxt) {
  const task = {
    id: Date.now(),// good idea of making id special by making it as this
    title: taskTxt,
    completed:false,
  };
  tasksArray.push(task);
  appendMe(tasksArray);
  addMeToLocStorage(tasksArray);
};
function appendMe(tasksArray) {
  tasksDiv.innerHTML = '';
  tasksArray.forEach(task => {
    let div = document.createElement('div'),
        span = document.createElement('span');
    div.className = 'task';
    div.dataset.id = task.id;
    // checking if done is true
    if (task.completed) {
      div.className = 'task done';// new Idea adding many
    }
    div.appendChild(document.createTextNode(task.title));
    span.className = 'del';
    span.appendChild(document.createTextNode('Delete'))
    div.appendChild(span);
    tasksDiv.appendChild(div);
  });
};
function addMeToLocStorage(tasksArray) {
  // it's appearing that, this is a famous using of localStorage
  //time is the strange thing you were seeing previously
  window.localStorage.setItem('tasks', JSON.stringify(tasksArray));
  
};
function takeMeToLocStorage() {
  let data = window.localStorage.getItem('tasks');
  if (data) {
    let tasks = JSON.parse(data);
    appendMe(tasks);// this is the love of the entire lesson
  }
  // invoking above is mandatory
};
function deleteTaskWith(taskId) {
  // 😲🔴FOR EXPLANATION🔴😲
  // for (let i = 0; i < tasksArray.length; i++) {
  //   console.log(`${tasksArray[i].id} === ${taskId}`);// because of not getting this, you failed
  //   if (tasksArray[i].id === taskId) {
  //     tasksArray[i].id = tasksArray[i].id;
  //   }
  // }
  tasksArray = tasksArray.filter(e => e.id != taskId);
  addMeToLocStorage(tasksArray)
};
function toggleStatusTask(taskId) {
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].id == taskId) {// ⚠️don't make me identical⚠️
      // tasksArray[i].completed == false ? tasksArray[i].completed = true : tasksArray[i].completed = false;
      tasksArray[i].completed = !tasksArray[i].completed;
    }
  }
  addMeToLocStorage(tasksArray)
};
function deleteAllAppearance() {
  if (tasksDiv.childElementCount == 0) {
    localStorage.setItem('deleteAll', 'vanished');
    deleteAll.classList.remove('active');
  } else {
    localStorage.setItem('deleteAll', 'appeared');
    deleteAll.classList.add('active');
  }
};
deleteAll.onclick = () => {
  tasksDiv.innerHTML = ''
  localStorage.removeItem('tasks')
  tasksArray = [];
  deleteAllAppearance();
};
// that was a real hard mission because of chaining local storage