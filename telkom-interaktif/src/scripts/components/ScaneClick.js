/* ------------------------------------------------------------------------------
@name: ScaneClick
@description: ScaneClick
--------------------------------------------------------------------------------- */

// - ScaneClick
const ScaneClick = (() => {

  const handleScaneClick = () => {

    $(document).ready(function() {


        // slick-js
        $('.slick-js').slick({
            slidesToShow: 1,
            dots:false,
            infinite:false
        });

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
            $landing.velocity({
                opacity: "0",
                top: "-100%",
            }, {
                delay: 0,
                duration: 400,
                begin: function () {
                    $sectionUmkm.velocity({
                        top: "0",
                        opacity: "1"
                    })
                }
            })
        });
        $(".clickKorporasi").click(function (e) {    
            fullpage_api.setAllowScrolling(false);
            $staticimg1.addClass('playdown13'); 
            $backB2b.fadeIn();            
            $landing.velocity({
                opacity: "0",
                top: "-100%",
            }, {
                delay: 0,
                duration: 400,
                begin: function () {
                    $sectionKorporasi.velocity({
                        top: "0",
                        opacity: "1"
                    })
                }
            })
        });
        $(".clickPemerintahan").click(function (e) {    
            fullpage_api.setAllowScrolling(false);
            $staticimg1.addClass('playdown13'); 
            $backB2b.fadeIn();            
            $landing.velocity({
                opacity: "0",
                top: "-100%",
            }, {
                delay: 0,
                duration: 400,
                begin: function () {
                    $sectionPemerintahan.velocity({
                        top: "0",
                        opacity: "1"
                    })
                }
            })
        });
        $backB2b.click(function (e) {    
            fullpage_api.setAllowScrolling(true);
            $staticimg1.removeClass('playdown13');
            $backB2b.fadeOut();
            $("#sectionUmkm, #sectionKorporasi, #sectionPemerintahan").velocity({
                opacity: "0",
                top: "100%",
            }, {
                delay: 0,
                duration: 400,
                begin: function () {
                    $landing.velocity({
                        top: "0",
                        opacity: "1"
                    })
                }
            })
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
