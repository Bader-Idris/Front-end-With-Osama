let fontOpt = document.getElementById('font-size');
let colorsOpt = document.getElementById('colors-opt');
const colorArray = ["#00B4D8", "#FAA307", "#FF006E", "#8338EC", "#d70810", "#329171"];
const colorArrNames = ['blue', 'orange', 'pink', 'purple', 'red', 'green'];
const rootStyle = document.querySelector(':root').style;
const allCSS = document.querySelector('*');
const fontFamOpt = document.getElementById('fonts');
//----------------------------------------------------------------
// this is connecting color localStorage to our hex variable 

let mainColor = localStorage.getItem('main_color');
if (mainColor !== null) {
  rootStyle.setProperty("--main-color",mainColor);
  colorsOpt.childNodes.forEach((e) => {
    // e.classList.remove('active');// this and following if⬇️, makes bug, maybe because this has no classes
    e.addEventListener('click', (el) => {
      // if (e.dataset.color === mainColor) e.setAttribute('class','active');
      // if (e.dataset.color === mainColor) e.classList.add('active');
    })
  })
}
//----------------------------------------------------------------

// window.onload = function () {// better than window.onload ⬇️🔴DOMContentLoaded🔴
document.addEventListener('DOMContentLoaded', () => {
// differences between window.onload and addEventListener  DOMContentLoaded
  // creating our 16-32 pixels
  for (let i = 16; i <= 32; i++) {
    const opt = document.createElement('option');
    opt.innerHTML = `${i}px`;
    opt.setAttribute('data-fontSize', i);
    fontOpt.appendChild(opt);
  }
  // connecting our color names to its hex code
  for (let i = 0; i < colorArray.length; i++) {
    const opt = document.createElement('option');
    opt.innerHTML = colorArrNames[i];
    opt.setAttribute('data-color', colorArray[i]);
    colorsOpt.appendChild(opt);
  }
  // ----------------------------------------------------------------
  // font-family, now you need to make this as color, checking if localStorage has fontFamOpt to save its value
// fontFamOpt.onclick = (el) => {
  fontFamOpt.addEventListener('click', el => {//🔴in special design Osama made parent forEach, and child click event listener🔴
    // console.log(fontFamOpt.children)
    for (let i = 0; i < fontFamOpt.childElementCount; i++) {
      fontFamOpt.children[i].onclick = (e) => {
        if (e.target.value == localStorage.getItem('font_family')) {
          return false;
        }
        else { localStorage.setItem('font_family', e.target.value) }
        allCSS.style.fontFamily = e.target.value;
      }
    }
  });
  // --------------------------------TASK-----------------------------

  colorsOpt.childNodes.forEach((e) => {
    e.addEventListener('click', (el) => {
        rootStyle.setProperty('--main-color', e.dataset.color);
        if (e.dataset.color == localStorage.getItem('main_color')) return false;
        else { localStorage.setItem('main_color', e.dataset.color) }
      // console.log(e.getAttribute('data-color'));
      // e.target.dataset.color in special design, why target??
    })
  })
});
// };


// chat GPT3 said, it might be because of not loading the page,
//  or because chrome uses strict mode with non-user localStorage actions, as when user clicks on the el
// onclick might be the reason why this code only works in firefox not chrome
// see CHAT GPT3 CODE AMENDING HERE!!

// instead of using window.onload it used this:⬇️
// document.addEventListener('DOMContentLoaded', () => {

// });

// MDN says, DOMContentLoaded uploads only DOM, contrast to window.onload 
// which fires only when iframe, images all get loaded, [so in 95% use DOMContentLoaded eventlistener]


// this code brought from 27th lesson in special design,
//  might be the solution to selecting parents from their children

//Creating Handle active function
function  handleActiveState(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(ele =>{
    ele.classList.remove("active");
  });
  ev.target.classList.add("active");
};