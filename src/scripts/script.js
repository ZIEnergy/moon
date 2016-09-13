$(document).ready(function() {
  
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
  
  if ($(window).width() < 991) {
    $('.menu__button').fancybox();
  };
  
  $('.gallery__item-link').fancybox();
  
});