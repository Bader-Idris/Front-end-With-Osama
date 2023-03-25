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
