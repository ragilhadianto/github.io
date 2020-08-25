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

    //lazyload
    lazyload();

    $(".logo").click(function() {
        $('.btn__close').addClass('show');
        $('.about').addClass('show');
        $('.logo img').attr("src","img/logo_black.png")
    });

    $(".btn__close").click(function() {
        $('.about').removeClass('show');
        $('.btn__close').removeClass('show');
        //$('.logo img').attr("src","img/logo.png");
    });

    $(".btn__close--video").click(function() {
        $('.itemVideo').removeClass('show');
        $(this).removeClass('show');
    });

    $(".openVideo").click(function() {
        $(this).parent().children('.itemVideo').addClass('show');
        var hWrapVideo = $(this).children('img').height();
        $(this).parent().children('.itemVideo').height(hWrapVideo);
        console.log(hWrapVideo);
    });

    $('.slickSlider').on('afterChange', function (event, slick, currentSlide) {
    if (currentSlide == 0) {
        $('.logo img').attr("src","img/logo.png");        
        $(".btn__close").click(function() {
            $('.logo img').attr("src","img/logo.png");
        });
        $('.slick-prev, .slick-next').removeClass('black');
    } else {
        $('.logo img').attr("src","img/logo_black.png");
        $(".btn__close").click(function() {
            $('.logo img').attr("src","img/logo_black.png");
        });
        $('.slick-prev, .slick-next').addClass('black');
    }    
    });

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.logo img').attr("src","img/logo_black.png");

        $(".btn__close").click(function() {
            $('.logo img').attr("src","img/logo_black.png");
        });

    } else{

        $(".btn__close").click(function() {
            $('.logo img').attr("src","img/logo.png");
        });
    }



// get height
// var hWrapVideo = $(".openVideo img").attr('height',$(".openVideo img").height());

// $(".itemVideo").height(hWrapVideo);

// console.log(hWrapVideo);
