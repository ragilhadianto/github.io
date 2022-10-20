$(document).ready(function () {

  //header
  const header = document.querySelector(".header");
  const header_height = header.offsetHeight;
  window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;

      if (scrollpos >= header_height) {
          //console.log("down");
          header.classList.add("header__scroll");
      } else {
          //console.log("up");
          header.classList.remove("header__scroll");
      }

      //console.log(scrollpos);
  });

  var lastScrollTop = 0;
  function scrollHeader2() {
    var st = $(this).scrollTop();

    if (st < lastScrollTop || st <= 100) {
      $(".header").css("top", "0");
    } else {
      $(".header").css("top", "-110px");
    }   
    lastScrollTop = st;
  }

  window.addEventListener("scroll", scrollHeader2);

//slider
var slickslider = document.querySelector('.slider2col');
if (slickslider != null) {
  //action
  $(".slider2col").slick({
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
            breakpoint: 768,
            settings: "unslick",
        }
      ]
    });
}


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

  //clickmore
  $('#clickmore').click(function(){
    $(this).parent().removeClass('h-wrap-m');
    $(this).parent().removeClass('h-wrap');
    $(this).hide();
  });

  
  //menuMobile
  
  // Mobile Version
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    
  
  } else {

  }


  const mediaQuery768 = window.matchMedia('(max-width: 1024px)')
  const mediaQuery1024 = window.matchMedia('(min-width: 1024px)')
  // Check if the media query is true
  if (mediaQuery768.matches) {
    // // Then trigger an alert
    // alert('Media Query Matched!')

    $(".dropbtn__sub").attr("href","javascript:void(0);");

    $('.menuMobile').click(function(){
      $('.header__menu').addClass('active');
    });
    $('.menuMobileClose').click(function(){
      $('.header__menu').removeClass('active');
      $('.sub__search').removeClass('active');
      $('.header__menu__sub').removeClass('active');
    });
    
    $('.dropbtn__sub').click(function(){
      $(this).next().addClass('active');
      $('.header__sub').removeClass('hidden');
      $('.header__sub__logo').addClass('hidden');
    });

    $('.dropbtn__search').click(function(){
      $(this).next().addClass('active');
    });

    $('.menuMobileBack').click(function(){
      $('.dropdown-content').removeClass('active');
      $('.header__sub').addClass('hidden');
      $('.header__sub__logo').removeClass('hidden');
    });
    
    $('.sidemenuClick').on('click',function(){
      if($(this).attr('data-click-state') == 1) {
          $(this).attr('data-click-state', 0);
          $(this).find('img').addClass('-rotate-180');
          $('.sidemenu').css('left', '0')
        }
      else {
        $(this).attr('data-click-state', 1);
        $('.sidemenu').css('left', '-295px');
        $(this).find('img').removeClass('-rotate-180');
      }
    });

    $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop() + 100;
  
      $('.about-content').each(function() {
        if ($(this).position().top <= scrollDistance) {
            $('.sidemenu').fadeIn('slow');           
        }
        else{
          $('.sidemenu').fadeOut('slow');
        }
    });
      
    }).scroll();
 
  }

  if (mediaQuery1024.matches){
    $('.container').click(function(){
      $('.sub__search').removeClass('active');
      $('.header__menu__sub').removeClass('active');
    });
  }

  //tabbing

  $('#tab-content > div').hide();
  $('#tab-content div:first').show();
  
  $('#nav li').click(function() {
      $('#nav li a').removeClass("active, text-orange1");
      $(this).find('a').addClass("active, text-orange1");
      $('#tab-content > div').hide();
  
      var indexer = $(this).index(); //gets the current index of (this) which is #nav li
      $('#tab-content > div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
  });


  //scroll and click nav  page

    $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      $('.sidemenuClick').attr('data-click-state', 1);
      $('.sidemenu').css('left', '-295px');
      $('.sidemenu').find('img').removeClass('-rotate-180');

      return false;
  });

    $('.navigation-year a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });

  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 100;

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active text-green1');      
            $('.navigation--yellow a.active').removeClass('active text-orange1');         
            $('.navigation a > img').addClass('hidden');
            $('.navigation--yellow a > img').addClass('hidden');
            $('.navigation a').eq(i).addClass('active text-green1');           
            $('.navigation--yellow a').eq(i).addClass('active text-orange1');           
            $('.navigation a > img').eq(i).removeClass('hidden');
            $('.navigation--yellow a > img').eq(i).removeClass('hidden');     
        }
    });

    

    $('.page-section-year').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation-year a.active').removeClass('active text-orange1');
            $('.page-section-year').removeClass('text-orange1');
            $('.navigation-year a').eq(i).addClass('active text-orange1');
            $('.page-section-year').eq(i).addClass('text-orange1');
        }
    });
    
  }).scroll();


  // accordion
  $('.toggleAccordion').click(function(e) {
    e.preventDefault();
    
    let $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
        $this.parent().removeClass('text-orange1');
        $this.find("img").removeClass("transform rotate-180");
        $this.find("img.arrowhistory").attr("src","images/svg/icon__arrow__bottom__green.svg");
    } else {
        $this.parent().parent().find('.inner').removeClass('show');
        $this.parent().parent().find('.innerm').removeClass('show');
        $this.parent().parent().find('.innerm--history').removeClass('text-orange1');
        $this.parent().parent().find('img').removeClass("transform rotate-180");
        $this.parent().parent().find('img.arrowhistory').attr("src","images/svg/icon__arrow__bottom__green.svg")
        $this.parent().parent().find('.page-section-year').removeClass('text-orange1');
        $this.parent().parent().find('.inner').slideUp(350);
        $this.parent().parent().find('.innerm').slideUp(350);
        $this.parent().parent().find('.innerm').slideUp(350);
        $this.parent().closest('.page-section-year').addClass('text-orange1');
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
        $this.find("img").addClass("transform rotate-180");
        $this.find("img.arrowhistory").attr("src","images/svg/icon__arrow__bottom__orange.svg");
    }
  });


});