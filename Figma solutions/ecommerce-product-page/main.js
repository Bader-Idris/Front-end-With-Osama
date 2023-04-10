let currentImg = document.querySelector('.images-container .current-img');
let imageOpt = document.querySelectorAll('.img-opt img');
let pickedImage = ['image-product-1.jpg', 'image-product-2.jpg','image-product-3.jpg','image-product-4.jpg'];
let cartDiv = document.querySelector('.cart div');
let cartCounter = document.querySelector('.cart > span');

currentImg.innerHTML = `<img src="images/${pickedImage[0]}" alt="">`;

imageOpt.forEach((img, key) => {
  img.addEventListener('click', (e) => {
    handleActiveState(e)
    currentImg.innerHTML = `<img src="images/${pickedImage[key]}" /alt="">`;
    // e.target.src.split('/').slice(-2).join('/'); // useful with long img.src attributes
    // console.log(currentImg.innerHTML)
  })

  // --------------------------------------------------------
  // 🔴continue this task, as for creating a div appearing pics🔴
  let imageOptActive = document.querySelectorAll('.img-opt img.active');
  imageOptActive.forEach((dif) => {
    dif.addEventListener('click', (evo) => {
      console.log(evo);
    })
  })
  // --------------------------------------------------------
})

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