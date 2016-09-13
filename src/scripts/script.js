$(document).ready(function() {
  
  $('.menu__button').click(function(e) {
    e.preventDefault();
    $('.menu__wrapper').addClass('menu__wrapper--active');
  });
  
  $('.menu__close').click(function(){
    $('.menu__wrapper').removeClass('menu__wrapper--active');
  });
  
  var imageIndex = 0;
  var imagesArray = [
      "http://placehold.it/1919x1079/000000",
      "http://placehold.it/1921x1081/000000",
      "http://placehold.it/1920x1080/000000"
  ];

  function changeBackground(){
      var index = imageIndex++ % imagesArray.length;
      $(".slider-main").hide();
      $(".slider-main").css("background","url('"+ imagesArray[index] + "') no-repeat center");
      $(".slider-main").fadeIn(3000);
  }
  
  setInterval(changeBackground, 8000);
  
  $('[data-gallery]').fancybox();
  
  $('[data-entry]').fancybox({
    padding: 0
  });
  
  $('[data-entry-form-link]').click(function(e) {
    e.preventDefault();
    $('.tabs__item').removeClass('tabs__item--active');
    $(this).addClass('tabs__item--active');
    $('[data-entry-about]').hide();
    $('[data-entry-form]').fadeIn('fast');
  });
  
  $('[data-entry-about-link]').click(function(e) {
    e.preventDefault();
    $('.tabs__item').removeClass('tabs__item--active');
    $(this).addClass('tabs__item--active');
    $('[data-entry-form]').hide();
    $('[data-entry-about]').fadeIn('fast');
  });
  
  
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
  
});