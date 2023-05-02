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
    quizArea = $('.quiz-area'),
    answersArea = $('.answers-area'),
    submitBtn = $('.submit-button'),
    bullets = $('.bullets'),
    resultsContainer = $('.results'),
    countdownElement = $('.countdown')
;

// set Settings/Options
let curInd = 0,
    properAnswers = 0,
    countdownInterval
;

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

        // setting the countdown function
        countdown(180, qCount)

      // clicking On Submit Button
      submitBtn.onclick = (e) => {
        // catch the Proper Answer
        let theProperAnswer = questionsObject[curInd].right_answer;
        // console.log(theProperAnswer)
        // increase current Index
        curInd++;

        // Osama said, making the questions as global, is better than his solution
        // I think he meant global API
        // Check The Answer
        checkAnswer(theProperAnswer, qCount);

        // needing to delete each innerHTML of prior Qs
        quizArea.innerHTML = '';
        answersArea.innerHTML = '';

        // now, only invoke our function
        addQuestionData(questionsObject[curInd], qCount);

        // Handle Bullets Class
        handleBullets();

        // because it's a button, we have to clearInterval, before starting its Func
        clearInterval(countdownElement);
        countdown(180,qCount)

        // Show Results
        showResults(qCount);
      };
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
  if (curInd < count) {// this condition is important to stop this function if obj length is at last index
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
      // Selecting First Option
      if (i === 1) {
        radioInput.checked = true;
      }

      // create Label
      let theLabel = document.createElement('label');
      theLabel.htmlFor = 'answer_' + i;
      let labelText = document.createTextNode(obj['answer_' + i])
      theLabel.appendChild(labelText);
      // add both into mainDiv
      mainDiv.appendChild(radioInput)
      mainDiv.appendChild(theLabel)

      answersArea.appendChild(mainDiv)
    }
  }
};

function checkAnswer(rAnswer, count) {
  // console.log(aAnswer);
  // console.log(count);
  let answers = $('[name="question"]'),//can be as getElementsByName
      theChosenAnswer
  ;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {// no need to type == true
      theChosenAnswer = answers[i].dataset.answer;
    }
  }
  // console.log(`Proper Answer Is: ${rAnswer}`);
  // console.log(`Chosen Answer Is: ${theChosenAnswer}`);

  if (rAnswer === theChosenAnswer) {
    properAnswers++;
    // console.log('Correct Answer');
  } else {
    // console.log('wrong Answer');
  }
}

function handleBullets() {
  let bulletsSpans = $('.bullets .spans span'),
      arrayOfSpans = Array.from(bulletsSpans)
  ;
  arrayOfSpans.forEach((span, index)=> {
    if (curInd === index) {//this curInd solves a lot of your stupidities
      span.className = 'on';
    }
  });
};

function showResults(count) {
  let theResults;
  if (curInd === count) {
    // console.log('Questions are finished');
    [quizArea, answersArea, submitBtn, bullets].forEach(item => item.remove());
    // instead of repeating same code, I used destructuring array

    if (properAnswers > (count / 2) && properAnswers < count) {
      theResults = `<span class='good'>Good Job</span>, ${properAnswers} From ${count} is Great`
    } else if (properAnswers === count) {
      theResults = `<span class='perfect'>Perfect</span>, That's Awesome!`;
    } else {
      theResults = `<span class='bad'>Try Next Time</span>,
      ${properAnswers} From ${count} is Bad, You Need To Work On Yourself!`
    }
    resultsContainer.innerHTML = theResults
    resultsContainer.style.padding = '10px';
    resultsContainer.style.backgroundColor = '#FFF';
    resultsContainer.style.marginTop = '10px';
  }
};

function countdown(duration, count) {
  if (curInd < count) {
    let minutes, seconds;
    countdownInterval = setInterval(() => {
      minutes = parseInt(duration / 60);// same as floor, it makes float vanish,
      //  so it's mainly for minutes
      seconds = parseInt(duration % 60);// to get the rest of time, which is seconds

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      countdownElement.innerHTML = `${minutes}:${seconds}`;
      if (--duration < 0) {
        clearInterval(countdownInterval);// stops the counter
        // console.log('finished');
        // instead of making a crazy function, just make this clicks
        submitBtn.click();
      }
    },1000)
  }
};