$(document).ready(function () {
    var $header = $(".header");
    var $header_height = $header.outerHeight();
    var $iconmenu = $(".menuOpen img");
    $(".menuOpen").on("click", function () {        
        //action
        $(this).addClass("hidden");
        $(".menuClose").removeClass("hidden");
        $(".menu").show();
        $(".header").addClass("menushow");
        $("body").addClass("overflow-hidden");      
    });

    $(".menuClose").on("click", function () {     
        $(this).addClass("hidden");   
        $(".menuOpen").removeClass("hidden");
        $(".menu").hide();
        $(".header").removeClass("menushow");
        $("body").removeClass("overflow-hidden");
    });

    $(".menuInner a").on("click", function () {     
        $(".menuClose").addClass("hidden");   
        $(".menuOpen").removeClass("hidden");
        $(".menu").hide();
        $(".header").removeClass("menushow");
        $("body").removeClass("overflow-hidden");
    });
    
    window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;        
        if (scrollpos >= $header_height) {
            $header.addClass("header__scroll");        
        } else{
             $header.removeClass("header__scroll");
        }   
        
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