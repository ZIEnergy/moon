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
  
});