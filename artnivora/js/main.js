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
        $('.about h3').removeClass("black");
        $('.btn__close img').attr("src","img/close.png");
    } else {
        $('.logo img').attr("src","img/logo_black.png");
        $('.about h3').addClass("black");
        $('.btn__close img').attr("src","img/close_black.png");
    }    
  });

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.logo img').attr("src","img/logo_black.png");
        $('.btn__close img').attr("src","img/close_black.png");
   } else{
        $(".logo").click(function() {
            $('.about').addClass('show');
        });
   }

//lazyload
lazyload();


$(".btn__close").click(function() {
    $('.about').removeClass('show');
    $('.itemVideo').removeClass('show');
});

$(".openVideo").click(function() {
    $(this).parent().children('.itemVideo').addClass('show');
    var hWrapVideo = $(this).children('img').height();
     $(this).parent().children('.itemVideo').height(hWrapVideo);
    console.log(hWrapVideo);
});


// get height
// var hWrapVideo = $(".openVideo img").attr('height',$(".openVideo img").height());

// $(".itemVideo").height(hWrapVideo);

// console.log(hWrapVideo);
