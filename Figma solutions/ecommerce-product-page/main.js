
const $All = (s) => document.querySelectorAll(s),
      $ = (s) => document.querySelector(s),
      imageOpt = $All('.img-opt img'),
      currentImg = $('.images-container .current-img'),
      pickedImage = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'],
      cartCounter = $('.cart > span'),
      cart = $('.cart'),
      cartDiv = $('.hidden div:nth-child(2)'),
      hiddenCart = $('.hidden'),
      toggleSVG = $('.toggle-menu svg'),
      productBtn = $('.product-count button'),
      IMG_PATH = "images\\",
      prevImg = `<img src="${IMG_PATH}icon-previous.svg" alt="">`,
      nextImg = `<img src="${IMG_PATH}icon-next.svg" alt="">`
;
let currentPrice = $('.current-price span:first-of-type');
const priceText = currentPrice.innerHTML.substring(1).replace(/\.\d{2}/, '');

currentImg.innerHTML = `<img src="images/${pickedImage[0]}" alt=""><span>${prevImg}</span><span>${nextImg}</span>`;

imageOpt.forEach((img, key) => {
  img.addEventListener('click', (e) => {
    handleActiveState(e)
    currentImg.innerHTML = `<img src="images/${pickedImage[key]}" alt=""><span>${prevImg}</span><span>${nextImg}</span>`;
    const div = currentImg.cloneNode(true);
    div.setAttribute('class', 'light-box');
    div.childNodes[1].classList.add('left-arrow');
    div.childNodes[2].classList.add('right-arrow');
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);
    const closeButton = document.createElement("span");
    closeButton.textContent = "X";
    closeButton.className = 'close-button';
    div.appendChild(closeButton);
    document.body.appendChild(div);
  });
});

//🔴I want to make [.images-container .img-opt img] changes its active when exiting other clicked images🔴
document.addEventListener('click', (e) => {
  const l = $('.left-arrow');
  const r = $('.right-arrow');
  let i = pickedImage.indexOf(currentImg.children[0].src.split('/').slice(-1).join('/'));
  if (e.target === currentImg.children[1] || e.target.parentNode === currentImg.children[1] || e.target === l || e.target.parentNode === l) {
    i = (pickedImage.length + i - 1) % pickedImage.length;
  } else if (e.target === currentImg.children[2] || e.target.parentNode === currentImg.children[2] || e.target === r || e.target.parentNode === r) {
    i = (i + 1) % pickedImage.length;
  }
  currentImg.children[0].src = `images/${pickedImage[i]}`;
  if ($('.light-box')) $('.light-box img').src = `images/${pickedImage[i]}`;
});
function handleActiveState(ev) {
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

cart.onclick = function() {//using this keyword, is only workable with this syntax, not arrow func
  this.classList.toggle('clicked');// EXTREMELY IMPORTANT 
};
productBtn.onclick = (e) => {
  const count = curCount.children[1].innerHTML;
  cartCounter.dataset.count = count;
  cartCounter.innerHTML = count;
  if (count > 0) {
    cartDiv.remove();
    cartCounter.style.display = "inline-block";
    const product = $All('.hidden .product')[0];
    if (!product || product.querySelector('h4').innerHTML !== $('.main-article h1').innerHTML) {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h4>${$('.main-article h1').innerHTML}</h4>
        <div class="prices">
          <span></span>
          <span></span>
        </div>
        <button class="button-yo" >Checkout</button>
        <span class="close-button"></span>`;
      hiddenCart.appendChild(div);
    }
    const [priceSpan, totalSpan] = $All('.product .prices span');
    priceSpan.innerHTML = `$${+priceText}.00 x ${+count}`;
    totalSpan.innerHTML = `$${+priceText * +count}.00`;
  } else {
    cartCounter.style.display = "none";
    hiddenCart.appendChild(cartDiv);
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
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    if ($(".popup-overlay")) $(".popup-overlay").remove();
    if (hiddenCart.childElementCount < 2) {
      hiddenCart.appendChild(
        Object.assign(document.createElement("div"),
        {innerHTML: 'Your cart is Empty.',
        className: 'empty-cart'})
        );
        cartCounter.style.display = "none";
    }
  }
});
// add above in its proper place: handleActiveState(ev) for 🔽
// 🔴 I need to check if currentImg is same as opt-imgs is active or not, when clicking to be active 🔴

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){
    if ($('.light-box')) {
      $('.light-box').remove();
      $('.popup-overlay').remove();
    };
  }
});
