$(document).on('ready', function () {
    // initialization of header
    var header = new HSHeader($('#header')).init();

    // initialization of mega menu
    var megaMenu = new HSMegaMenu($('.js-mega-menu'), {
      desktop: {
        position: 'left'
      }
    }).init();

    // initialization of unfold
    var unfold = new HSUnfold('.js-hs-unfold-invoker').init();

    // initialization of slick carousel
    $('.js-slick-carousel').each(function() {
      var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
    });

    // initialization of form validation
    $('.js-validate').each(function () {
      var validation = $.HSCore.components.HSValidation.init($(this));
    });

    // initialization of aos
    AOS.init({
      duration: 650,
      once: true
    });

    // initialization of go to
    $('.js-go-to').each(function () {
      var goTo = new HSGoTo($(this)).init();
    });
  });


// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

//   $(".parentMenu").attr("href", "javascript:void(0);");

// } else {
  
// }


  if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) document.write('<script src="../../assets/vendor/polifills.js"><\/script>');