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
      orderRange = [...Array(blocks.length).keys()],//lovely new approach to get each key
      triesElement = $('.tries span'),
      success = $('#success'),
      fail = $('#fail'),
      failLevel = $('select option'),
      pickedLevel = $('.info-container .level')
;
// images.draggable = false;// make it as this
gameStartBtn.addEventListener('click', (e) => {
  let uNameAsk = prompt('Enter your name: ');
  userName.innerHTML = uNameAsk === '' || uNameAsk === null ? 'Unknown' : uNameAsk;
  // userName.innerHTML = uNameAsk ?? 'Unknown';// nullish coalescing operator [[??]] 
  e.target.parentElement.remove();
  blocks.forEach(e => e.classList.add('is-flipped'));
  setTimeout(() => {
    blocks.forEach(e => e.classList.remove('is-flipped'));
  }, duration);
  appearingLevel();
});
// to make Game Works well, we need to Set Duration
//  for preventing seeing more than 2 elements at a time
let duration = 1000;
shuffle(orderRange);

blocks.forEach((block, i) => {
  block.style.order = orderRange[i];
  block.onclick = (e) => {//via me
    flipBlock(block);
    matchedFailure();
  };
});

function flipBlock(pickedBlock) {
  pickedBlock.classList.add('is-flipped');
  let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
  // when User Pick Two Choices
  // if (allFlippedBlocks.length % 2 == 0) {
  if (allFlippedBlocks.length === 2) {
    // stopping clicking
    stopClicking();
    // checking for matching between both
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  }
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

function stopClicking() {
  blocksContainer.classList.add('no-clicking');
  setTimeout(() => {
    blocksContainer.classList.remove('no-clicking');
  }, duration);
};
function checkMatchedBlocks(firstBlock, secondBlock) {
  if (firstBlock.dataset.organs === secondBlock.dataset.organs) {
    [firstBlock, secondBlock].forEach(e => {
      e.classList.remove('is-flipped');
      e.classList.add('has-match');
    })
    success.play();
  } else {
    setTimeout(() => {
      +triesElement.innerHTML++;
      [firstBlock, secondBlock].forEach(e => e.classList.remove('is-flipped'))
    }, duration);
    fail.play();
  }
};
function gameOver() {
  let div = document.createElement('div'),
      span = document.createElement('span'),
      gameTxt = div.cloneNode(false)
  ;
  gameTxt.innerHTML = 'Game Over!';
  span.innerHTML = 'restart the game';
  span.className = 'restart-game';
  div.appendChild(gameTxt)
  div.appendChild(span)
  div.className = 'game-over';
  document.body.appendChild(div);
  let restartGame = $('.restart-game')
  restartGame.onclick = ((e => location.reload()));
};
function matchedFailure() {
  failLevel.forEach((e, ind, arr) => {
    if (e.selected) {
      if (parseInt(e.innerHTML.split(':')[1])) {
        // pickedLevel.innerHTML = e.innerHTML.split(':')[0].toLowerCase()
        if (+triesElement.innerHTML === parseInt(e.innerHTML.split(':')[1])) {
          gameOver();
        }
      } else {
        // pickedLevel.innerHTML = arr[0].innerHTML.split(':')[0].toLowerCase()
        if (+triesElement.innerHTML === parseInt(arr[0].innerHTML.split(':')[1])) {
          gameOver();
        }
      }
    }
  })
};
function appearingLevel() { 
  failLevel.forEach((e, ind, arr) => {
    if (!e.disabled && e.selected) pickedLevel.innerHTML = e.innerHTML.split(':')[0].toLowerCase();
  })
};

/*
  tasks:
  add a starting audio
  add a countdown

  CHALLENGE:
  make prompt name sets in local storage, when we have two players to compare between them
  and set a leader inside the leader board div
    make them compare with fail tries

  HARD CHALLENGE:
  generate blocks with JS [and JSON if wanted]
*/