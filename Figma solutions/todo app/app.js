const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
Element.prototype.$ = function (selector) {
  const elements = this.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
const dayToggle = $('.theme div')
  ;

[...dayToggle].forEach(el => {
  el.addEventListener('click',(e) => {
    e.stopPropagation();
    console.log(e.target);
  
  });
});