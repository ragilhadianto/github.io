$(document).ready(function () {

    $('.slider').slick({
        autoplay:true,
        slidesToShow:1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        draggable:true,
        focusOnSelect: false,
        pauseOnHover:true,
        autoplaySpeed: 2000,
        cssEase: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
              }
            }
          ]
    });
    $('.quote').slick({
        autoplay:true,
        slidesToShow:1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        draggable:true,
        focusOnSelect: true,
        pauseOnHover:true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    });

    // hamberger menu
    var hamburger = document.querySelector(".hamburger");
    var menu = document.querySelector(".menu");
    function hamburgerclassToggle() {
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('block');
        console.log("adasd");
    }
    hamburger.addEventListener('click', hamburgerclassToggle);

    // see all
    $( ".seeall" ).click(function() {
        $(".fullall").toggleClass("h-auto");
      });

});
