const $$ = (s) => document.querySelectorAll(s),
      $ = (s) => document.querySelector(s),
      forms = $$('main form'),
      section = $('main section'),
      nextButton = $$('form button.next'),
      backButton = $$('form button.back'),
      submitBtn = $('form button[type="submit"]'),
      steps = $$('aside div span'),
      miniPlans = $$('.mini-plans div'),
      planSpan = $('.plan-option span:nth-of-type(2)'),
      imgs = $$('img'),
      checkContainer = $$('.third .check-container')
      ;

section.style.top = '0%';
imgs.forEach((e)=> e.setAttribute('draggable', 'false'));

nextButton.forEach((e, ind) => {
  e.onclick = () => {
    section.style.top = +section.style.top.slice(0, -1) - 100 + "%";
    steps.forEach((ev, i, arr) => {
      arr[ind].classList.remove('active');
      if (arr[ind + 1] !== undefined) {
        arr[ind + 1].classList.add('active');
      } else {
        arr[ind].classList.add('active');
      }
    });
  };
})
backButton.forEach((e, ind)=> {
  e.onclick = () => {
    section.style.top = +section.style.top.slice(0,-1) + 100 + "%";
    steps.forEach((ev, i, arr) => {
      arr[ind + 1].classList.remove('active');
        arr[ind].classList.add('active');
    });
  };
})
submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  // perform form validation and submission using JavaScript
});
miniPlans.forEach((e) => {
  e.onclick = () => {
    e.classList.toggle('active');
  };
})
planSpan.onclick = (e) => {
  e.target.classList.toggle('active');
  e.target.parentElement.children[0].classList.toggle('active');
  e.target.parentElement.children[2].classList.toggle('active');
}
// yearly plans 
// miniPlans[0].children[2].innerHTML = '$90/yr';
// miniPlans[1].children[2].innerHTML = '$120/yr';
// miniPlans[2].children[2].innerHTML = '$150/yr';

// add p.innerHTML = "2 months free" to each

checkContainer.forEach(e => e.onclick = () => {
  e.children[0].checked = !e.children[0].checked;
  // a lot of work is here;
}
);