$(window).load(function() {
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  if (isIE) {
    //console.log("IE");
    $(".droppage__back").remove();
  }
  else
  {
    //open
    var bgbanner__img = $(".bgbanner").attr( "src" );
    $( "body > div" ).wrapAll("<div class='wrap__container'></div>" );
    $( "body" ).addClass("bodydroppage");
    $( "body" ).css('background-image', 'url(' + bgbanner__img + ')');

    $(".bgbanner").load(function() {


      $(".wrap__container").addClass("droppage");
      $(".droppage__back, .droppage__banner").addClass("on");
      $(".droppage__banner").addClass("droppage__back--show");

      //autoclose
      setTimeout(function() {
        $(".wrap__container").removeClass("droppage");
        $(".droppage__back, .droppage__banner").removeClass("on");
        setTimeout(function() {
        $(".droppage__back").hide();
          $(".wrap__container").addClass('wrap__container__off');
          $( "body" ).removeClass("bodydroppage");
          $( "body" ).css('background-image', 'none');
        },500);
      },10000);

    }).attr('src', bgbanner__img);

    //clickclose
  	$(".droppage__back--close").click(function () {
      $(".wrap__container").removeClass("droppage");
      $(".droppage__back, .droppage__banner").removeClass("on");
      setTimeout(function() {
        $(".droppage__back").hide();
        $(".wrap__container").addClass('wrap__container__off');
        $( "body" ).removeClass("bodydroppage");
        $( "body" ).css('background-image', 'none');
      },500);
    });

    //trigger
  	$(".droppage_horizontal_ad").click(function () {
      $(".wrap__container").addClass("droppage")
      $(".droppage__back, .droppage__banner").addClass("on");

      $( "body" ).addClass("bodydroppage");
      $( "body" ).css('background-image', 'url(' + bgbanner__img + ')');
      $(".droppage__back").show();
      $(".wrap__container").removeClass('wrap__container__off');
      ;

    });
  }
});
