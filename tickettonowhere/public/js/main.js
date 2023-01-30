$(document).ready(function () {
    
    $('.slider').slick({
        autoplay:true,
        slidesToShow:4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        draggable:false,
        focusOnSelect: false,
        pauseOnHover:false,
        autoplaySpeed: 2000,
        cssEase: "cubic-bezier(0.165, 0.84, 0.44, 1)",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
              }
            }
          ]
  });

});