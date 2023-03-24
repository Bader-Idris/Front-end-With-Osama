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

    // ------------------------------replaced in 27th----------------------------------
    // // removing children's active classes                                        ---
    // e.target.parentElement.querySelectorAll(".active").forEach(ele =>{
    //   ele.classList.remove("active");//important to solve 🔴elzero assignment's local storage🔴
    // });
    // //adding active class                                                        ---
    // e.target.classList.add("active");
    // ------------------------------replaced in 27th----------------------------------
    handleActiveState(e);//our event above, that simple
  });
});

//🔼 8th lesson Switching Colors

// cloned from 8th lesson, with some changes
const randomBgEl = document.querySelectorAll('.random-backgrounds span');
randomBgEl.forEach(span =>{
  span.addEventListener("click",(e)=>{
    // ------------------------------replaced in 27th----------------------------------
    // e.target.parentElement.querySelectorAll(".active").forEach(ele =>{
    //   ele.classList.remove("active");
    // });
    // e.target.classList.add("active");
    handleActiveState(e);//same function for every active state
    // ------------------------------replaced in 27th----------------------------------

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

//🔽16th lesson Animate SKills, too tough, my man🤯😮‍💨
// selecting skills selector
ourSkills = document.querySelector('.skills');

window.onscroll = function () {
  //skills Offset Top
  //🔽it's the point above skills section in scrolling
  let skillsOffsetTop = ourSkills.offsetTop;
  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // it's an🔴HTMLelement method. see MDN🔴
  // it picks el height including other parts as border...

  // window height
  let windowHeight = this.innerHeight;

  let windowScrollTop = this.scrollY //same as pageYOffset
  
  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill =>{
      skill.style.width = skill.dataset.progress;
    })
  }
}
//🔽18th lesson is important in DOM Osama said🔴 for pop-up usages
// creating pop-up using images
let ourGallery = document.querySelectorAll('.gallery img');
ourGallery.forEach(image => {
  image.addEventListener('click', (e)=>{
    // adding overlay element
    let overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);
    // creating our popup
    let popupBox = document.createElement("div");
    popupBox.className = 'popup-box';
        //----------------------------------
          // 19th lesson
          if (image.alt !== null) {
            // creating image's heading from alt text
            let imgHeading = document.createElement("h3");
            let imgText = document.createTextNode(image.alt);
            imgHeading.appendChild(imgText);
            // appending heading to popup box
            popupBox.appendChild(imgHeading);
          }
        //----------------------------------
    // creating our image inside popup box
    let popupImage = document.createElement("img");
    // setting image source
    popupImage.src = image.src;
    // appending image to popup box
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);
    // 19th continuing: creating closing[❌] span
    let closeButton = document.createElement("span");
    // creating cross symbol
    let closeButtonText = document.createTextNode("X");
    closeButton.appendChild(closeButtonText);
    closeButton.className = 'close-button';
    // adding close button to popup box
    popupBox.appendChild(closeButton);
  });
});
document.addEventListener("click",(e)=>{
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();//utilizing X symbol
    // removing overlay as second method
    document.querySelector(".popup-overlay").remove();
  }
})
// 25th lesson
const allBullets = document.querySelectorAll('.nav-bullets .bullet ');
allBullets.forEach((bullet) => {
  bullet.addEventListener("click",(e)=>{
    //web API has this lovely feature, Osama loves it to death
    // element.scrollIntoView() it's under experimental usages, not to be used in production code MDN said
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView see its compatibility
    document.querySelector(e.target.dataset.section).scrollIntoView({//this is dynamic unlike ".about-us"
      behavior: "smooth",// to be dynamic we create data-section in every bullet
    });
  });
});

// 26th lesson Enhancements And Organizing Code
// this is a repetition of previous allBullets, which is bad, remember[Don't repeat yourself]
// you have to make functions for repetitive loops
const links = document.querySelectorAll('.links a');
// links.forEach((link) => {
//   link.addEventListener("click",(e)=>{
//     e.preventDefault();//to stop links
//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

function scrollTo26Lesson(elements,OurDataset) {
  elements.forEach((ele) => {
    ele.addEventListener("click",(e)=>{
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
scrollTo26Lesson(links);//we can use this function instead of every element set that has [dataset.section]
//  as links and tooltip
// task: get all of your sections in an array.has(their classes) and then generate them with DOM
// to create an element.has(our bullets' sections) evert bullet has its dataset.section
// [to accomplish the mission] when any user adds new sections. the bullet get created automatically

// 27th lesson Creating Handle active function
function  handleActiveState(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(ele =>{
      ele.classList.remove("active");
    });
    ev.target.classList.add("active");
};
// osama said the code enhancing in 27th is more generic
// functions stops the huge waste or time DRY[don't repeat yourself]