$(document).ready(function() {
	//img
	$("body img").not( ".not_change img, img.not_change").attr("src","images/assets_1.jpg");
	$(".headline__thumb__img img").attr("src","images/assets_2.jpg");

	//text
	$("body p, body a").css( "color", "#ddd" );
	$(".not_textblock, .not_textblock p, .not_textblock a, h3.not_textblock").css({
   'font-family' : 'Roboto, sans-serif',
	});

});
