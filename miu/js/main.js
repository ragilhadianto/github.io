$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        dots:true
    });

    $('.header__menuMobile').on('click',function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $(this).text("Close");
            $(".nav__inner, .header__menuMobile").addClass('show');
            $(".nav__logo__img, .header__logo__inner").hide();
            $(".header__logo__imgMenu, .nav__logoMobile").show();
          }
        else {
            $(this).attr('data-click-state', 1);
            $(this).text("Menu");
            $(".nav__inner, .header__menuMobile").removeClass('show');
            $(".nav__logo__img, .header__logo__inner").show();
            $(".header__logo__imgMenu, .nav__logoMobile").hide();
        } 
      });

    //scroll & click menu
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault();

        var target = $(this).attr("href"); 
        $('html, body').stop().animate({
                scrollTop: $(target).offset().top
        }, 600, function() {
                location.hash = target;
        });
        $(".header__menuMobile").text("Menu");
        $(".nav__inner, .header__menuMobile").removeClass('show');
        $(".header__logo__inner, .nav__logo__img").show();
        $(".header__logo__imgMenu, .nav__logoMobile").hide();
        $(".header__menuMobile").attr('data-click-state', 1);
        return false;
    });

});


function logoWhite(){
    //condition
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //$('.header__logo .header__logo__img').attr("src","images/logo_m.png");
    }else{
        //$('.header__logo .header__logo__img').attr("src","images/logo.png");
    }
    $('.nav__logo .nav__logo__img').attr("src","images/logo_bottom.png");
    $('.header__logo__img').attr("src","images/logo.png");
    $('.header__logo__imgMobile').attr("src","images/logo_m.png");
}
function logoBlack(){
    //condition
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //$('.header__logo .header__logo__img').attr("src","images/logo_m_black.png");
    }else{
        //$('.header__logo .header__logo__img').attr("src","images/logo_black.png");
    }
    $('.nav__logo .nav__logo__img').attr("src","images/logo_bottom_black.png");
    $('.header__logo__img').attr("src","images/logo_black.png");
    $('.header__logo__imgMobile').attr("src","images/logo_m_black.png");
}

$(window).scroll(function() {
    var getHeight = $( window ).height() - 200;
    var getHeightDefault = $( window ).height() + 500;
    var scrollDistance = $(window).scrollTop() + getHeight;

    console.log(getHeight);
    if (scrollDistance >= getHeightDefault) {
    		$('.scrollDown').fadeOut("fast");
    } else {
    		$('.scrollDown').fadeIn("fast");
    }

    $('.section').each(function(i) {

        if ($(this).position().top <= scrollDistance) {
            console.log(i);
            if (i == 0){
                console.log("0");
                $(".nav__inner, .header__menuMobile").removeClass("black");
                logoWhite();
            } else if  (i == 1){
                $(".nav__inner, .header__menuMobile").addClass("black");
                logoBlack();
                console.log("1");
            } else if  (i == 2 || i == 3 || i == 7){
                $(".nav__inner, .nav__contact, .header__menuMobile").removeClass("black");
                console.log("2 , 3");
                logoWhite();
            } else if  (i == 5 ){
                $(".nav__contact").addClass("black");
                $('.nav__contact img').attr("src","images/icon_contact_white.png");
                console.log("2 , 3");
            } else {
                $(".nav__inner, .header__menuMobile").addClass("black");
                $(".nav__contact").removeClass("black");
                $('.nav__contact img').attr("src","images/icon_contact.png");
                console.log("default");
                logoBlack();
            }
        }
    });
}).scroll();