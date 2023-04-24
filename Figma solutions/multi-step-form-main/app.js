const $$ = (s) => document.querySelectorAll(s),
      $ = (s) => document.querySelector(s),
      forms = $$('main form'),
      section = $('main section'),
      nextButton = $('form button.next'),
      backButton = $('form button.back')
      ;

nextButton.onclick = () => {
  section.style.top = "-100%";// make it dynamic
};
backButton.onclick = () => {
  section.style.top = "+100%";// make it dynamic
};
// "540px" top: -540px; form when 1st click
// section.style.top = "-100%";
// forms[0].style.top = "-100%";
// forms[1].style.top = "-100%";

// section
// top: -100%;