$(document).ready(function(){
  //menu
  $(".menu__burger").on("click", function () {
    if ($(this).attr("data-click-state") == 1) {
      $(this).attr("data-click-state", 0);
      $(this).children().attr("src", "images/svg/menu__close.svg");
      $(".menu__inner").fadeIn();
      console.log("0");
    } else {
      $(this).attr("data-click-state", 1);
      $(this).children().attr("src", "images/svg/menu.svg");
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
    autoplaySpeed: 2000,
    appendDots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    appendArrows: ".slider__arrow",
    prevArrow:
      '<button class="prev-arrow"><img src="images/svg/arrow-left.svg"></button>',
    nextArrow:
      '<button class="next-arrow"><img src="images/svg/arrow-right.svg"></button>',
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
    $(this).prepend("<img class='w-auto absolute -left-5' src='images/svg/line.svg'/>");
  });

});
