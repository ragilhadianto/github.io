$(document).ready(function() {

	if ($(window).load(function() {
				$("#preloader").fadeOut("slow", function() {
					$(this).remove();
					$(".page__intro__img1").addClass("show");

					anime.timeline({loop: false})
					 .add({
						 targets: '.ml15 .word',
						 scale: [14,1],
						 opacity: [0,1],
						 easing: "easeOutCirc",
						 duration: 500,
						 delay: function(el, i) {
							 return 800 * i;
						 }
					 });

						 setTimeout(function(){
							 $(".ml15").addClass("showb");

						 	setTimeout(function(){
						  	$(".page__intro__title p").addClass("showb");
							}, 1500);

						}, 100);


					});
				})
	);

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

	} else {
		$( ".video1" ).append("<video loop='' class='hidden-xs' muted='muted'><source src='video/video.mp4' type='video/mp4'><source src='video/video.warnebm' type='video/webm'></video>" );

		$(".video1 video").get(0).play();
	}


	$('.js-backtop').click(function(e) {
			e.preventDefault();
			$("html, body").animate({
					scrollTop: 0
			}, 'slow')
	});

	$(window).scroll(function() {
			var scrollpos = $(window).scrollTop();
			if (scrollpos > $(window).height()) {
					$(".scrollup").addClass("scrollup--show")
			} else {
					$(".scrollup").removeClass("scrollup--show")
			}
	});

	//video

	//$(".video1 video").prop('muted');

	window.sr = ScrollReveal();

	//ScrollReveal
	sr.reveal('p', { duration: 800 });
	sr.reveal('.photo img', { duration: 800 });
	sr.reveal('h2.animateload', { duration: 800 });
	sr.reveal('h3.animateload', { duration: 800 });
	sr.reveal('h4.animateload', { duration: 800 });
	sr.reveal('h5.animateload', { duration: 800 });
	sr.reveal('.footer ul li', { duration: 800 });
	sr.reveal('small', { duration: 800 });
	// sr.reveal('.footer .small__right', {
	// 	duration: 300,
	// 	delay: 200,
	// 	origin: 'right',
	// 	distance: "10vw"
	// });
	// sr.reveal('.footer .small__left', {
	// 	duration: 300,
  //   delay: 200,
  //   origin: 'left',
  //   distance: "10vw"
	// });

	$('.slideMedal').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		//dots: false,
		infinite: false,
		fade: false,
		speed: 1000,
		asNavFor: '.slider-nav'
	});

	$('.slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slideMedal',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: true
				}
			}]
	});
});
