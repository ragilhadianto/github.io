$(document).ready(function() {

  if ($(window).load(function() {
        $("#preloader").fadeOut("slow", function() {
            $(this).remove()
        })
    })
  )

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // desktop
  } else {
    var share_mobile = $(".share_mobile").hide();
  }

  var heg = $(window).height();
  $('.main__feature').height(heg);
  $('.main__feature .display-table').height(heg);
  $('.main__feature .display-center').height(heg);

  $(".button-play").click(function() {
    $('html, body').animate({
        scrollTop: $(".main__post").offset().top
    }, 750);
  });

  //sticky home
  $(window).scroll(function(event){
   //scroll header
   if ($(this).scrollTop() > heg) {
       $(".header").addClass("fix");
       $('.oppokompas').addClass("fix");
   } else {
       $(".header").removeClass("fix");
       $('.oppokompas').removeClass("fix");
   }
 });

  //sticky
  $(window).scroll(function(event){
   //scroll header
   if ($(this).scrollTop() > 150) {
       $(".header__read").addClass("fix");
       $('.oppokompas').addClass("fix");
   } else {
       $(".header__read").removeClass("fix");
       $('.oppokompas').removeClass("fix");
   }
 });

  // $('.m_menu').click(function () {
  //     $('.menu').animate({
  //       left:'0'
  //     }, 250 );
  // });

  $('.menu__close').click(function () {
    $('.menu').animate({
      left:'-325px'
    }, 250 );
    $('.m_menu').removeClass('isDown');
  });


  $(".m_menu").click( function(event){
      event.preventDefault();
      if ( $(this).hasClass("isDown") ) {
        $('.menu').animate({
          left:'-325px'
        }, 250 );
      } else {
        $('.menu').animate({
          left:'0'
        }, 250 );
      }
      $(this).toggleClass("isDown");
      return false;
  });


  //slide slick
  $('.slickcenter').slick({
    centerMode: false,
    slidesToShow: 3,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 641,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 3,
          autoplay: false,
        }
      }
    ]
  });

  //pop up
  $('.post_popup').magnificPopup({
  		delegate: 'a',
  		type: 'image',
  		closeOnContentClick: false,
  		closeBtnInside: false,
  		mainClass: 'mfp-with-zoom mfp-img-mobile',
  		image: {
  			verticalFit: true,
  			titleSrc: function(item) {
  				return item.el.attr('title') + '<a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank"></a>';
  			}
  		},
  		gallery: {
  			enabled: true
  		},
  		zoom: {
  			enabled: true,
  			duration: 300, // don't foget to change the duration also in CSS
  			opener: function(element) {
  				return element.find('img');
  			}
  		}
	});

  $('.post_video--popup').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-with-zoom',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});





});
