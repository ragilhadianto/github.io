$(document).ready(function () {
  $("#menu-btn").on("click", function () {
    // var iconMenu = $("#menu-btn").children("img");
    // if ($(this).attr("data-click-state") == 1) {
    //   $(this).attr("data-click-state", 0);
    //   //$(iconMenu).attr("src", "images/svg/cancel.svg");
    //   $("body").addClass("h-full-hidden");
    //   $(".menu").addClass("right-0");
    //   $(".menu").removeClass("-right-full");
    //   //console.log("0");
    // } else {
    //   $(this).attr("data-click-state", 1);
    //   //$(iconMenu).attr("src", "images/svg/menu.svg");
    //   $("body").removeClass("h-full-hidden");
    //   $(".menu").removeClass("right-0");
    //   $(".menu").addClass("-right-full");
    //   //console.log("1");
    $("body").addClass("h-full-hidden");
    $(".menu").addClass("right-0");
    $(".menu").removeClass("-right-full");
  });

  $("#menu-close").on("click", function () {
    $("body").removeClass("h-full-hidden");
    $(".menu").removeClass("right-0");
    $(".menu").addClass("-right-full");
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

  //add form contact
  $("#add-contact").on("change", function () {
    var selectedOption = $("#add-contact option:selected").val();
    var selectedOptionDefault = $("#add-contact");

    if (selectedOption == "Phone") {
      console.log("Phone");
      selectedOptionDefault.val("Contact").trigger("change");
      $("#form-contact").prepend(
        "<div class='relative mb-4 add-field'><input class='border__gray3 border-solid border rounded-full px-3 py-3 pl-10 text-sm w-full bg-no-repeat bg__position1' type='text' name='' id='' placeholder='Phone' style='background-image: url(../public/images/svg/form-phone.svg);'/><span class='remove-field absolute right-5 top-0 my-auto bottom-0 svg cursor-pointer'><img src='images/svg/form-remove.svg' alt='' /></span>"
      );
    } else if (selectedOption == "Email") {
      console.log("Email");
      selectedOptionDefault.val("Contact").trigger("change");
      $("#form-contact").prepend(
        "<div class='relative mb-4 add-field'><input class='border__gray3 border-solid border rounded-full px-3 py-3 pl-10 text-sm w-full bg-no-repeat bg__position2' type='text' name='' id='' placeholder='Email' style='background-image: url(../public/images/svg/message2.svg);'/><span class='remove-field absolute right-5 top-0 my-auto bottom-0 svg cursor-pointer'><img src='images/svg/form-remove.svg' alt='' /></span>"
      );
    } else if (selectedOption == "Web") {
      console.log("Web");
      selectedOptionDefault.val("Contact").trigger("change");
      $("#form-contact").prepend(
        "<div class='relative mb-4 add-field'><input class='border__gray3 border-solid border rounded-full px-3 py-3 pl-10 text-sm w-full bg-no-repeat bg__position1' type='text' name='' id='' placeholder='Web' style='background-image: url(../public/images/svg/form-web.svg);'/><span class='remove-field absolute right-5 top-0 my-auto bottom-0 svg cursor-pointer'><img src='images/svg/form-remove.svg' alt='' /></span>"
      );
    } else if (selectedOption == "Address") {
      console.log("Address");
      selectedOptionDefault.val("Contact").trigger("change");
      $("#form-contact").prepend(
        "<div class='relative mb-4 add-field'><input class='border__gray3 border-solid border rounded-full px-3 py-3 pl-10 text-sm w-full bg-no-repeat bg__position1' type='text' name='' id='' placeholder='Address' style='background-image: url(../public/images/svg/form-address.svg);'/><span class='remove-field absolute right-5 top-0 my-auto bottom-0 svg cursor-pointer'><img src='images/svg/form-remove.svg' alt='' /></span>"
      );
    }
    $(".remove-field").on("click", function (e) {
      e.preventDefault();
      $(this).parent().remove();
    });
  });

  //add form contact
  $("#add-socmed").on("change", function () {
    var selectedOption = $("#add-socmed option:selected").val();
    var selectedOptionDefault = $("#add-socmed");

    if (selectedOption == "Linkedin") {
      console.log("Linkedin");
      selectedOptionDefault.val("Account").trigger("change");
      $("#form-socmed").prepend(
        "<div class='relative mb-4 add-field'><input class='border__gray3 border-solid border rounded-full px-3 py-3 pl-10 text-sm w-full bg-no-repeat bg__position1' type='text' name='' id='' placeholder='Linkedin' style='background-image: url(../public/images/svg/form-linkedin.svg);'/><span class='remove-field absolute right-5 top-0 my-auto bottom-0 svg cursor-pointer'><img src='images/svg/form-remove.svg' alt='' /></span>"
      );
    } else if (selectedOption == "Facebook") {
      console.log("Facebook");
      selectedOptionDefault.val("Account").trigger("change");
      $("#form-socmed").prepend(
        "<div class='relative mb-4 add-field'><input class='border__gray3 border-solid border rounded-full px-3 py-3 pl-10 text-sm w-full bg-no-repeat bg__position2' type='text' name='' id='' placeholder='Facebook' style='background-image: url(../public/images/svg/form-fb.svg);'/><span class='remove-field absolute right-5 top-0 my-auto bottom-0 svg cursor-pointer'><img src='images/svg/form-remove.svg' alt='' /></span>"
      );
    } else if (selectedOption == "Instagram") {
      console.log("Instagram");
      selectedOptionDefault.val("Account").trigger("change");
      $("#form-socmed").prepend(
        "<div class='relative mb-4 add-field'><input class='border__gray3 border-solid border rounded-full px-3 py-3 pl-10 text-sm w-full bg-no-repeat bg__position1' type='text' name='' id='' placeholder='Instagram' style='background-image: url(../public/images/svg/form-ig.svg);'/><span class='remove-field absolute right-5 top-0 my-auto bottom-0 svg cursor-pointer'><img src='images/svg/form-remove.svg' alt='' /></span>"
      );
    } else if (selectedOption == "Twitter") {
      console.log("Twitter");
      selectedOptionDefault.val("Account").trigger("change");
      $("#form-socmed").prepend(
        "<div class='relative mb-4 add-field'><input class='border__gray3 border-solid border rounded-full px-3 py-3 pl-10 text-sm w-full bg-no-repeat bg__position1' type='text' name='' id='' placeholder='Twitter' style='background-image: url(../public/images/svg/form-twitter.svg);'/><span class='remove-field absolute right-5 top-0 my-auto bottom-0 svg cursor-pointer'><img src='images/svg/form-remove.svg' alt='' /></span>"
      );
    }
    $(".remove-field").on("click", function (e) {
      e.preventDefault();
      $(this).parent().remove();
    });
  });

  //modal
  MicroModal.init({
    openTrigger: "data-micromodal-trigger",
    disableScroll: true,
    awaitCloseAnimation: true,
  });

  //upload images
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $("#blah").show();
        $("#blah").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }

  $("#imgInp").change(function () {
    readURL(this);
  });
});
