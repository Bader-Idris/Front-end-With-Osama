let currentImg = document.querySelector('.images-container .current-img');
let imageOpt = document.querySelectorAll('.img-opt img');
let pickedImage = ['image-product-1.jpg', 'image-product-2.jpg','image-product-3.jpg','image-product-4.jpg'];
let cartCounter = document.querySelector('.cart > span');
const toggleSVG = document.querySelector('.toggle-menu svg');
let cartDiv = document.querySelector('.hidden div:nth-child(2)');
const productBtn = document.querySelector('.product-count button');


currentImg.innerHTML = `<img src="images/${pickedImage[0]}" alt=""><span></span><span></span>`;

imageOpt.forEach((img, key) => {
  img.addEventListener('click', (e) => {
    handleActiveState(e)
    currentImg.innerHTML = `<img src="images/${pickedImage[key]}" /alt=""><span></span><span></span>`;
    // e.target.src.split('/').slice(-2).join('/'); // useful with long img.src attributes
    const div = document.createElement('div');
    div.setAttribute('class', 'light-box');
    div.innerHTML = currentImg.innerHTML;
    div.childNodes[1].classList.add('left-arrow');
    div.childNodes[2].classList.add('right-arrow');
    document.body.appendChild(div);
  })
})

function  handleActiveState(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(ele =>{
    ele.classList.remove("active");
  });
  ev.target.classList.add("active");
};

let curCount = document.querySelector('.product-count .cur-count');
curCount.children[0].onclick = ((e) => {
  if (curCount.children[1].innerHTML > 0) {
  updateCount(-1);
  }
});
curCount.children[2].onclick = ((e) => {
  updateCount(1);
});

function updateCount(num) {
  curCount.children[1].innerHTML = +curCount.children[1].innerHTML + num;
  curCount.children[1].dataset.count = +curCount.children[1].dataset.count + num;
}
// cartDiv // this cart div is there to put selected products by user.
productBtn.onclick = (e) => {
  cartCounter.dataset.count = curCount.children[1].innerHTML;
  cartCounter.innerHTML = curCount.children[1].innerHTML;
  if (cartCounter.dataset.count > 0) {
    cartCounter.style.display = "inline-block";
  } else {
    cartCounter.style.display = "none";
  }
};


let tLinks = document.querySelector('header nav ul');
toggleSVG.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle('menu-active');
  tLinks.classList.toggle('open');
}
document.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target !== toggleSVG && e.target !== tLinks) {
    if(tLinks.classList.contains('open')) {
      tLinks.classList.toggle('open');
      toggleSVG.classList.toggle('menu-active');
    }
  }
});