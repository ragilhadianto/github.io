/* ------------------------------------------------------------------------------
@name: PowerYourPlay
@description: PowerYourPlay
--------------------------------------------------------------------------------- */

const PowerYourPlay = (() => {
  // - handleScrollAnimate
  const handleScrollAnimate = () => {
    // init controller
    const controllerPowerYourPlay = new ScrollMagic.Controller();

    // ttl
    const ttl = new ScrollMagic.Scene({
      triggerElement: ".power-your-play__ttl",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".power-your-play__ttl", "fade-in")
      .addTo(controllerPowerYourPlay);

    // prev
    const prev = new ScrollMagic.Scene({
      triggerElement: ".power-your-play__prev",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".power-your-play__prev", "fade-in")
      .addTo(controllerPowerYourPlay);

    // next
    const next = new ScrollMagic.Scene({
      triggerElement: ".power-your-play__next",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".power-your-play__next", "fade-in")
      .addTo(controllerPowerYourPlay);

    // body
    const body = new ScrollMagic.Scene({
      triggerElement: ".power-your-play__body",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".power-your-play__body", "fade-in")
      .addTo(controllerPowerYourPlay);
  };

  // - handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $(".js-power-your-play");
    const _itemLength = $(".js-power-your-play .power-your-play__item").length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass("owl-carousel")) {
      _selector.owlCarousel("destroy").removeClass("owl-carousel");
    }

    // check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // init carousel
      _selector.addClass("owl-carousel").owlCarousel({
        // items: 3,
        autoplay: false,
        autoWidth: true,
        touchDrag: false,
        mouseDrag: false,
        dots: false,
        nav: true,
        loop: false,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        margin: 48,
        responsive: {
          // breakpoint from 0 up
          0: {
            margin: 24,
          },
          992: {
            margin: 32,
          },
          // breakpoint from 480 up
          1680: {
            margin: 48,
          },
        },
      });
    } else {
      if (_selector.hasClass("owl-carousel")) {
        _selector.removeClass("owl-carousel");
      }
      _selector.addClass("power-your-play__list--single");
    }
  };

  // - handleClickNavCarousel
  const handleClickNavCarousel = () => {
    $(".js-power-your-play-prev").on("click", (e) => {
      const _this = $(e.currentTarget);
      const _selector = $(".js-power-your-play");
      _selector.trigger("prev.owl.carousel");
      $(".js-power-your-play-next").removeClass("disabled");
      if ($(".js-power-your-play .owl-prev").hasClass("disabled")) {
        _this.addClass("disabled");
      }
    });
    $(".js-power-your-play-next").on("click", (e) => {
      const _this = $(e.currentTarget);
      const _selector = $(".js-power-your-play");
      _selector.trigger("next.owl.carousel");
      $(".js-power-your-play-prev").removeClass("disabled");
      if ($(".js-power-your-play .owl-next").hasClass("disabled")) {
        _this.addClass("disabled");
      }
    });
  };

  // - init
  const init = () => {
    // handleScrollAnimate();
    handleRunCarousel();
    handleClickNavCarousel();
  };

  return {
    init,
  };
})();

export default PowerYourPlay;
