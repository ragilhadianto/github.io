$(document).ready(function () {
  //slider
  $(".slider2col").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          infinite: true,
        }
      }
    ]

  });
  $(".slider1col").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
          infinite: true,
        }
      }
    ]
  });

  $(".slidercat").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:4,
          slidesToScroll:4,
        }
      }
    ]
  });

  $(".slider-product").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:2,
          slidesToScroll:2,
          infinite: true,
        }
      }
    ]
  });




  $( ".hamburger" ).click(function() {
    if($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $("body").removeClass('overflow-hidden');
        $(".menu").removeClass( "right-0" );
    } else {
        $(this).addClass('is-active');
        $("body").addClass('overflow-hidden');
        $(".menu").addClass( "right-0" );
    }
  });

   // smooth goto
   $(".btnGoTo").click(function(e) {
    var getId = $(this).attr('data-id');
    var btnGoTo = $(this).parent().parent().find("li a");
    $(btnGoTo).removeClass('active');
    $('.hamburger').removeClass('is-active');
    $("body").removeClass('overflow-hidden');
    $(".menu").removeClass( "right-0" );
    $(this).addClass('active');
    $('html, body').animate({
        scrollTop: $(getId).offset().top - 0
    }, 1000);

  });

  //gallery
  // $('.gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	tLoading: 'Loading image #%curr%...',
	// 	mainClass: 'mfp-img-mobile',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		// tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	// 		// titleSrc: function(item) {
	// 		// 	return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
	// 		}
	// });

});