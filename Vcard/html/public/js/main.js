$(document).ready(function () {
  $("#menu-btn").click(function () {
    $(".menu").addClass("right-0");
  });
  $("#menu-btn").on("click", function () {
    var iconMenu = $("#menu-btn").children("img");
    if ($(this).attr("data-click-state") == 1) {
      $(this).attr("data-click-state", 0);
      $(iconMenu).attr("src", "images/svg/cancel.svg");
      $("body").addClass("h-full-hidden");
      $(".menu").addClass("right-0");
      $(".menu").removeClass("-right-full");
      //console.log("0");
    } else {
      $(this).attr("data-click-state", 1);
      $(iconMenu).attr("src", "images/svg/menu.svg");
      $("body").removeClass("h-full-hidden");
      $(".menu").removeClass("right-0");
      $(".menu").addClass("-right-full");
      //console.log("1");
    }
  });

  //menu
  var headerMenu = $("#menu-header strong");
  $(".menu-inner li a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("data-related");
    var thisClick = $(this);
    $(".menu .menu-inner").each(function () {
      if ($(this).attr("id") == id) {
        $(thisClick).parent().parent(".menu-inner").addClass("-left-full");
        $(this).addClass("-left-2/4	");
        $("#menu-header > img").show();
        $(headerMenu).text("BACK");
      }
    });
  });
  $("#menu-header").on("click", function (e) {
    e.preventDefault();
    $(".menu-inner").removeClass("-left-full");
    $(".menu-inner").removeClass("-left-2/4	");
    $(headerMenu).text("MENU");
    $("#menu-header > img").hide();
  });
});
