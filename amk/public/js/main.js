// slider home
$(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: ".slider__dots",
    //appendArrows: ".slider__arrow",
  });
$(".slider__item").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: ".slider__item__dots"
  });
$(".slider__promo").slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
  });
$(".slider__product").slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: ".slider__product__dots"
  });
  $('.slider__nav').slick({
    slidesToShow:4,
    slidesToScroll: 4,
    asNavFor: '.slider',
    dots: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    draggable:false,
    focusOnSelect: true
  });