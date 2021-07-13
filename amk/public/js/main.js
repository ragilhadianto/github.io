// slider home
$(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: ".slider__dots",
    arrows: false,
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
    appendDots: ".slider__item__dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1.1,
          slidesToScroll:1,
          arrows: false,
          infinite: false,
        }
      }
    ]
  });
$(".slider__promo").slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
          breakpoint: 1025,
          settings: "unslick"
      }
    ]
  });
$(".slider__product").slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: ".slider__product__dots",
    responsive: [
      {
          breakpoint: 1025,
          settings: "unslick"
      }
    ]
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

  // category slidedown
  $("#menu__category li > div").click(function(){    
    var target = $(this).parent().children("ul");
    var targetAll = $(this).parent().parent().find("ul");
    var targetImgAll = $(this).parent().parent().find("li img");
    var targetImg = $(this).find("img");
    $(targetAll).slideUp("slow");
    $(targetImgAll).removeClass("transform rotate-180");
    $(target).slideDown("slow");
    $(targetImg).addClass("transform rotate-180");
  });

  // smooth goto
  $(".btnsmooth").click(function(e) {
    var getId = $(this).attr('data-id');
    var btnsmoothAll = $(this).parent().parent().find("li a");
    $(btnsmoothAll).removeClass('color__orange font-bold');
    $(this).addClass('color__orange font-bold');
    $('html, body').animate({
        scrollTop: $(getId).offset().top - 20
    }, 1000);

  });

  // showhide 
  $(".btnshowhide").click(function(e) {
    var getId = $(this).attr('data-id');
    var btnshowhideAll = $(this).parent().parent().find("li a");
    $(btnshowhideAll).removeClass('color__orange font-bold');
    $(this).addClass('color__orange font-bold');
    $(".content").hide();
    $(getId).show();
});