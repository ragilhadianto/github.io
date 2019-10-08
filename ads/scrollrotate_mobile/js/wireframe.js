$(document).ready(function() {
  // if ($(window).load(function() {
  //       $("#preloader").fadeOut("slow", function() {
  //           $(this).remove();
  //
  //       })
  //   })
  // )

	$("body img").not( ".menu img, .logo img, .scroll_motion img, .headline img" ).attr("src","images/assets_1.jpg");
	$(".headline img").attr("src","images/assets_2.jpg");
	//$("body a img").attr("src","images/assets_1.jpg");
	$("body p, body a").css( "color", "#eee" );


});
