$(document).ready(function() {
	// $("body").addClass('splash--active');
	countdown();

	function countdown() {
		var counter = $('.js-splash-timer').attr('data-start');
		var counter2 = 20;
		var interval = setInterval(function() {
			counter--;
			console.log(counter);
			$('.js-splash-timer').text(counter);
			if (counter == 0) {
				// munculin button
				clearInterval(interval);
				displaybutton();

				// ilangin semua0
				setTimeout(function () {
					$('#js-splash').hide("fast", hello());
				}, 15000);
				// return false;
			}
		}, 1000);
		return true;
	}

	function displaybutton() {
		// $("body").removeClass('splash--active');
		$('.splash__article').removeAttr('style');
		$('.js-splash-link').removeClass('splash--hide');
		$('.splash__timer').addClass('splash--hide');
	}

	$('.js-splash-link').click(function(e) {
		// alert('s');
		e.preventDefault();
		// $("body").removeClass('splash--active');
		$('#js-splash').hide("fast", hello());
	});

	function hello() {
		console.log('yey');
	}

});

// http://assets.kompas.com/data/2017/wp/js/welcomescreen.js?v=6