const comments = document.querySelectorAll('.comment');
const firstMsg = document.querySelector('.first-msg');

let firstComment = async () => {
  try {
    let firstComment = await fetch('./data.json');
    let data = await firstComment.json();
    // Do something with the fetched data
    let comments = data.comments
    let uName = data.currentUser.username
    return `Hello ${uName}, your comment is ${comments[1].content}`
  } catch (error) {
    return 'Error:'+ error;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  firstMsg.addEventListener('click', async function (e) {
    this.innerHTML = await firstComment();
  });
  
});