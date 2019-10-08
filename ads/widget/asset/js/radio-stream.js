function popupCenter(url, title, w, h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	// radioclose();
	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 
function radioclose() {
	return document.getElementById( 'js-radio' ).style.display = 'none';
}

$(document).ready(function() {
	$(window).scroll(function () {
		var scrollpos = $(window).scrollTop();
		var hblock = $('.header').outerHeight();

		// scroll header
		if(scrollpos > hblock + 20) {
			$('#js-radio').addClass('radio--show');
		} else {
			$('#js-radio').removeClass('radio--show');
		}
	});

});