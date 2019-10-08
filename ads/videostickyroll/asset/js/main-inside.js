$(document).ready(function() {

    // scroll
    var inside = $('.theme--inside').length;
    // if(inside==0) {
        $('.header').addClass('header--show');
    // }

    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var winheight = $(window).height() - 40;

        // var hblock = $('.header').outerHeight();
        // var navsticky = $('.nav').outerHeight();

        // scroll header
        // if(inside>0) {
        //     if(scrollpos > winheight) {
        //         $('.header').addClass('header--show');
        //         // $('.nav').addClass('nav--sticky');
        //         // $('.js-nav-offset').css({
        //         //     'padding-top': '47px',
        //         // });
        //         // $('.js-kcm-stick').addClass('kcm__stick--sticky')
        //     } else {
        //         $('.header').addClass('header--show');            
        //         // $('.nav').removeClass('nav--sticky');
        //         // $('.js-nav-offset').removeAttr('style');
        //         // $('.js-kcm-stick').removeClass('kcm__stick--sticky')
        //     }
        // } 
        // console.log(scrollpos);
        // console.log(hblock);

        // menu scroll
        $('div.page').each(function(index, el) {
            if ($(this).isOnScreen() == true) {
                pageid = $(this).attr('id');
                $('.js-menu-link').removeClass('nav__link--active');
                $('.js-menu-link[data-href="#' + pageid + '"]').addClass('nav__link--active');
            }
        });
    });

    if(inside!=0) {
        $('.js-menu-link').click(function(e) {
            e.preventDefault();
            lnk = $(this).attr('data-href');
            $('html, body').animate({
                scrollTop: $(lnk).offset().top
            }, 500);
            // console.log(lnk);
            $('.js-menu-link').removeClass('nav__link--active');
            $(this).addClass('nav__link--active');
        });
    }
    // $('.js-inside-content').perfectScrollbar({
    //     swipePropagation: true,
    //     wheelPropagation: true
    // });

    // menu
    $('#js-menu').click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(".nav").toggleClass("nav--show");
        $(this).toggleClass("active");
    });
    $(document).click(function() {
        $(".nav").removeClass("nav--show");
        $('#js-menu').removeClass("active");
    });

    // tabs
    $('[data-type="tabs"]').each(function(){

        var $active, $content, $links = $(this).find('a');
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        //$active = $active.parent();
        var $activeNameClass = $active.attr('class');
        $active.addClass($activeNameClass+'--active');
        $content = $($active.attr('href'));

        $links.not($active).each(function () {
            $($(this).attr('href')).hide();
        });

        $(this).on('click', 'a', function(e){
            $active.removeClass($activeNameClass+'--active');
            $content.hide();

            $active = $(this);
            $content = $($(this).attr('href'));

            $active.addClass($activeNameClass+'--active');
            $content.show();

            e.preventDefault();
        });
    });

    // slider
    var prevarrow = "<a href='#' class='timeline__button timeline__button--left'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>";
    var nextarrow = "<a href='#' class='timeline__button timeline__button--right'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>"
    $('.js-timeline').slick({
        // autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplaySpeed: 10000,
        // pauseOnFocus: true,
        // fade: true,
        infinite: false,
        arrows: true,
        // variableWidth: true,
        // cssEase: 'ease',
        prevArrow: prevarrow,
        nextArrow: nextarrow,
        // asNavFor: '.js-hl-thumb'
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        // {
        //   breakpoint: 600,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1
        //   }
        // },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    });
});

// screen
$.fn.isOnScreen = function isOnScreen() {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    //return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || (viewport.bottom-200) < bounds.top || (viewport.top) > bounds.bottom));
};
