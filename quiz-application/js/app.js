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

let countSpan = $('.count span'),
    bulletsSpanContainer = $('.bullets .spans'),
    quizArea = $('.quiz-area')
;

// set Settings/Options
let curInd = 0;

function getQuestions() {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200){
      let questionsObject = JSON.parse(this.responseText)//it's all text converted from JSON into JS Object
      // console.log(questionsObject)
      let qCount = questionsObject.length;// to catch questions length

      // Create Bullets + Set Questions Count
      createBUllets(qCount);

      addQuestionData(questionsObject[curInd], qCount);
    };
  };

  myRequest.open('GET', 'js/html_questions.json', true);
  myRequest.send();
}
getQuestions()

function createBUllets(num) {
  countSpan.innerHTML = num;

  // create Spans
  for (let i = 0; i < num; i++) {
    let theBullet = document.createElement('span');
    if (i === 0) {
      theBullet.className = 'on';
    }
    bulletsSpanContainer.appendChild(theBullet);
  }
}

function addQuestionData(obj, count) {
  // console.table(obj);
  // console.log(count);

  // Create H2 Q title
  let questionTitle = document.createElement('h2');
  // Create Question Text
  let questionText = document.createTextNode(obj['title']);
  // append it
  questionTitle.appendChild(questionText);
  quizArea.appendChild(questionTitle);

  for (let i = 1; i <= 4; i++) {
    // Create the Answers
    let mainDiv = document.createElement('div');
    mainDiv.className = 'answer';
    let radioInput = document.createElement('input');
    radioInput.name = 'question';
    radioInput.type = 'radio';
    radioInput.id = 'answer_' + i;
    radioInput.dataset.answer = obj['answer_' + i];
    // create Label
    let theLabel = document.createElement('label');
    theLabel.htmlFor = 'answer_' + i;
    let labelText = document.createTextNode(obj['answer_' + i])
    theLabel.appendChild(labelText);
    // add both into mainDiv
    mainDiv.appendChild(radioInput)
    mainDiv.appendChild(theLabel)
  }
};