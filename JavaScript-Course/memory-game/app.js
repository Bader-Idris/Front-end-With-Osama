const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
Element.prototype.$ = function (selector) {
  const elements = this.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};

const gameStartBtn = $('.control-buttons span'),
      userName = $('.name span'),
      blocksContainer = $('.memory-game-blocks'),
      blocks = [...blocksContainer.children],
      orderRange = [...Array(blocks.length).keys()]//lovely new approach to get each key
;
// images.draggable = false;// make it as this
gameStartBtn.addEventListener('click', (e) => {
  let uNameAsk = prompt('Enter your name: ');
  userName.innerHTML = uNameAsk === '' || uNameAsk === null ? 'Unknown' : uNameAsk;
  // userName.innerHTML = uNameAsk ?? 'Unknown';// nullish coalescing operator [[??]] 
  e.target.parentElement.remove();
});
// to make Game Works well, we need to Set Duration
//  for preventing seeing more than 2 elements at a time
let duration = 1000;
shuffle(orderRange);
// blocksContainer

blocks.forEach((block, i) => {
  block.style.order = orderRange[i];
  block.onclick = (e) => {//via me
    flipBlock(block);
  };
});

function flipBlock(pickedBlock) {
  pickedBlock.classList.add('is-flipped');
};

// Osama's shuffle function is greatly dynamic
function shuffle(array) {
  let current = array.length,
      temp,
      random;
  while (current > 0){
    random = Math.floor(Math.random() * current);
    current--;
    // [1] Save Current Element Into Stash
    temp = array[current];
    // [2] CurEl = RandEl
    array[current] = array[random];
    // [3] RandEl = Get El From Stash
    array[random] = temp;
  }
  return array;
};

// data-technology > data-organs