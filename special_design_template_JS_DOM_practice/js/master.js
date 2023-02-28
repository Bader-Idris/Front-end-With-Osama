let mainColors = localStorage.getItem('color_option');
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color",mainColors);
  // check for active classes
  document.querySelectorAll(".colors-list li").forEach(ele =>{
    ele.classList.remove("active");//same for assignments🔴
  // now we add active class && data-color and into localStorage though
  if (ele.dataset.color === mainColors) ele.classList.add("active");
  });
}
//🔼 9th lesson localStorage

// ------ 12th part ------------
let backgroundOption = true;  //
let backgroundInterval;       //
// -----------------------------

// ------ 13th part ------------
// checking for localStorage randomBgItem
let backgroundLocalItem = localStorage.getItem("background_option");
// checking if randomBg localStorage isn't empty
if (backgroundLocalItem !== null) {
  // typeof backgroundLocalItem as false is string not boolean🤪
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  // removing active class from all spans!
  document.querySelectorAll(".random-backgrounds span").forEach(ele =>{
    ele.classList.remove("active");
  });
  // this saves bg into localStorage after refreshing, not same as onclick functions
  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

// -----------------------------
let myGear = document.querySelector(".toggle-settings .myGear");
let settingsBox = document.querySelector(".settings-box");
myGear.onclick = function() {
  this.classList.toggle('fa-spin');
  settingsBox.classList.toggle("open");
};
//🔼 7th lesson Toggle Spin Class Icon I love it💚

const colorsLi = document.querySelectorAll('.colors-list li');
colorsLi.forEach(li =>{
  li.addEventListener("click",(e)=>{
    // setting color in root:
    document.documentElement.style.setProperty("--main-color",e.target.dataset.color);//copy to localStorage
    // setting colors in localStorage🔷
    localStorage.setItem("color_option",e.target.dataset.color);
    // removing children's active classes
    e.target.parentElement.querySelectorAll(".active").forEach(ele =>{
      ele.classList.remove("active");//important to solve 🔴elzero assignment's local storage🔴
    });
    //adding active class
    e.target.classList.add("active");
  });
});

//🔼 8th lesson Switching Colors

// cloned from 8th lesson, with some changes
const randomBgEl = document.querySelectorAll('.random-backgrounds span');
randomBgEl.forEach(span =>{
  span.addEventListener("click",(e)=>{
    e.target.parentElement.querySelectorAll(".active").forEach(ele =>{
      ele.classList.remove("active");
    });
    e.target.classList.add("active");

    // 12th lesson part🔽
    if(e.target.dataset.bg === 'yes') {
      backgroundOption = true; 
      randomizeImgs();//turning on the function
          //------- 13th -------
          localStorage.setItem("background_option", true);
          //--------------------
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);//we declare our function
      // practices🔴make our pic as first one🔴
      // and making the specified pict in localStorage
      // even stopping random, giving all choices
      // CHALLENGE YOURSELF DOING 'EM
          //------- 13th -------
          localStorage.setItem("background_option", false);
          //--------------------
    }
    //--------------------
    });
});

//🔼 11th lesson background Colors

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg","05.jpg"];
// we can add full URL, or tiny dir, or only img name, or loop as our names 01 etc

// setInterval(() =>{
//   // Get Random Number
//   let randomNumber = Math.floor(Math.random()* imgsArray.length);
//   // we can make our Var empty in global, and add its value here
//   // console.log(randomNumber);

//   // Change BG Image URL
//   landingPage.style.backgroundImage = 'url("imgs/'+imgsArray[randomNumber]+'")';
// },5000);
// he said: we can make all of this in one setInterval, one line
// we made it inside a function in 12th lesson
// 🔼5th lesson in special design

// randomizing function
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() =>{
      let randomNumber = Math.floor(Math.random()* imgsArray.length);
      landingPage.style.backgroundImage = 'url("imgs/'+imgsArray[randomNumber]+'")';
    }, 1000);
  }
};
// 🔼12th lesson Random BG logic