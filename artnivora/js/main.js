$('.slickSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: "unslick"
        }
    ]
  });

  $('.slickSlider').on('afterChange', function (event, slick, currentSlide) {
    if (currentSlide == 0) {
        $('.logo img').attr("src","img/logo.png");
    } else {
        $('.logo img').attr("src","img/logo_black.png");
    }    
  });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.logo img').attr("src","img/logo_black.png");
   }

//lazyload
lazyload();


$(".btn__close").click(function() {
    $('.about').removeClass('show');
    $('.itemVideo').removeClass('show');
});

$(".openVideo").click(function() {
    $(this).parent().children('.itemVideo').addClass('show');
});

$(".logo").click(function() {
    $('.about').addClass('show');
});
