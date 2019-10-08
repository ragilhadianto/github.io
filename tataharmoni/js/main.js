$(document).ready(function() {

  if ($(window).load(function() {
        $("#preloader").fadeOut("slow", function() {
            $(this).remove()
        })
    })
  )


  
  //scroll
  $(window).scroll(function() {
			var scrollpos = $(window).scrollTop();
			if (scrollpos > $(".header").outerHeight()) {
					$(".header__index").addClass("header--show");
					$(".header__index #logoutama").attr("src","images/logo_blue.png");
			} else {
					$(".header__index").removeClass("header--show");
          $(".header__index #logoutama").attr("src","images/logo.png");
			}
	});


  //slider
  $('.slider_img').slick({
    autoplay: true,
    dots:false,
    arrows:false,
    fade: true,
    autoplaySpeed:1500,
 });

 //tab
 $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  //accordion
  $('.accordion__toggle').click(function(e) {
    	e.preventDefault();

      var $this = $(this);

      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.removeClass("current");
          //$this.children(".fa-caret-down").removeClass("fa-caret-down");
          //$this.children(".fa").addClass("fa-caret-right");
          $this.next().slideUp(350);
      } else {
          $this.parent().parent().find('li .inner').removeClass('show');
          $this.parent().parent().find('li .accordion__toggle').removeClass("current");
          //$this.parent().parent().find('li .accordion__toggle .fa').removeClass("fa-caret-down");
          //$this.children(".fa").removeClass("fa-caret-right");
          $this.parent().parent().find('li .inner').slideUp(350);
          $this.toggleClass("current");
          //$this.children(".fa").toggleClass("fa-caret-down");
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
      }
  });

  $('.header__menu__mobileicon').click(function(e) {
    $('.header__menu ul').addClass('show');
  });


  $(document).click(function(e) {
   if (!$(e.target).is('.header__menu__mobileicon, .header *')) {
       $(".header__menu ul").removeClass('show');
   }
   });

});
//
