	$(document).ready(function() {

		if ($(window).load(function() {
	            $("#preloader").fadeOut("slow", function() {
	                $(this).remove()

					//MAIN
					setTimeout(function() {
			        	$('.fullpage__cover').fadeIn(750);
					},500);
	            })
	        })
		)

		//COVER
		var initial_webkit_filter = "";

		$(".intro").on("mousemove", function(e) {
	        var button_left = $("#view-initiatives-button").offset().left - $(this).offset().left,
	            button_top = $("#view-initiatives-button").offset().top - $(this).offset().top,
	            button_centre_x = button_left + $("#view-initiatives-button").outerWidth() / 2,
	            button_centre_y = button_top + $("#view-initiatives-button").outerHeight() / 2,
	            mouse_x = e.pageX - $(this).offset().left,
	            mouse_y = e.pageY - $(this).offset().top,
	            diff_dilute = 5,
	            x_diff = mouse_x - button_centre_x,
	            y_diff = mouse_y - button_centre_y,
	            x_diff_dilute = x_diff / diff_dilute,
	            y_diff_dilute = y_diff / diff_dilute,
	            blur_dilute = 80,
	            x_y_diff_avg = Math.abs(x_diff) + Math.abs(y_diff) / 2,
	            x_y_diff_avg_dilute = x_y_diff_avg / blur_dilute,
	            blur_limit = 5;
	        $(".energy-layer-1").css("transform", "perspective(400px) translate3d(" + Math.round(1.2 * x_diff_dilute) + "px, " + Math.round(1.1 * y_diff_dilute) + "px, " + Math.round(x_diff_dilute * -1) + "px)"),
	        $(".energy-layer-2").css("transform", "perspective(400px) translate3d(" + Math.round(x_diff_dilute * -1) + "px, " + Math.round(y_diff_dilute) + "px, " + Math.round(y_diff_dilute) + "px)"),
	        $(".energy-layer-3").css("transform", "perspective(400px) translate3d(" + Math.round(x_diff_dilute) + "px, " + Math.round(y_diff_dilute * -1) + "px, " + Math.round(x_diff_dilute) + "px)"),
	        $(".energy-layer-1, .energy-layer-2, .energy-layer-3").css("-webkit-filter", initial_webkit_filter + " blur(" + (x_y_diff_avg_dilute > blur_limit ? blur_limit : Math.round(x_y_diff_avg_dilute)) + "px)").css("-moz-filter", initial_webkit_filter + " blur(" + (x_y_diff_avg_dilute > blur_limit ? blur_limit : Math.round(x_y_diff_avg_dilute)) + "px)").css("filter", initial_webkit_filter + " blur(" + (x_y_diff_avg_dilute > blur_limit ? blur_limit : Math.round(x_y_diff_avg_dilute)) + "px)");

    	}),


		//gallery
		$('.gallery-item').each(function() { // the containers for all your galleries
		    $(this).magnificPopup({
		        delegate: 'a', // the selector for gallery item
		        type: 'image',
		        gallery: {
		          enabled:true
		        }
		    });
		});


		//galeri tab
		$('.fullpage__galeri__tab__foto').click(function () {
			$(".fullpage__galeri__tab__video").removeClass("active");
			$(".fullpage__galeri__tab .keran").removeClass("active");
			$(".fullpage__galeri__tab__foto .keran").addClass("active");
			$(this).addClass("active");
			$(".fullpage__galeri__content__foto").show();
			$(".fullpage__galeri__content__video").hide();
	    });

		$('.fullpage__galeri__tab__video').click(function () {
			$(".fullpage__galeri__tab__foto").removeClass("active");
			$(".fullpage__galeri__tab .keran").removeClass("active");
			$(".fullpage__galeri__tab__video .keran").addClass("active");
			$(this).addClass("active");
			$(".fullpage__galeri__content__foto").hide();
			$(".fullpage__galeri__content__video").show();
	    });

		//maps
		$('.nav_2014').click(function () {
			$(".fullpage__map__nav ul li").removeClass("active");
			$(".fullpage__map__nav ul li").removeClass("animation__scaled");
			$(this).addClass("active");
			$(this).addClass("animation__scaled");
	       $('.map_2014').fadeIn("fast");
	       $('.fullpage__map__ket #area').text('18');
	       $('.fullpage__map__ket #pipa').text('6.161 km');
	       $('.fullpage__map #progress').text('Progres');
	       $('.fullpage__map #progress').css('color',"#fff");
	       $('.map_2015').fadeOut("fast");
	       $('.map_2016').fadeOut("fast");
	       $('.map_2017').fadeOut("fast");
	    });
		$('.nav_2015').click(function () {
			$(".fullpage__map__nav ul li").removeClass("active");
			$(".fullpage__map__nav ul li").removeClass("animation__scaled");
			$(this).addClass("active");
			$(this).addClass("animation__scaled");
	       $('.map_2015').fadeIn("fast");
	       $('.fullpage__map__ket #area').text('19');
	       $('.fullpage__map__ket #pipa').text('7.026 km');
	       $('.fullpage__map #progress').text('Progres');
	       $('.fullpage__map #progress').css('color',"#fff");
	       $('.map_2014').fadeOut("fast");
	       $('.map_2016').fadeOut("fast");
	       $('.map_2017').fadeOut("fast");
	    });
		$('.nav_2016').click(function () {
			$(".fullpage__map__nav ul li").removeClass("active");
			$(".fullpage__map__nav ul li").removeClass("animation__scaled");
			$(this).addClass("active");
			$(this).addClass("animation__scaled");
	       $('.map_2016').fadeIn("fast");
	       $('.fullpage__map__ket #area').text('21');
	       $('.fullpage__map__ket #pipa').text('7.267 km');
	       $('.fullpage__map #progress').text('Progres');
	       $('.fullpage__map #progress').css('color',"#fff");
	       $('.map_2015').fadeOut("fast");
	       $('.map_2014').fadeOut("fast");
	       $('.map_2017').fadeOut("fast");
	    });
		$('.nav_2017').click(function () {
			$(".fullpage__map__nav ul li").removeClass("active");
			$(".fullpage__map__nav ul li").removeClass("animation__scaled");
			$(this).addClass("active");
			$(this).addClass("animation__scaled");
	       $('.map_2017').fadeIn("fast");
	       $('.fullpage__map__ket #area').text('22*');
	       $('.fullpage__map__ket #pipa').text('*');
	       $('.fullpage__map #progress').text('Proyeksi');
	       $('.fullpage__map #progress').css('color',"#F5E201");
	       $('.map_2015').fadeOut("fast");
	       $('.map_2014').fadeOut("fast");
	       $('.map_2016').fadeOut("fast");
	    });

		//graphic
		$('.graphic_2014').click(function () {
			$(".graphic_wrap__nav ul li").removeClass("active");
			$(".graphic_wrap__nav ul li").removeClass("animation__scaled");
			$(this).addClass("active");
			$(this).addClass("animation__scaled");
	       $('.graphic_2014-img').css('display','block');
	       $('.graphic_wrap h2').text('2014');
	       $('.graphic_2015-img').css('display','none');
	       $('.graphic_2016-img').css('display','none');
	    });
		$('.graphic_2015').click(function () {
			$(".graphic_wrap__nav ul li").removeClass("active");
			$(".graphic_wrap__nav ul li").removeClass("animation__scaled");
			$(this).addClass("active");
			$(this).addClass("animation__scaled");
	       $('.graphic_2015-img').css('display','block');
	       $('.graphic_wrap h2').text('2015');
	       $('.graphic_2014-img').css('display','none');
	       $('.graphic_2016-img').css('display','none');
	    });
		$('.graphic_2016').click(function () {
			$(".graphic_wrap__nav ul li").removeClass("active");
			$(".graphic_wrap__nav ul li").removeClass("animation__scaled");
			$(this).addClass("active");
			$(this).addClass("animation__scaled");
	       $('.graphic_2016-img').css('display','block');
	       $('.graphic_wrap h2').text('2016');
	       $('.graphic_2014-img').css('display','none');
	       $('.graphic_2015-img').css('display','none');
	    });

	    //videoplayer
		$('li.video_1').click(function () {
			$(".placeholder .video_play").removeClass("showed");
			$(".placeholder .video_1").addClass("showed");
	    });
		$('li.video_2').click(function () {
			$(".placeholder .video_play").removeClass("showed");
			$(".placeholder .video_2").addClass("showed");
	    });
		$('li.video_3').click(function () {
			$(".placeholder .video_play").removeClass("showed");
			$(".placeholder .video_3").addClass("showed");
	    });
		$('li.video_4').click(function () {
			$(".placeholder .video_play").removeClass("showed");
			$(".placeholder .video_4").addClass("showed");
	    });
		$('li.video_5').click(function () {
			$(".placeholder .video_play").removeClass("showed");
			$(".placeholder .video_5").addClass("showed");
	    });


		//fullpage
		var fullIndex = $('.section').length;

	    $('#fullpage').fullpage({

			scrollingSpeed: 500,
            scrollOverflow: false,
            verticalCentered: !0,
            anchors:['firstPage', 'secondPage'],

            afterLoad: function(anchorLink, index){
	            var loadedSection = $(this);

	            //using index
	            if(index == 1){

	            	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
						$.fn.fullpage.setAutoScrolling(true);
					} else {
						$.fn.fullpage.setAutoScrolling(false);
					}

	            }
	            else if( index == 2){
	  				$.fn.fullpage.setAutoScrolling(true);
	            }
            },

			onLeave: function(index, nextIndex, direction){
	            var leavingSection = $(this);


	            if( index == 1 && direction =='down'){
	            	$('.section2 .text').addClass("showed");
	                $('.scrollup').addClass('show');
	                $('.share').addClass('hide');
	                $('.static__img__cover').addClass('moveUp');
	                $('.static__bg__2').addClass('moveDown');
	                $('.static__img__vector--1').addClass('moveDown');
	                $('.static__img__moon').addClass('moveDown');
	                $('.static__img__circle--a').addClass('moveDown');
	                setTimeout(function() {
	                	$('.static__img__circle--1').addClass('showed');
	                	$('.shadow_1').fadeOut(2000);
	                	$('.static__img__circle--a').fadeOut(1000);
					},1000);

	            }
	            else if( index == 2 && direction == 'up'){

	            	$('.static__img__cover').removeClass('moveUp');
	                $('.static__bg__2').removeClass('moveDown');
	                $('.static__img__vector--1').removeClass('moveDown');
	                $('.static__img__moon').removeClass('moveDown');
	                $('.static__img__circle--a').hide();

	                $('.scrollup').removeClass('show');
	                $('.share').removeClass('hide');

	            }
	            else if(index == 2 && direction == 'down'){

           			$('.static__img__vector--1').addClass('moveLeft');
           			$('.static__img__vector--2').addClass('moveRight');
           			$('.static__img__circle--b').addClass('moveDown');
           			$('.static__img__circle--a').hide();

	                setTimeout(function() {
	                	$('.static__img__circle--2').addClass('showed');
	                	$('.shadow_2').fadeOut(2000);
	                	$('.static__img__circle--b').fadeOut(1000);
					},1000);
	                setTimeout(function() {
	                	$('.car').addClass('showed');
					},1000);
	                setTimeout(function() {
	                	$('.car').addClass('animation__moveLeftb');
					},2500);

	            }
	            else if(index == 3 && direction == 'up'){
	            	$('.static__img__vector--1').removeClass('moveLeft');
	            	$('.static__img__vector--2').removeClass('moveRight');
	            	$('.static__img__circle--b').hide();

	            }
	            else if(index == 3 && direction == 'down'){

           			$('.static__img__vector--2').removeClass('moveRight');
           			$('.static__img__vector--2').addClass('moveLeft');
           			$('.static__img__vector--3').addClass('moveRight');
           			$('.static__img__circle--c').addClass('moveDown');
           			$('.static__img__circle--b').hide();

       			  	setTimeout(function() {
	                	$('.static__img__circle--3').addClass('showed');
	                	$('.shadow_3').fadeOut(2000);
	                	$('.static__img__circle--c').fadeOut(1000);
					},1000);

	            }
	            else if(index == 4 && direction == 'up'){
	            	$('.static__img__vector--2').addClass('moveRight');
	            	$('.static__img__vector--2').removeClass('moveLeft');
	            	$('.static__img__vector--3').removeClass('moveRight');
	            	$('.static__img__circle--c').hide();

	            }
	            else if(index == 4 && direction == 'down'){
           			$('.static__img__vector--3').addClass('moveUp');
           			$('.static__img__moon').addClass('moveUp');
           			$('.static__img__circle--c').hide();

	            }
	            else if(index == 5 && direction == 'up'){
	            	$('.static__img__vector--3').removeClass('moveUp');
	            	$('.static__img__vector--3').addClass('moveDown');
	            	$('.static__img__moon').removeClass('moveUp');
	            	$('.static__img__moon').addClass('moveDown');
	            	$('.static__bg__3').removeClass('moveDown');
	                $('.static__bg__2').removeClass('moveUp');

	            }
	            else if(index == 5 && direction == 'down'){
	                $('.static__bg__2').addClass('moveUp');
	                $('.static__bg__3').addClass('moveDown');

	            }
	            else if(index == 6 && direction == 'up'){
	            	$('.static__bg__2').removeClass('moveUp');
	                $('.static__bg__3').removeClass('moveDown');

	            }
	            else if(index == 6 && direction == 'down'){


	            }
	            else if(index == 7 && direction == 'up'){
            	 	$('.static__bg__3').removeClass('moveUp');
           			$('.static__bg__4').removeClass('moveDown');
	            }
	            else if(index == 7 && direction == 'down'){
	                $('.static__bg__3').addClass('moveUp');
           			$('.static__bg__4').addClass('moveDown');
	            }
	            else if(index == 8 && direction == 'up'){

	            }
	            else if(index == 8 && direction == 'down'){

	            }
	            else if(index == 9 && direction == 'up'){

	            }
	            else if(index == 9 && direction == 'down'){

	            }
	            else if(index == 10 && direction == 'up'){

	            }
	            else if(index == 10 && direction == 'down'){
	            	$('.static__bg__5').addClass('moveDown');

            	 	setTimeout(function() {
	                	$('.map_index').fadeIn('fast');
	                	$('.map_index').addClass('animation__sizeIn');
					},500);

            	 	setTimeout(function() {
	                	$('.fullpage__map h2').fadeIn('fast');
	                	$('.fullpage__map__nav').fadeIn('fast');
	                	$('.fullpage__map__ket').fadeIn('fast');
	                	$('.map_2014').fadeIn('fast');
					},1500);
	            }
	            else if(index == 11 && direction == 'up'){
	            	$('.static__bg__5').removeClass('moveDown');
	            }
	            else if(index == 11 && direction == 'down'){

	            }
	            else if(index == 12 && direction == 'up'){

	            }
	            else if(index == 12 && direction == 'down'){

	            }
	            else if(index == 13 && direction == 'up'){

	            }
	            else if(index == 13 && direction == 'down'){
	            	$('.static__img__content__bg').addClass('moveRight');

	            }
	            else if(index == 14 && direction == 'up'){
            		$('.static__img__content__bg').removeClass('moveRight');
	            }
	            else if(index == 14 && direction == 'down'){
	            	$('.static__bg__6').addClass('moveRight');
	            	$('.static__img__content__bg').removeClass('moveRight');
	            	$('.static__img__content__bg').addClass('moveLeft');
	            }
	            else if(index == 15 && direction == 'up'){
            		$('.static__bg__6').removeClass('moveRight');
            		$('.static__img__content__bg').addClass('moveRight');
	            	$('.static__img__content__bg').removeClass('moveLeft');
	            }
	            else if(index == 15 && direction == 'down'){
           			$('.static__bg__7').addClass('moveDown');
	            }
	            else if(index == 16 && direction == 'up'){
           			$('.static__bg__7').removeClass('moveDown');
	            }
	            else if(index == 16 && direction == 'down'){

	            }
	            else if(index == 17 && direction == 'up'){

	            }
	            else if(index == 17 && direction == 'down'){
	            	$('.static__bg__5b').addClass('moveDown');
	            }
	            else if(index == 18 && direction == 'up'){
           			$('.static__bg__5b').removeClass('moveDown');
	            }
	            else if(index == 18 && direction == 'down'){
	            	$('.static__bg__8').addClass('moveDown');
	            }
	            else if(index == 19 && direction == 'up'){
           			$('.static__bg__8').removeClass('moveDown');
	            }
	            else if(index == 19 && direction == 'down'){

	            }
	        }
	    });

	});
