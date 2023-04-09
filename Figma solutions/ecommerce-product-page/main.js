let currentImg = document.querySelector('.images-container .current-img');
let imageOpt = document.querySelectorAll('.img-opt div');
let imageOpt2 = document.querySelector('.img-opt');
let pickedImage = ['image-product-1.jpg', 'image-product-2.jpg','image-product-3.jpg','image-product-3.jpg'];
let cartDiv = document.querySelector('.cart div');
let cartCounter = document.querySelector('.cart > span');



// imageOpt.forEach((img) => {
//   // img.classList.remove('active');
//   img.addEventListener('click', (e) => {
//     handleActiveState(e)
//     // console.log(img.classList)
//     // img.classList.add('active');
//     console.log(e.target.parentElement)
//   })
// })

// see e.stopPropagation();
imageOpt2.addEventListener('click', (e) => {
  console.log(e.target.parentElement)
  e.target.parentElement.classList.remove('active');
  e.target.addEventListener('click',(ev) => {
    e.target.parentElement.classList.add('active');
    
  });
});

currentImg.innerHTML = `<img src="images/${pickedImage[1]}" alt="">`;



function  handleActiveState(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(ele =>{
    ele.classList.remove("active");
  });
  ev.target.classList.add("active");
};

// let cartDiv = document.querySelector('.cart div');🔴set it above, but I need to align 'em after all🔴


let curCount = document.querySelector('.product-count .cur-count');
curCount.children[0].onclick = ((e) => {
  if (curCount.children[1].innerHTML > 0){
    curCount.children[1].innerHTML = +curCount.children[1].innerHTML - 1;
  curCount.children[1].dataset.count = +curCount.children[1].dataset.count - 1;
  // little tiny mark above cart
  cartCounter.dataset.count = +cartCounter.dataset.count - 1;
  cartCounter.innerHTML = +cartCounter.innerHTML - 1;
  }
  if (cartCounter.dataset.count == 0) {
    cartCounter.style.display = "none";
  }
});
curCount.children[2].onclick = ((e) => {
  curCount.children[1].innerHTML = +curCount.children[1].innerHTML + 1;
  curCount.children[1].dataset.count = +curCount.children[1].dataset.count + 1;
  cartCounter.dataset.count = +cartCounter.dataset.count + 1;
  cartCounter.innerHTML = +cartCounter.innerHTML + 1;
  if (cartCounter.dataset.count > 0) {
    cartCounter.style.display = "inline-block";
  }
});