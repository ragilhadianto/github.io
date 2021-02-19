// copy this
//var path = 'http://capital-six.com/indonesiakaya/wp-content/themes/indonesiakaya-5/';

// modal
MicroModal.init({
  openTrigger: "data-micromodal-trigger",
  disableScroll: true,
  awaitCloseAnimation: true,
});

// slider home
$(".slider").slick({
  dots: true,
  infinite: false,
  speed: 500,
  fade: true,
  appendDots: ".slider__dots",
});

//slider rekomendasi produk
$(".slider-4col").slick({
  dots: true,
  infinite: false,
  speed: 500,
  arrows: true,
  appendDots: ".slider__dots2",
  slidesToShow: 4,
  slidesToScroll: 4,
  appendArrows: ".slider__arrow",
  prevArrow:
    '<button class="prev-arrow"><img src="images/svg/icon-arrow-prev.svg"></button>',
  nextArrow:
    '<button class="next-arrow"><img src="images/svg/icon-arrow-next.svg"></button>',
});
