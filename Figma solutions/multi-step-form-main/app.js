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
      const discount = document.createElement('span');
      discount.className = 'discount';
      discount.innerHTML = "2 months free";// needs to be shortened as an object
      if (ev.children.length < 4) {
        ev.appendChild(discount);//🔴needs to be removed with monthly plan🔴
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
}


checkContainer.forEach(e => e.onclick = () => {
  e.children[0].checked = !e.children[0].checked;
  // a lot of work is here;
}
);


/*
Here are some of the best review websites for form validation using regular expressions 
(regex) in JavaScript:
1. MDN Web Docs - offers comprehensive documentation on JavaScript regex, as well as 
tutorials and examples of how to use regex for form validation. It's a reliable and 
authoritative source of information.
2. Regex101 - is a website that lets you test and experiment with regex patterns in a 
visual interface. You can input your JavaScript code and test your regex patterns to 
ensure that they work as intended.
3. Regexr - is a website that offers a regex tester and debugger, as well as a regex 
cheat sheet showing common expressions and their syntax. It's a good resource for learning
about regex and validating form data.
4. Stack Overflow - is a popular community-driven question and answer website where 
you can find answers to common regex questions and get help with your own regex code. 
It's a great resource for troubleshooting and refining your regex expressions.
5. Codecademy - is an online learning platform that offers courses on JavaScript and 
regex. It's a good resource for beginners who want to learn how to use regex for form 
validation and other applications in web development.
These websites can provide helpful resources, tips, and solutions for form validation 
using regex in JavaScript.
*/