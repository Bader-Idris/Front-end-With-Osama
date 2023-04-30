const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
Element.prototype.$ = function (selector) {
  const elements = this.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
// Lovely using Prototype with Chat GPT, if I get along with this,
//  I'll be able to create my own library as Jquery or React
/*
Prerequisites
* - JavaScript
* - DOM
* - BOM
* - AJAX
* - JSON
* - JavaScript Big Tutorials

* this is gotta be a lovely practicing project,
* another important advice Osama said, you need to improve this code!!

* there are many things Osama thinks a lot to achieve,
* so video's length is only as results not intuitively that cope
*/