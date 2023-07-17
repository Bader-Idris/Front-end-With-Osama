const commentDOM = (txtCreatedAt, txtContent, txtReply, curVote, profSrc, txtTitle) => {
  const createEl = (el) => document.createElement(el);
  let container = createEl('div'), createdAt = createEl('span'), content = createEl('p'), user = createEl('div');
  let reply = createEl('span'), title = createEl('p'), profile = createEl('img');
  let score = createEl('div'), upVote = createEl('span'), currentVote = createEl('span'), downVote = createEl('span');

  const setClass = (element, className) => element.className = className;
  const setClasses = (element, className) => setClass(element, className);
  const elements = {
    container, createdAt, content, reply,
    title, profile, user, score,
    upVote, currentVote, downVote
  };
  Object.entries(elements).forEach(([key, value]) => setClasses(value, key));

  // textContent
  createdAt.textContent = txtCreatedAt;
  content.textContent = txtContent;
  reply.textContent = txtReply;
  title.textContent = txtTitle;
  currentVote.innerHTML = curVote;

  profile.src = profSrc;

  const append = (parent, ...children) => children.forEach(child => parent.appendChild(child));
  append(user, profile, title);
  append(container, user, reply, content, createdAt);
  append(score, upVote, currentVote, downVote);
  append(container, score);
  document.body.appendChild(container);
};


let mainComments = async () => {
  try {
    let firstComment = await fetch('./data.json');
    let data = await firstComment.json();

    let comments = data.comments
    let uName = data.currentUser.username

    for(e in comments) {
      commentDOM(data.comments[e].createdAt, data.comments[e].content,
          'Reply', data.comments[e].score, data.comments[e].user.image.png, data.comments[e].user.username)
    }

    return `Hello ${uName}, your comment is ${comments[1].content}`
  } catch (error) {
    return 'Error:'+ error;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(mainComments())
});