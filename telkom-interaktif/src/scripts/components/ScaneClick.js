/* ------------------------------------------------------------------------------
@name: ScaneClick
@description: ScaneClick
--------------------------------------------------------------------------------- */

// - ScaneClick
const ScaneClick = (() => {

  const handleScaneClick = () => {

    $(document).ready(function() {


        


        // magnific
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
        $('.zoom-gallery2').magnificPopup({
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
        $('.zoom-gallery3').magnificPopup({
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

        // fivebold-click
        $(".fivebold-click").click(function (e) {    
            var $parent = $(this).parents()
            $(this).parents().children(".fivebol-desc").slideToggle("hidden");
        });
        $(".fivebol-desc img").click(function (e) {    
            $(".fivebol-desc").fadeOut();
        });
        
        // sectionB2b
        var $backB2b = $(".backB2b");
        var $landing = $("#sectionB2b");
        var $sectionUmkm = $("#sectionUmkm");
        var $sectionKorporasi = $("#sectionKorporasi");
        var $sectionPemerintahan = $("#sectionPemerintahan");
        var $staticimg1 = $(".static-img-1");

        $(".clickUmkm").click(function (e) {    
            fullpage_api.setAllowScrolling(false);
            $backB2b.fadeIn('playdown13');            
            $staticimg1.addClass('playdown13');         
            $(".scroll-guide").fadeOut();               
            $landing.addClass('off');
            $sectionUmkm.addClass('show'); 
            $('.slick-js').slick('setPosition'); 
        });
        $(".clickKorporasi").click(function (e) {    
            fullpage_api.setAllowScrolling(false);
            $staticimg1.addClass('playdown13'); 
            $(".scroll-guide").fadeOut(); 
            $backB2b.fadeIn(); 
            $landing.addClass('off');
            $sectionKorporasi.addClass('show'); 
            $('.slick-js').slick('setPosition');           
        });
        $(".clickPemerintahan").click(function (e) {    
            fullpage_api.setAllowScrolling(false);
            $(".scroll-guide").fadeOut(); 
            $landing.addClass('off'); 
            $staticimg1.addClass('playdown13'); 
            $backB2b.fadeIn();
            $sectionPemerintahan.addClass('show'); 
            $('.slick-js').slick('setPosition');   
        });
        $backB2b.click(function (e) {    
            fullpage_api.setAllowScrolling(true);
            $(".scroll-guide").fadeIn(); 
            $staticimg1.removeClass('playdown13');
            $backB2b.fadeOut();
            $("#sectionUmkm, #sectionKorporasi, #sectionPemerintahan").removeClass('show');
            $landing.removeClass('off');
        });

        // slick-js
        $('.slick-js').slick({
            slidesToShow: 1,
            dots:false,
            infinite:false
        });


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
