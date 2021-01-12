$(document).ready(function () {
  $("#menu-btn").click(function () {
    $(".menu").addClass("right-0");
  });
  $("#menu-btn").on("click", function () {
    var iconMenu = $("#menu-btn").children("img");
    if ($(this).attr("data-click-state") == 1) {
      $(this).attr("data-click-state", 0);
      $(iconMenu).attr("src", "images/svg/cancel.svg");
      $(".menu").addClass("right-0");
      $(".menu").removeClass("-right-full");
      //console.log("0");
    } else {
      $(this).attr("data-click-state", 1);
      $(iconMenu).attr("src", "images/svg/menu.svg");
      $(".menu").removeClass("right-0");
      $(".menu").addClass("-right-full");
      //console.log("1");
    }
  });
});
