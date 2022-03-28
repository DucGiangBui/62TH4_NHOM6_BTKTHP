<script src="http://code.jquery.com/jquery-latest.js"></script>;
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
    else $(".lentop").fadeOut();
  });
  $(".lentop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, "slow");
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var appendNumber = 4;
var prependNumber = 1;
document
  .querySelector(".prepend-2-slides")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  });
  
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabcursor: true,
  centeredslides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideshadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
