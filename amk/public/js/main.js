// slider home
$(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: ".slider__dots",
    arrows: false,
    //appendArrows: ".slider__arrow",
  });
$(".slider__item").slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: ".slider__item__dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1.1,
          slidesToScroll:1,
          arrows: false,
          infinite: false,
        }
      }
    ]
  });
$(".slider__promo").slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
          breakpoint: 1025,
          settings: "unslick"
      }
    ]
  });
$(".slider__product").slick({
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: ".slider__product__dots",
    responsive: [
      {
          breakpoint: 1025,
          settings: "unslick"
      }
    ]
  });
  $('.slider__nav').slick({
    slidesToShow:4,
    slidesToScroll: 4,
    asNavFor: '.slider',
    dots: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    draggable:false,
    focusOnSelect: true
  });

  // category slidedown
  $("#menu__category li > div").click(function(){    
    var target = $(this).parent().children("ul");
    var targetAll = $(this).parent().parent().find("ul");
    var targetImgAll = $(this).parent().parent().find("li img");
    var targetImg = $(this).find("img");
    $(targetAll).slideUp("slow");
    $(targetImgAll).removeClass("transform rotate-180");
    $(target).slideDown("slow");
    $(targetImg).addClass("transform rotate-180");
  });

  // smooth goto
  $(".btnsmooth").click(function(e) {
    var getId = $(this).attr('data-id');
    var btnsmoothAll = $(this).parent().parent().find("li a");
    $(btnsmoothAll).removeClass('color__orange font-bold');
    $(this).addClass('color__orange font-bold');
    $('html, body').animate({
        scrollTop: $(getId).offset().top - 20
    }, 1000);

  });

  // showhide 
  $(".btnshowhide").click(function(e) {
    var getId = $(this).attr('data-id');
    var btnshowhideAll = $(this).parent().parent().find("li > a");
    $(btnshowhideAll).removeClass('color__orange font-bold');
    $(this).addClass('color__orange font-bold');
    $(".content").hide();
    $(getId).show();
});

// accordion
$('.toggleAccordion').click(function(e) {
  e.preventDefault();
  
  let $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
      $this.find("img").removeClass("transform rotate-180");
      $this.parent().find(".toggleAccordion--menu").removeClass("flex-row-reverse");
      $this.find("span").removeClass("color__orange");
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li img').removeClass("transform rotate-180");
      $this.parent().parent().find('li .toggleAccordion--menu').removeClass("flex-row-reverse");
      $this.parent().parent().find('li .toggleAccordion--menu > span').removeClass("color__orange");
      $this.parent().parent().find('li .btnshowhide').removeClass('color__orange font-bold');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
      $this.find("img").addClass("transform rotate-180");
      $this.parent().find(".toggleAccordion--menu").addClass("flex-row-reverse");
      $this.find("span").addClass("color__orange");
      $this.find(".btnshowhide").addClass('color__orange font-bold');
  }
});


// kategori click mobile
$(".menuKategori").click(function() {
  $(".sidebar").addClass("active");
  $(".sidebarLayer").removeClass("hidden");
});
$(".sidebarLayer").click(function() {
  $(".sidebar").removeClass("active");
  $(".sidebarLayer").addClass("hidden");
});
$(".menuTampilkan").click(function() {
  $(".tampilkan").addClass("active");
  $(".sidebarLayer").removeClass("hidden");
});
$(".sidebarLayer").click(function() {
  $(".tampilkan").removeClass("active");
  $(".sidebarLayer").addClass("hidden");
});

//menu
$(".m_menuClick").click(function() {
  $(".m_menushow").removeClass("hidden");
});
$(".m_kategoriClick").click(function() {
  $(".m_kategorishow").removeClass("hidden");
});
$(".m_searchClick").click(function() {
  $(".m_searchshow").removeClass("hidden");
});
$(".m_closemenu").click(function() {
  $(".m_menushow, .m_kategorishow, .m_searchshow").addClass("hidden");
});






