
let addClass = document.querySelector('input.classes-to-add');
let removeClass = document.querySelector('input.classes-to-remove');
let appendedToDiv = document.querySelector('.classes-list > div');

window.onload = function () {
  addClass.focus();
  addClass.onblur = (()=>{
    removeClass.focus();
  });
};

addClass.addEventListener('blur', function (e) {
  let createdDiv = document.createElement('span');
  this.value.split(' ').map((e)=>{
    if (e !== "" || e != 0) {
      createdDiv.textContent = e;
      createdDiv.classList.add(e);
      for (let i = 0; i < e.length; i++) {
        appendedToDiv.appendChild(createdDiv);
      }
    }
    // e !== "" || e != 0 ? console.log(e) : false;
  });
  this.value = '';
},);

removeClass.addEventListener('blur', function (e) {//we might use removeEventListener
  this.value.split(' ').map((e)=>{
    if (e !== "" || e != 0) return e;
  })
  
  for (let i = 0; i < appendedToDiv.children.length; i++) {
    if (appendedToDiv.children[i].className === this.value) {
      appendedToDiv.children[i].remove();
    }
  }
  this.value = '';
});
// I wasn't able to create more than one span each time, and same as removing 'em
// and I wasn't able to use case insensitivity

// It might be useful to use both appendChild and prependChild