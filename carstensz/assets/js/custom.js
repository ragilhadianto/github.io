//scroll
$(window).scroll(function() {
    var scrollpos = $(window).scrollTop();
    if (scrollpos > $(".header").outerHeight()) {
        $(".header").removeClass("header-bg-transparent");
        $(".header__home .logo").attr("src","../assets/img/logo.png");
    } else {
        $(".header").addClass("header-bg-transparent");
        $(".header__home .logo").attr("src","../assets/img/logo_white.png");
    }
});


