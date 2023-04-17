
const $All = (s) => document.querySelectorAll(s);
const $ = (s) => document.querySelector(s);

const imageOpt = $All('.img-opt img');

const currentImg = $('.images-container .current-img');
const pickedImage = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];
const cartCounter = $('.cart > span');
const cartDiv = $('.hidden div:nth-child(2)');
const toggleSVG = $('.toggle-menu svg');
const productBtn = $('.product-count button');

const prevImg = `<img src="images\\icon-previous.svg" alt="">`;
const nextImg = `<img src="images\\icon-next.svg" alt="">`;

currentImg.innerHTML = `<img src="images/${pickedImage[0]}" alt=""><span>${prevImg}</span><span>${nextImg}</span>`;

imageOpt.forEach((img, key) => {
  img.addEventListener('click', (e) => {
    handleActiveState(e)
    currentImg.innerHTML = `<img src="images/${pickedImage[key]}" /alt=""><span>${prevImg}</span><span>${nextImg}</span>`;
    const div = document.createElement('div');
    div.setAttribute('class', 'light-box');
    div.innerHTML = currentImg.innerHTML;
    div.childNodes[1].classList.add('left-arrow');
    div.childNodes[2].classList.add('right-arrow');
    document.body.appendChild(div);
  })
})

currentImg.addEventListener('click', (e) => {
  let currentIndex;
  pickedImage.forEach((cur, ind) => {
    if (currentImg.children[0].src.split('/').slice(-1).join('/') === cur) {
      currentIndex = ind;
    }
  });
  if (e.target === currentImg.children[1] || e.target.parentNode === currentImg.children[1]) {
    if (currentIndex > 0) {
      currentImg.children[0].src = `images/${pickedImage[currentIndex - 1]}`;
    }
  } else if (e.target === currentImg.children[2] || e.target.parentNode === currentImg.children[2]) {
    if (currentIndex < pickedImage.length - 1) {
      currentImg.children[0].src = `images/${pickedImage[currentIndex + 1]}`;
    }
  }
});

function  handleActiveState(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(ele =>{
    ele.classList.remove("active");
  });
  ev.target.classList.add("active");
};

let curCount = $('.product-count .cur-count');
curCount.children[0].onclick = ((e) => {
  if (curCount.children[1].innerHTML > 0) {
  updateCount(-1);
  }
});
curCount.children[2].onclick = ((e) => {
  updateCount(1);
});

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
function updateCount(num) {
  curCount.children[1].innerHTML = +curCount.children[1].innerHTML + num;
  curCount.children[1].dataset.count = +curCount.children[1].dataset.count + num;
}

let tLinks = $('header nav ul');
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

// const $ = (s) => document.querySelector(s);