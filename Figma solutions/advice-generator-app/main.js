const p = document.createElement('p');
const div = document.createElement('div');
let title = document.querySelector('.title-advice');
let text = document.querySelector('.text-advice');
title.innerHTML = `Advice # `//${} needs an Id, and randomize our results.
// https://api.adviceslip.com/advice   //after advice/random-Id

let dice = document.querySelector('.dice');
dice.addEventListener('click', ev => {
  let textObj = {};
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    // title.innerHTML = `Advice #${data}`// get the id from data
    textObj = data;
    console.log(textObj['id']);
    console.log(textObj['advice']);

  })
  .catch(error => console.error(error));

  // title.innerHTML = `Advice # nigga`//${}
});


// Get From Server
const myJsonObjectFromServer = "https://api.adviceslip.com/advice"//needs to know how to get this json from server
// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(myJsObject);
// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

