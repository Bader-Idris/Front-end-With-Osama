let currentImg = document.querySelector('.images-container .current-img');
let imageOpt = document.querySelectorAll('.img-opt div');
let imageOpt2 = document.querySelector('.img-opt');
let pickedImage = ['image-product-1.jpg', 'image-product-2.jpg','image-product-3.jpg','image-product-3.jpg'];

// imageOpt.forEach((img) => {
//   // img.classList.remove('active');
//   img.addEventListener('click', (e) => {
//     handleActiveState(e)
//     // console.log(img.classList)
//     // img.classList.add('active');
//     console.log(e.target.parentElement)
//   })
// })

imageOpt2.addEventListener('click', (e) => {
  console.log(e.target.parentElement)
  e.target.parentElement.classList.remove('active');
  e.target.addEventListener('click',(ev) => {
    e.target.parentElement.classList.add('active');
  });
});
//   e.addEventListener('click', (event) => {
//     console.log(event.target)

//   // }
//   // console.log(e.target)
//   // e.forEach(() => {
//   //   handleActiveState();
//   // });
//   })
// });

currentImg.innerHTML = `<img src="images/${pickedImage[1]}" alt="">`;






function  handleActiveState(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(ele =>{
    ele.classList.remove("active");
  });
  ev.target.classList.add("active");
};