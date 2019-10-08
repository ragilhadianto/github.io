$(document).ready(function() {

    var prevarrow = "<a href='#' class='icon-photo-slider icon-photo-left'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>";
    var nextarrow = "<a href='#' class='icon-photo-slider icon-photo-right'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>"

    // headline images
    $('.js-images-channel').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        // fade: true,
        // arrows: false,
        cssEase: 'ease',
        prevArrow: prevarrow,
        nextArrow: nextarrow
    });
    $('.js-images-headline').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        fade: true,
        dots: false,
        // arrows: false,
        pauseOnFocus: true,
        prevArrow: prevarrow,
        nextArrow: nextarrow
    });
});
