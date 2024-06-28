/*
  BOM [Browser Object Model]
  Local Storage Practice
*/
let lis = document.querySelectorAll('ul li');
let exp = document.querySelector(".experiment");

if(window.localStorage.getItem('color')){
  // if The Color exists in localStorage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3]Add Active Class To Current Color 🔴Most Important🔴
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li)=>{
  li.addEventListener("click",(e)=>{
    // console.log(e.currentTarget.dataset.color);

    // Remove Active Class From all Lis, he duplicate it, not to remove it
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    // Add Active to Current Element
    e.currentTarget.classList.add('active');
    // Add Current Element to Local Storage
    window.localStorage.setItem('color', e.currentTarget.dataset.color);
    // Changing Div BG Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});