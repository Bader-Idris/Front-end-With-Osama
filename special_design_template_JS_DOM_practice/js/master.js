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

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg","05.jpg"];
// we can add full URL, or tiny dir, or only img name, or loop as our names 01 etc

setInterval(() =>{
  // Get Random Number
  let randomNumber = Math.floor(Math.random()* imgsArray.length);
  // we can make our Var empty in global, and add its value here
  // console.log(randomNumber);

  // Change BG Image URL
  landingPage.style.backgroundImage = 'url("imgs/'+imgsArray[randomNumber]+'")';
},5000);
// he said: we can make all of this in one setInterval, one line

// 🔼5th lesson in special design