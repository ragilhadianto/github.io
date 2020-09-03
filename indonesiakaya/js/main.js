$(document).ready(function(){

    $('.headline__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        dots:true
    });

    //Kunjungi Kami
    $( "#galeri__inka" ).click(function() {
        $( this ).addClass("btn__solidOrange btn__solid");
        $("#taman__inka").removeClass("btn__solidOrange btn__solid");
        $(".section__item__inner").hide();
        $(".section__item__inner1").show();
    });
    $( "#taman__inka" ).click(function() {
        $( this ).addClass("btn__solidOrange btn__solid");
        $("#galeri__inka").removeClass("btn__solidOrange btn__solid");
        $(".section__item__inner1").hide();
        $(".section__item__inner2").show();
    });


    //header scroll
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".header").style.top = "0";
        } else {
            document.querySelector(".header").style.top = "-83px";
        }
        prevScrollpos = currentScrollPos;
    }
   
});

