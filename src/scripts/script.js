$(document).ready(function() {  
  
  $('.slider-main').slick({
    infinite: true,
    dots: false,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
    touchMove: false,
    swipe: false,
  });
  
  if ($(window).width() < 991) {
    $('.menu__button').fancybox();
  };
  
  $('.gallery__item-link').fancybox();
  
});