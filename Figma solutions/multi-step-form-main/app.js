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
// let error = $$('.first div .error');
section.style.top = '0%';
imgs.forEach((e)=> e.setAttribute('draggable', 'false'));

//--------------------------------------------------------------------
// with the love of crazy chat GPT bito: it needs hours of me to understand🤯😲
const nameField = document.querySelector('#userNa');
const usernamePattern = /^[a-zA-Z\s]+$/;
const nameError = document.createElement('div');
nameError.classList.add('error', 'name-field-error');
nameError.innerText = 'Please enter a valid name containing only alphabetical characters and spaces';

nameField.addEventListener('focus', () => {
  if (nameField.parentElement.contains(nameError)) {
    nameField.parentElement.removeChild(nameError);
  }
});

nameField.addEventListener('blur', () => {
  if (!usernamePattern.test(nameField.value)) {
    nameField.parentElement.appendChild(nameError);
  }
});

const emailField = document.querySelector('#userEm');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailError = document.createElement('div');
emailError.classList.add('error', 'email-field-error');
emailError.innerText = 'Please enter a valid email address';

emailField.addEventListener('focus', () => {
  if (emailField.parentElement.contains(emailError)) {
    emailField.parentElement.removeChild(emailError);
  }
});

emailField.addEventListener('blur', () => {
  if (!emailPattern.test(emailField.value)) {
    emailField.parentElement.appendChild(emailError);
  }
});

const phoneField = document.querySelector('#userPh');
const phonePattern = /^(\+?\d{2,3})?\s?\d{2}\s?\d{3}\s?\d{4}$/;
const phoneError = document.createElement('div');
phoneError.classList.add('error', 'phone-field-error');
phoneError.innerText = 'Please enter a valid phone number';

phoneField.addEventListener('focus', () => {
  if (phoneField.parentElement.contains(phoneError)) {
    phoneField.parentElement.removeChild(phoneError);
  }
});

phoneField.addEventListener('blur', () => {
  if (!phonePattern.test(phoneField.value)) {
    phoneField.parentElement.appendChild(phoneError);
  }
});
//--------------------------------------------------------------------
let fieldValues = [nameField.value, emailField.value, phoneField.value];
nextButton.forEach((e, ind) => {
  e.onclick = () => {
    if ($$('.first div .error').length == 0 && fieldValues != '') {//nameField.value != ''
      section.style.top = +section.style.top.slice(0, -1) - 100 + "%";
    steps.forEach((ev, i, arr) => {
      arr[ind].classList.remove('active');
      if (arr[ind + 1] !== undefined) {
        arr[ind + 1].classList.add('active');
      } else {
        arr[ind].classList.add('active');
      }
    });
    }
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
let monthPrice = [];
miniPlans.forEach((ev, ind, arr) => {
  monthPrice.push(arr[ind].children[2].innerHTML);
})
planSpan.onclick = (e) => {
  e.target.classList.toggle('active');
  let planOpts = e.target.parentElement.children;
  planOpts[0].classList.toggle('active');
  planOpts[2].classList.toggle('active');

  if (planOpts[2].classList.contains('active')) {
    miniPlans.forEach((ev, ind, arr) => {
      const discount = Object.assign(document.createElement('span'), {
        className: 'discount',
        innerHTML: '2 months free'
      });
      if (ev.children.length < 4) {
        ev.appendChild(discount);
      }

      // 🔴needs to be separated between months and years plans🔴
      // if (ind == 0 && ev.classList.contains('active')) {
      //   ev.children[2].innerHTML = '$90/yr';
      // } else if (!ev.classList.contains('active')){
      //   ev.children[2].innerHTML = monthPrice[0];
      // }
      // if (ind == 1 && ev.classList.contains('active')) {
      //   ev.children[2].innerHTML = '$120/yr';
      // } else if (!ev.classList.contains('active')){
      //   ev.children[2].innerHTML = monthPrice[1];
      // }
      // if (ind == 2 && ev.classList.contains('active')) {
      //   ev.children[2].innerHTML = '$150/yr';
      // } else if (!ev.classList.contains('active')){
      //   ev.children[2].innerHTML = monthPrice[2];
      // }
    });
  }
  if (planOpts[0].classList.contains('active')) {
    for (let i = 0; i < miniPlans[0].children.length; i++) {
      if (miniPlans[i].children.length == 4)
      miniPlans[i].children[3].remove()
    }
  }

}


checkContainer.forEach(e => e.onclick = () => {
  e.children[0].checked = !e.children[0].checked;
  // a lot of work is here;
}
);
