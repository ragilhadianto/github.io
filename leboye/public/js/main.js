$(document).ready(function(){
  //menu
  $(".menu__burger").on("click", function () {
    if ($(this).attr("data-click-state") == 1) {
      $(this).attr("data-click-state", 0);
      //$(this).children().attr("src", "images/svg/menu__close.svg");
      $(".menu__inner").fadeIn();
      $(".buttonsvg").addClass('-menu-open');
      console.log("0");
    } else {
      $(this).attr("data-click-state", 1);
      //$(this).children().attr("src", "images/svg/menu.svg");
      $(".buttonsvg").removeClass('-menu-open');
      $(".menu__inner").fadeOut();
      console.log("1");
    }
  });

  //slider
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    appendDots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.slider').on('init', function(event, slick, currentSlide, nextSlide){
  
 });
  
 $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  if ($('.slick-current .item').hasClass('dark-mode')) {
    console.log("ada");
    $(".logo img").attr("src","images/logo_white.svg");
    $(".menu img").attr("src","images/svg/menu_white.svg");
    $(".item__arrow img").attr("src","images/svg/arrow-right2_white.svg");
    $(".item__text").addClass("text-white");
    $(".item__position").addClass("text-white");
    $(".buttonsvg").addClass('buttonsvg--white');
  } else {
    $(".logo img").attr("src","images/logo.svg");
    $(".menu img").attr("src","images/svg/menu.svg");
    $(".item__arrow img").attr("src","images/svg/arrow-right2.svg");
    $(".item__text").removeClass("text-white");
    $(".item__position").removeClass("text-white");
    $(".buttonsvg").removeClass('buttonsvg--white');
  }
});



  $(".slider-b").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendArrows: ".slider__arrow",
    // prevArrow:
    //   '<button class="prev-arrow"><img src="images/svg/arrow-left.svg"></button>',
    // nextArrow:
    //   '<button class="next-arrow"><img src="images/svg/arrow-right.svg"></button>',
  });

  //menu slidedown
  $(".menu__category li > a").click(function(){    
    var target = $(this).parent().children("ul");
    var targetParent = $(this).parent().parent().find("ul");
    var targetParent_a = $(this).parent().parent().parent().find("ul li a");
    var targetParent_atop = $(this).parent().parent().parent().find("a > img");
    $(targetParent).slideUp("fast");
    $(target).slideToggle("fast");
    $(targetParent_a).removeClass('active');
    $(targetParent_atop).remove();
    $(this).addClass('active');
    $(this).prepend("<img class='w-auto absolute -left-4' src='images/svg/bullet.svg'/>");
  });

  
  //overlay white
  if($('.overlayVideo').length){
    //
  } else {
    $('.layer').fadeOut();
  }
  const observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();

});

  //detect end page
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.bg__whitegradient').fadeOut('fast');
    }else{
      $('.bg__whitegradient').fadeIn('fast');
    }
    if ($(this).scrollTop() > 50) {
      $('.bg__whitegradient__top').fadeIn('fast');
    } else {
      $('.bg__whitegradient__top').fadeOut('fast');
    }
 });

