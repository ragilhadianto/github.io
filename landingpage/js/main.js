$(document).ready(function() {
  window.sr = ScrollReveal();
  if ($(window).load(function() {
        $("#preloader").fadeOut("slow", function() {
            $(this).remove();

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

        		} else {
              $(".page__intro--hp--ite, .page__intro--text, .page__intro--girl").show();
              sr.reveal('.page__intro--girl', {
                duration: 750,
                delay: 400,
                origin: 'right',
                //reset: true,
                distance: "500px"
              }, 100);
              sr.reveal('.page__intro--text', {
                duration: 750,
                delay: 200,
                origin: 'right',
                //reset: true,
                distance: "500px"
              }, 100);
        		}

        })
    })
  )

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // desktop
  } else {
    var share_mobile = $(".share_mobile").hide();
  }


  //reveal


  sr.reveal('.page__prize--item', {
    //reset: true,
  }, 250);
  sr.reveal('.page__prize--item', {
    delay: 400,
    //reset: true,
  }, 250);
  sr.reveal('.page__challenge--video', {
    delay: 400,
    //reset: true,
    origin: 'bottom',
    //reset: true,
    distance: "50px"
  }, 250);
  sr.reveal('.page__gallery__inner', {
    delay: 400,
    //reset: true,
    origin: 'bottom',
    //reset: true,
    distance: "50px"
  }, 250);

  //menu mobile
  $('.menu__close').click(function () {
    $('.menu').animate({
      left:'-325px'
    }, 250 );
    $('.m_menu').removeClass('isDown');
  });

  $('.js-menu-link').click(function () {
    $('.menu').animate({
      left:'-325px'
    }, 250 );
    $('.m_menu').removeClass('isDown');
  });


  $(".m_menu").click( function(event){
      event.preventDefault();
      if ( $(this).hasClass("isDown") ) {
        $('.menu').animate({
          left:'-325px'
        }, 250 );
      } else {
        $('.menu').animate({
          left:'0'
        }, 250 );
      }
      $(this).toggleClass("isDown");
      return false;
  });


  //pop up
  $('.post_video--popup').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

  $('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		//focus: '#username',
		//modal: true,
    //closeOnContentClick: false,
	});

	$(document).on('click', '.modal__close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});


  //active menu
  $('.js-menu-link').click(function(e) {
		e.preventDefault();
		lnk = $(this).attr('data-href');
		$('html, body').animate({
			scrollTop: $(lnk).offset().top
		}, 500);
		// console.log(lnk);
		$('.js-menu-link').removeClass('active');
		$(this).addClass('active');

	});

  $(window).scroll(function () {
    var scrollpos = $(window).scrollTop();
		var winheight = $(window).height() - 40;

		// menu scroll
		$('div.page').each(function(index, el) {
			if ($(this).isOnScreen() == true) {
				pageid = $(this).attr('id');
				$('.js-menu-link').removeClass('active');
				$('.js-menu-link[data-href="#' + pageid + '"]').addClass('active');
			}
		});
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

//video embed youtube
var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player_a;
function onYouTubePlayerAPIReady() {
  player_a = new YT.Player('video1', {
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'autohide':1,
      'wmode':'opaque',
      'showinfo': 0,
      //'loop': 0,
      'rel': 0,
      //'playlist': 'ESDJxqeo2pM'
    },
    videoId: 'ESDJxqeo2pM',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

  player_b = new YT.Player('video2', {
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'autohide':1,
      'wmode':'opaque',
      'showinfo': 0,
      //'loop': 0,
      'rel': 0,
      //'playlist': 'ESDJxqeo2pM'
    },
    videoId: 'ESDJxqeo2pM',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  //player_a.setVolume(80);
  //player_b.setVolume(80);
}
function stopVideo() {

}

// when video ends
function onPlayerStateChange(event) {
  if(event.data === 0) {
    player_b.playVideo();
    // player_b.pauseVideo();
    // player_b.seekTo(0);
  }
}
