const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
Element.prototype.$ = function (selector) {
  const elements = this.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
const dayToggle = $('.theme div'),
      backGrounds = $('.back-img div')
  ;

[...dayToggle].forEach(el => {
  el.addEventListener('click',(e) => {
    e.stopPropagation();
    document.body.classList.toggle('dark');
    [...dayToggle][0].classList.toggle('active');
    [...dayToggle][1].classList.toggle('active');
    [...backGrounds].forEach(bg => bg.classList.toggle('active'));
  });
});