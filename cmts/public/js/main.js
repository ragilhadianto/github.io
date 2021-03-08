//menu
$(".header__mobile").on("click", function () {
  $(this).attr("data-click-state", 0);
  $(".header").addClass("active");
  console.log("0");
});
$(".header__mobile__close, .header__nav__bg").on("click", function () {
  $(this).attr("data-click-state", 1);
  $(".header").removeClass("active");
  console.log("1");
});

//slider
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000,
  appendDots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow:
    '<button class="arrow prev-arrow"><img src="images/svg/arrow_prev.svg"></button>',
  nextArrow:
    '<button class="arrow next-arrow"><img src="images/svg/arrow_next.svg"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});
