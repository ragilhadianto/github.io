$(document).ready(function () {

    //header
    var $logo = $(".logo");
    var $iconmenu = $(".menuOpen img");
    var $langwebimg = $(".langweb img");
    var $langwebspan = $(".langweb .langweb__select");
    var $header = $(".header");
    var $header_height = $header.outerHeight();
    var $header__blue = $(".header__blue");

    window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;        
        if (scrollpos >= $header_height) {
            $header.addClass("header__scroll");
            $logo.attr("src","images/icon/logo_blue.png");
            $langwebimg.attr("src","images/icon/icon_web_blue.svg");
            $langwebspan.addClass("text-blue1");
            $iconmenu.attr("src","images/icon/icon_menu_blue.svg");

            $(".menuClose").on("click", function () {        
                $logo.attr("src","images/icon/logo_blue.png");
                $iconmenu.attr("src","images/icon/icon_menu_blue.svg");
                $langwebimg.attr("src","images/icon/icon_web_blue.svg");
                $langwebspan.addClass("text-blue1");
                $(".menu").hide();
                $(".header").removeClass("menushow");
                $("body").removeClass("overflow-hidden");   
            });            
        } else{
             $header.removeClass("header__scroll");
             $(".menuClick").attr("data-click-state", 1);
             $logo.attr("src","images/icon/logo_white.png");
             $langwebimg.attr("src","images/icon/icon_web.svg");
             $langwebspan.removeClass("text-blue1");
             $iconmenu.attr("src","images/icon/icon_menu.svg");

             if (($header).hasClass("header__blue")){
                console.log("header blue");
               $header.removeClass("header__scroll");
               $logo.attr("src","images/icon/logo_blue.png");
               $langwebimg.attr("src","images/icon/icon_web_blue.svg");
               $langwebspan.addClass("text-blue1");
               $iconmenu.attr("src","images/icon/icon_menu_blue.svg");
            }
 
             $(".menuClose").on("click", function () {        
                 $logo.attr("src","images/icon/logo_white.png");
                 $iconmenu.attr("src","images/icon/icon_menu.svg");
                 $langwebimg.attr("src","images/icon/icon_web.svg");
                 $langwebspan.removeClass("text-blue1");                 
                 $(".menu").hide();
                 $(".header").removeClass("menushow");
                 $("body").removeClass("overflow-hidden");    

                 if (($header).hasClass("header__blue")){
                    $logo.attr("src","images/icon/logo_blue.png");
                    $iconmenu.attr("src","images/icon/icon_menu_blue.svg");
                    $langwebimg.attr("src","images/icon/icon_web_blue.svg");
                    $langwebspan.addClass("text-blue1");
                    $(".menu").hide();
                    $(".header").removeClass("menushow");
                    $("body").removeClass("overflow-hidden");   
                }
             });
        }   
        
    });

    $(".menuOpen").on("click", function () {        
        //action
        $logo.attr("src","images/icon/logo_blue.png");
        $iconmenu.attr("src","images/icon/icon_menu_close.svg");
        $langwebimg.attr("src","images/icon/icon_web_blue.svg");
        $langwebspan.addClass("text-blue1");
        $(".menu").show();
        $(".header").addClass("menushow");
        $("body").addClass("overflow-hidden");      
    });

    $(".menuClose").on("click", function () {        
        $logo.attr("src","images/icon/logo_white.png");
        $iconmenu.attr("src","images/icon/icon_menu.svg");
        $langwebimg.attr("src","images/icon/icon_web.svg");
        $langwebspan.removeClass("text-blue1");
        $(".menu").hide();
        $(".header").removeClass("menushow");
        $("body").removeClass("overflow-hidden");

        if (($header).hasClass("header__blue")){
            $logo.attr("src","images/icon/logo_blue.png");
            $iconmenu.attr("src","images/icon/icon_menu_blue.svg");
            $langwebimg.attr("src","images/icon/icon_web_blue.svg");
            $langwebspan.addClass("text-blue1");
            $(".menu").hide();
            $(".header").removeClass("menushow");
            $("body").removeClass("overflow-hidden");    
        }
    });

    //slider
    $('.slider').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        draggable:true,
        focusOnSelect: true,
        appendArrows: ".slider-arrow",
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
              }
            }
          ]
      });

    $('.slider2').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        draggable:true,
        focusOnSelect: true,
        appendArrows: ".slider2-arrow",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
              }
            }
          ]
      });

    $('.slider3').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        draggable:true,
        focusOnSelect: true,
        appendArrows: ".slider3-arrow",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
              }
            }
          ]
      });

    
    //menu
    const mediaQuery = window.matchMedia('(min-width: 1024px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
        //desktop
        $('.menuInner > li').hover(function(e) {
            console.log("sdasd");
            e.preventDefault();
            var $this = $(this);
            var target = $(this).children("ul");
            var targetAll = $(this).parent().find("ul");    
            if ($this.children("ul").hasClass('show')) {
                $this.children("ul").removeClass('show');
            } else {
                $(targetAll).removeClass('show');
                $this.children("ul").toggleClass('show');
            }      
          });
    } else{
       //mobile
        $('.menuInner li > a').click(function() {
            //e.preventDefault();
            var $this = $(this);
            var target = $(this).parent().children("ul");
            var targetAll = $(this).parent().parent().find("ul");

            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.next().slideUp(500);
            } else {
                $(targetAll).removeClass('show');
                $(targetAll).slideUp(500);
                $this.next().toggleClass('show');
                $this.next().slideToggle(500); 
            }      
        });
    }
    
    
    // accordion
    $('#accordion li > div:first-child').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var target = $(this).parent().children(".accordionInner");

        //console.log(target);
        var targetAll = $(this).parent().parent().find(".accordionInner");
        var arrow = $(this).parent().parent().find("span > img");
        console.log(arrow);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(500);
            arrow.removeClass("rotate-180");
        } else {
            $(targetAll).removeClass('show');
            arrow.removeClass("rotate-180");
            $(targetAll).slideUp(500);
            $this.next().toggleClass('show');
            $this.next().slideToggle(500); 
            $this.find("span img").addClass("rotate-180");
        }      
      });

      //tabbing
        $('#tabs-nav li:first-child').addClass('active');
        $('.tab-content').hide();
        $('.tab-content:first').show();

        // Click function
        $('#tabs-nav li').click(function(){
            $('#tabs-nav li').removeClass('active');
            $(this).addClass('active');
            $('.tab-content').hide();
            
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
});

// video YT 
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player("yt-player", {
    playerVars: {
        autoplay: 0,
        controls: 1,
        autohide: 1,
        wmode: "opaque",
        showinfo: 0,
        loop: 0,
    },
    videoId: "LKNr9rVR85c",
    events: {
        onReady: onPlayerReady,
    },
    });
}

function onPlayerReady(event) {
    //event.target.mute();
    //player.setVolume(0);
    // player.playVideo();
}
function stopVideo() {}
$(".yt-player-click").click(function(e) {        
    $(".yt-player-click").addClass("z-10");
    $("#yt-player").removeClass("hidden");
    player.playVideo();
});