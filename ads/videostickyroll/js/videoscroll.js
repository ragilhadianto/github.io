$(function () {

    var vid = $('.videoscroll_sticky');

    var top = vid.offset().top - parseFloat(vid.css('margin-top').replace(/auto/, 0));

    var videscrolldown = function () {

      var y = $(this).scrollTop();

      // whether that's below the form
      if (y >= top) {
          // if so, ad the fixed class
          if ( vid.is('.aside') ) {
              return;
          }
          vid.addClass('aside');
      } else {
          // otherwise remove it
          vid.removeClass('aside');
      }

    }

    function scrolllll() {
      videscrolldown();
    }

    $(window).on('scroll', scrolllll );

    $('.btn_close').click(function() {
      $('.videoscroll_sticky').removeClass('aside');
      $(window).unbind('scroll', scrolllll);
      //player.pauseVideo(0);
      player.setVolume(0);
      //videscrolldown = null;


    });


});
