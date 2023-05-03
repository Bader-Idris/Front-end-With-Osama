const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
Element.prototype.$ = function (selector) {
  const elements = this.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
/*
  Advices
  - Always Check The Console
  - Take Your Time To Name The Identifiers
  - DRY

  Steps To Create The Project
  [01] Create HTML Markup
  [02] Add Styling And Separate From Logic
  [03] Create The App Logic
  ---- [01] Add Levels
  ---- [02] Show Level And Seconds
  ---- [03] Add Array Of Words
  ---- [04] ِAdd Start Game Button
  ---- [05] Generate Upcoming Words
  ---- [06] Disable Copy Word And Paste Event + Focus On Input
  ---- [07] Start Play Function
  ---- [08] Start The Time And Count Score
  ---- [09] Add The Error And Success Messages
  [04] Your Trainings To Add Features
  ---- [01] Save Score To Local Storage With Date
  ---- [02] Choose Levels From Select Box
  ---- [03] Break The Logic To More Functions
  ---- [04] Choose Array Of Words For Every Level
  ---- [05] Write Game Instruction With Dynamic Values
  ---- [06] Add 3 Seconds For The First Word
*/

// Array Of Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];

// Setting Levels
const lvls = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 2
}

// Default Level
let defaultLevelName = "Normal";// task: make this selectable as a user,
//  by making it as a select box
let defaultLevelSeconds = lvls[defaultLevelName],
    startBtn = $('.start'),
    lvlNameSpan = $('.message .lvl'),
    SecondsSpan = $('.message .seconds'),
    theWord = $('.the-word'),
    upcomingWords = $('.upcoming-words'),
    input = $('.input'),
    timeLeftSpan = $('.time span'),
    scoreGot = $('.score .got'),
    scoreTotal = $('.score .total'),
    finishMessage = $('.finish')
;

// Setting Level Name + Seconds + Score
lvlNameSpan.innerHTML = defaultLevelName;
SecondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Paste Event: [to prevent client from pasting Inside Input field]
input.onpaste = function () {
  return false;
};

// Start Game
startBtn.onclick = function () {
  this.remove();
  input.focus();
  // Generate Word Function
  genWords();
};

function genWords() {
  // Get Random Words From Array
  let randomWord = words[Math.floor(Math.random() * words.length)],
      wordIndex = words.indexOf(randomWord);
  // Remove picked word from Array
  words.splice(wordIndex, 1);

  // Appear Random Word
  theWord.innerHTML = randomWord;

  // Empty Upcoming Words
  upcomingWords.innerHTML = '';

  // Generate Words
  for (let i = 0; i < words.length; i++) {
    let div = document.createElement('div'),
        txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);

  }
  // Call Start Playing Function
  startPlaying();
};

function startPlaying() {
  // before using time, we should reset the function
  timeLeftSpan.innerHTML = defaultLevelSeconds;

  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);
      // Compare Words
      // if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase())// I don't want it to be small cases
      if (theWord.innerHTML === input.value) {
        // Empty Input Field
        input.value = '';
        // Increase Score
        scoreGot.innerHTML++;
        // reUsing/invoking genWord Function IMPORTANT
        if (words.length > 0){
          genWords();
        } else {//if length is 0
          // means if player wins the game!
          let span = document.createElement('span');
          span.className = 'good';
          let spanText = document.createTextNode("Congratulations");
          span.appendChild(spanText);
          finishMessage.appendChild(span);
          // we can Also Remove Upcoming words Div
          upcomingWords.remove();
        };
      } else {// if player loses
        let span = document.createElement('span');
        span.className = 'bad';
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
};

// Tasks for me, see above [04] they're 6 missions
// saving score as 10fastFingers.com
// put levels inside a select box
// add more seconds to first click, to let player sees words, as doubling 'em
