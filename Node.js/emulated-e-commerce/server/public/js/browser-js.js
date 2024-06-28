let scrollToTop = document.querySelector('.scroll-to-top');
scrollToTop.style.display = "none";
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY < 1000) {
      scrollToTop.style.display = "none";
    } else {
      if (getComputedStyle(scrollToTop).display === "none") {
        scrollToTop.style.display = "inline-block";
      }
    }
  });
  scrollToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});