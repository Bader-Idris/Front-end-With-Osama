// letters
let letters = "abcdefghijklmnopqrstuvwxyz";
// let lettersArray = letters.split('');
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");
lettersArray.forEach(letter => {
  let span = document.createElement('span');
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});
// 4th lesson 0:29:01 Get Random Property & value From Object 
// 🔴 lovely & important lesson🔴
// concentrate, a lot of object working is here!!!

// Object Of Words + Categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran","r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash","Memento", "Coco","Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// Get Random Property
let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];//random key [length]
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomValueNumber];

// set Category info
document.querySelector('.game-info span').innerHTML = randomPropName;// to let user know from which key[category]

// 5th lesson 0:42:10 Generate Guess Letters Elements
// Selecting Letters Guess Element
let lettersGuessContainer = document.querySelector('.letters-guess');

// Converting Chosen Word To An Array
let lettersAndSpace = Array.from(randomValueValue);

// Creating Spans Depending on Words
lettersAndSpace.forEach(letter => {
  let emptySpan = document.createElement('span');
  // Adding Class to space-owner words
  if (letter === ' ') {
    emptySpan.className = 'with-space';
  }
  lettersGuessContainer.appendChild(emptySpan);
});
//------ part 2 ------------- 7th ----------1:00:43 ---------------
// Selecting Spans to Connect With clicked letter index from down below
// let guessSpans = lettersGuessContainer.childNodes;//instead of my work here:see 🔽
let guessSpans = document.querySelectorAll(".letters-guess span");
// Setting The Chosen Status
let theStatus = false;// will get changed when user picks right letters
//-------------------------- 7th ----------------------------------
// 6th lesson 0:51:55 Comparing Letters Part 1 🔴IMPORTANT LESSON🔴
document.addEventListener('click', (e) => {
  if (e.target.className === 'letter-box') {
    e.target.classList.add('clicked');
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    // to simplify, we repeat theChosenWord
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    // chosen word with spaces
    lettersAndSpace.forEach( (wordLetter, wordIndex) =>{
      if(wordLetter == theClickedLetter){//2nd part 1:00:43
        // Setting Status to correct
        theStatus = true;// before 8th lesson, we didn't set it false inside loop,
        //  it should get false after clicking on correct letter, 🔴then wrong one🔴
        // so, we put it inside click, not of it
        guessSpans.forEach( (span ,spanIndex) =>{
          if(spanIndex == wordIndex){
            span.innerHTML = wordLetter;// 2nd can be theClickedLetter
          }
        });
      }
    });
    // outside loop checking
    // console.log(theStatus);// have to be outside looping,[not to use else statement]
    //  because it'll iterate insideIt, if we use playSound, it'll iterate, craziness will arrive
  }
});

// 8th lesson 1:10:43 The Draw Logic And Design