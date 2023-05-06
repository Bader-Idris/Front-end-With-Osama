// Shortening selectors By me:
const $ = (selector) => {
  const elements = document.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
Element.prototype.$ = function (selector) {
  const elements = this.querySelectorAll(selector);
  return elements.length === 1 ? elements[0] : elements;
};
// --------------------------------------------
const theInput = $('.get-repos input'),
    getBtn = $('.get-button'),
    reposData = $('.show-data');

getBtn.addEventListener('click', () => {
  getRepos();
});
const getRepos = () => {
  if (theInput.value == "") {
    reposData.innerHTML = "<span>Add A Github Username, Please</span>";
  } else {
    fetchFunc();
  }
};

const fetchFunc = () => {
  fetch(`https://api.github.com/users/${theInput.value}/repos`)
  .then((response) => response.json())
  .then((repos) => {
    reposData.innerHTML = '';
    // Looping on Repo[s]
    repos.forEach(repo => {
      let mainDiv = document.createElement('div'), 
          repoName = document.createTextNode(repo.name)
      ;
      mainDiv.appendChild(repoName);
      // before showing data, create repo URL
      let theUrl = document.createElement('a'),
          urlText = document.createTextNode('Visit')
      theUrl.appendChild(urlText)
      theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
      theUrl.setAttribute('target', '_blank')
      mainDiv.appendChild(theUrl)
      let starsSpan = document.createElement('span'),
          starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);
      starsSpan.appendChild(starsText);
      mainDiv.appendChild(starsSpan);
      mainDiv.className = 'repo-box';

      reposData.appendChild(mainDiv);
    });
  });
};

// task: your task is to access https://jsonplacehoder.typicode.com 
//   then see its 100 posts [and many other resources], until lesson's recorded
//   then loop on them to get all comments, posts, albums or whatever you pick

// I don't need to, because I accomplished diceBtn with frontEndMentor, chatGPT helped me invoking fetch > then > then

//🔴Osama game me a hint to create a dynamic blogger website in this approach🔴
