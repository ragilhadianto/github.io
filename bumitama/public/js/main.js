//slider
$(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1.3,
          slidesToScroll:1,
          arrows: false,
          infinite: false,
        }
      }
    ]
  });


  //video

  $('.ytplay').click(function(){
    var v_parent = $(this).parent();  
    $(v_parent).children('.ytplayer').removeClass('hidden');
  });

  $('.ytplayer .close_button').click(function(){
    var v_parent = $(this).parent();
    var v_iframe = $(this).siblings('iframe');

    $(v_parent).addClass('hidden');
    $(v_parent).find('iframe').remove();
    $(v_parent).append(v_iframe);
  
  });