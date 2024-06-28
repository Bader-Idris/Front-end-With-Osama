const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
Element.prototype.$ = function (selector) {
  const elements = this.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};

const canvas = $('canvas'),
      c = canvas.getContext('2d')//c stands for context
;
canvas.width =  64 * 16;// 1024;//16 / 9 🔽
canvas.height = 64 * 9 ;//  576;// the 9
c.fillStyle = 'white';
// c.fillRect(0, 0, 200, 200)//rect stands for rectangle
c.fillRect(0, 0, canvas.width, canvas.height);
c.fillStyle = '#463ffd';
c.fillRect(100, 100, 100, 100);