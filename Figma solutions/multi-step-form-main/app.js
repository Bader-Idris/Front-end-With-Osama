const $$ = (s) => document.querySelectorAll(s),
      $ = (s) => document.querySelector(s),
      forms = $$('main form'),
      section = $('main section'),
      nextButton = $$('form button.next'),
      backButton = $$('form button.back'),
      submitBtn = $('form button[type="submit"]'),
      steps = $$('aside div span'),
      miniPlans = $$('.mini-plans div'),
      planBtn = $('.plan-either span:nth-of-type(2)'),
      imgs = $$('img'),
      checkContainer = $$('.third .check-container'),
      nameField = $('#userNa'),
      usernamePattern = /^[a-zA-Z\s]+$/,
      nameError = document.createElement('div'),
      emailField = $('#userEm'),
      emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      emailError = document.createElement('div'),
      phoneField = document.querySelector('#userPh'),
      phonePattern = /^(\+?\d{2,3})?\s?\d{2}\s?\d{3}\s?\d{4}$/,
      phoneError = document.createElement('div'),
      checkboxPrices = $$(" form.third span"),
      planOptionSpan = $(" div.summery > .plan-option span"),
      totalSpans = $$(".fourth .total span")
      ;

section.style.top = '0%';
imgs.forEach((e)=> e.setAttribute('draggable', 'false'));

nameError.classList.add('error', 'name-err');
nameError.innerText = 'Please enter a valid name';

emailError.classList.add('error', 'email-err');
emailError.innerText = 'Please enter a valid email address';

phoneError.classList.add('error', 'phone-err');
phoneError.innerText = 'Please enter a valid phone number';

nameField.addEventListener('focus', () => {
  if (nameField.parentElement.contains(nameError)) {
    nameField.parentElement.removeChild(nameError);
    nameField.classList.remove('invalid');
  }
});
emailField.addEventListener('focus', () => {
  if (emailField.parentElement.contains(emailError)) {
    emailField.parentElement.removeChild(emailError);
    nameField.classList.remove('invalid');
  }
});
phoneField.addEventListener('focus', () => {
  if (phoneField.parentElement.contains(phoneError)) {
    phoneField.parentElement.removeChild(phoneError);
    nameField.classList.remove('invalid');
  }
});

nameField.addEventListener('blur', () => {
  if (!usernamePattern.test(nameField.value)) {
    nameField.parentElement.appendChild(nameError);
    nameField.classList.add('invalid');
  }
});
emailField.addEventListener('blur', () => {
  if (!emailPattern.test(emailField.value)) {
    emailField.parentElement.appendChild(emailError);
    emailField.classList.add('invalid');
  }
});
phoneField.addEventListener('blur', () => {
  if (!phonePattern.test(phoneField.value)) {
    phoneField.parentElement.appendChild(phoneError);
    phoneField.classList.add('invalid');
  }
});

nextButton.forEach((e, ind) => {
  e.onclick = () => {
    if ($$('.first div .error').length == 0 && nameField.value != '' && emailField.value != '' && phoneField.value != '') {
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

let monthPrice = [];
miniPlans.forEach(e => monthPrice.push(e.children[2].innerHTML))
let yearPrice = ['$90/yr', '$120/yr', '$150/yr'];

let checkboxMonthly = [];
checkboxPrices.forEach(e => checkboxMonthly.push(e.innerHTML))
let checkboxYearly = ['+$10/yr', '+$20/yr', '+$20/yr'];

miniPlans.forEach((e) => {
  e.onclick = () => {
    miniPlans.forEach((sibling) => {
      sibling.classList.remove('active');
    });
    e.classList.add('active');
    planOptionSpan.parentElement.childNodes[0].textContent = e.children[1].innerHTML + ' ';
  };
});


planBtn.onclick = (e) => {
  e.target.classList.toggle('active');
  let planEither = e.target.parentElement.children;
  planEither[0].classList.toggle('active');
  planEither[2].classList.toggle('active');

  if (planEither[2].classList.contains('active')) {
    miniPlans.forEach((ev, ind, arr) => {
      const discount = Object.assign(document.createElement('span'), {
        className: 'discount',
        innerHTML: '2 months free'
      });
      if (ev.children.length < 4) ev.appendChild(discount);
      ev.children[2].innerHTML = yearPrice[ind];
      checkboxPrices[ind].innerHTML = checkboxYearly[ind];

      planOptionSpan.innerHTML = '(Yearly)';
      totalSpans[0].innerHTML = 'Total (per year)';
    });
  }
  if (planEither[0].classList.contains('active')) {
    miniPlans.forEach((ev, ind, arr) => {
      if (arr[ind].children.length == 4) miniPlans[ind].children[3].remove();
      ev.children[2].innerHTML = monthPrice[ind];
      checkboxPrices[ind].innerHTML = checkboxMonthly[ind]

      planOptionSpan.innerHTML = '(Monthly)';
      totalSpans[0].innerHTML = 'Total (per month)';
    });
  }

  /*
  🔴now: check if these span.innerHTML has month prices or year prices, to convert them into the planBtn option🔴

  Array.from(planOptionSpan.parentElement.parentElement.children).forEach((e, index)=> {
  let elCount = planOptionSpan.parentElement.parentElement.childElementCount;
  if (elCount > 1) {
    if (index != 0) {
      console.log(e.childNodes[1])
    }
  }
  });
  */
}
const summeryClasses = ['online', 'large', 'custom'],
      summeryHead = [];
checkContainer.forEach((e)=> {
  summeryHead.push(e.children[2].children[0].innerHTML);
});

checkContainer.forEach((e,index) => e.onclick = () => {
  e.children[0].checked = !e.children[0].checked;
  e.classList.toggle('active');
  
  if (e.classList.contains('active')) {
    checkboxPrices.forEach((e,ind,arr) => {
      if (index == ind) {
        let prices = document.createTextNode(checkboxPrices[ind].innerHTML);
        let checkPricesSummery = document.createElement('span');
        checkPricesSummery.appendChild(prices)
        let plans = document.createElement('div');
        plans.className = summeryClasses[ind];
        plans.innerHTML = summeryHead[ind]
        plans.appendChild(checkPricesSummery)
        planOptionSpan.parentElement.parentElement.appendChild(plans)
      }
    })
  }
  if (!e.classList.contains('active')) {
    Array.from(planOptionSpan.parentElement.parentElement.children).forEach((e)=> {
      if (e.classList.contains(summeryClasses[index])) e.remove()
    });
  }
});

