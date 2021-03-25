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
  autoplay: false,
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

// //backtotop
// $(window).scroll(function () {
//   var height = $(window).scrollTop();
//   console.log(height);
//   if (height > 200) {
//     $(".backtotop").fadeIn();
//   } else {
//     $(".backtotop").fadeOut();
//   }
// });
// $(document).ready(function () {
//   $(".backtotop").fadeOut();
//   $(".backtotop").click(function (event) {
//     event.preventDefault();
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//     return false;
//   });
// });
