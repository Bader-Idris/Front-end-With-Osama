const commentDOM = (txtCreatedAt, txtContent, curVote, profSrc, txtTitle, comment_uid) => {
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
  title.textContent = txtTitle;
  reply.textContent = "Reply";
  currentVote.innerHTML = curVote;
  container.dataset.comment_uid = comment_uid;

  profile.src = profSrc;

  const append = (parent, ...children) => children.forEach(child => parent.appendChild(child));
  append(user, profile, title, createdAt);
  append(container, user, reply, content);
  append(score, upVote, currentVote, downVote);
  append(container, score);
  document.body.appendChild(container);
};

function replyDOM(txtCreatedAt, txtContent, replyingTo, curVote, profSrc, txtTitle, commentId) {
  const createEl = (el) => document.createElement(el);
  let replyContainer = createEl('div'), createdAt = createEl('span'), content = createEl('p'), user = createEl('div');
  let reply = createEl('span'), title = createEl('p'), profile = createEl('img');
  let score = createEl('div'), upVote = createEl('span'), currentVote = createEl('span'), downVote = createEl('span');

  const setClass = (element, className) => element.className = className;
  const setClasses = (element, className) => setClass(element, className);
  const elements = {
    replyContainer, createdAt, content, reply,
    title, profile, user, score,
    upVote, currentVote, downVote
  };
  Object.entries(elements).forEach(([key, value]) => setClasses(value, key));

  // textContent
  createdAt.textContent = txtCreatedAt;
  content.textContent = txtContent;
  reply.textContent = "Reply";
  title.textContent = txtTitle;
  currentVote.innerHTML = curVote;

  profile.src = profSrc;
  let repliedToComment = document.querySelector(`[data-comment_uid="${commentId}"]`)
  
  const append = (parent, ...children) => children.forEach(child => parent.appendChild(child));
  append(user, profile, title, createdAt);
  append(replyContainer, user, reply, content);
  append(score, upVote, currentVote, downVote);
  append(replyContainer, score);
  // document.body.appendChild(replyContainer);
  repliedToComment.appendChild(replyContainer)
  //-------------------------------------------------------------------------------------
}

let postComments = async () => {
  try {
    // Before Send
    console.log('Before Send');
    //----------------------------------------
    let dbData = await fetch('./data.json');

    // Process the response
    let data = await dbData.json();

    let comments = data.comments
    let uName = data.currentUser.username

    // console.log(data.comments[1].replies)
    for(e in comments) {
      commentDOM(data.comments[e].createdAt, data.comments[e].content,
        data.comments[e].score, data.comments[e].user.image.png, data.comments[e].user.username, data.comments[e].id);
      if (data.comments[e].replies != 0) {
        let reply = data.comments[e].replies;
        // console.log(data)
        // console.log(reply)
        console.log(reply[0])
        console.log(reply[1])
        console.log(data.comments[e].user.username, data.comments[e].id)//replied to, and his comment_id
        // content
        // createdAt
        // replyingTo
        // score
        // user: {image: {png:sth},username:persona;}
        replyDOM(reply[e].createdAt, reply[e].content, data.comments[e].user.username,
          reply[e].score, reply[e].user.image.png, reply[e].user.username, data.comments[e].id)
        console.log(reply[e])
      }
    }
    // Complete, check if complete is better to be above this for in loop
    console.log('Complete');
    //----------------------------------------

    // return `Hello ${uName}, your comment is ${comments[1].content}`
  } catch (error) {
    return 'Error:'+ error;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  postComments()
  
});