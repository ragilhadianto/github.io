/* ------------------------------------------------------------------------------
@name: ScaneClick
@description: ScaneClick
--------------------------------------------------------------------------------- */

// - ScaneClick
const ScaneClick = (() => {

  const handleScaneClick = () => {

    $(document).ready(function() {

      // jump menu
      $('a[href^="#"]').on('click',function (e) {
        var target = this.hash,
            $target = $(target);
      
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top-55
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
      });


      // menu
      $('.menuClick').on('click',function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).removeClass('is-active');
            $('.menu').removeClass('active');
          }
          else {
            $(this).attr('data-click-state', 1);
            $(this).addClass('is-active');
            $('.menu').addClass('active');
        }
      });      
      $('.menu a').click(function() {
          $('.menuClick').attr('data-click-state', 0);
          $('.menuClick').removeClass('is-active');
          $('.menu').removeClass('active');
      });

      //menu scroll state 
      $(window).scroll(function () {
          var scrollDistance = $(window).scrollTop();
          $(".page-section").each(function (i) {
            if ($(this).position().top - 200 <= scrollDistance) {
              $(".menu a").removeClass("active");
              $(".menu a").eq(i).addClass("active");
            }
            if ($(this).position().top - 100 <= scrollDistance) {
              $(".menu a").removeClass("active");
              $(".menu a").eq(i).addClass("active");
            }
          });
        })
        .scroll();


        // // magnific
      $('.zoom-gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          closeOnContentClick: false,
          closeBtnInside: false,
          mainClass: 'mfp-with-zoom mfp-img-mobile',
          image: {
              verticalFit: true,
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


      // end
    });    
  };



  // - init
  const init = () => {
    // handleScrollAnimate();
    handleScaneClick();
  };

  // return
  return {
    init,
  };
})();

export default ScaneClick;
