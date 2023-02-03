/* ------------------------------------------------------------------------------
@name: BeyondPerformance
@description: BeyondPerformance
--------------------------------------------------------------------------------- */

const BeyondPerformance = (() => {
  // init controller
  const controllerBeyondPerformance = new ScrollMagic.Controller();

  // - handleScrollAnimate
  const handleScrollAnimate = () => {
    // ttl
    const ttl = new ScrollMagic.Scene({
      triggerElement: ".beyond-performance__ttl",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".beyond-performance__ttl", "fade-in")
      .addTo(controllerBeyondPerformance);

    // desc
    const desc = new ScrollMagic.Scene({
      triggerElement: ".beyond-performance__desc",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".beyond-performance__desc", "fade-in")
      .addTo(controllerBeyondPerformance);

    // list
    const list = new ScrollMagic.Scene({
      triggerElement: ".beyond-performance-v__list",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".beyond-performance-v__list", "fade-in")
      .addTo(controllerBeyondPerformance);
  };

  // - handleImgSequences
  const handleImgSequences = () => {
    const _images = [];
    const _frameCount = 192;
    const currentFrame = (index) =>
      `https://bdd.capital-six.com/wp-content/uploads/2023/01/bf-${index
        .toString()
        .padStart(5, "0")}.jpg`;
    for (let i = 0; i <= _frameCount; i++) {
      _images.push(currentFrame(i));
    }

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    const obj = { curImg: 0 };

    // create tween
    const tween = TweenMax.to(obj, 0.5, {
      curImg: _images.length - 1, // animate propery curImg to number of images
      roundProps: "curImg", // only integers so it can be used as an array index
      repeat: 10, // repeat 3 times
      immediateRender: true, // load first image automatically
      ease: Linear.easeNone, // show every image the same ammount of time
      onUpdate: function () {
        $(
          ".js-beyond-performance-v-sequences .beyond-performance-v__img__el"
        ).attr("src", _images[obj.curImg]); // set the image source
      },
    });

    // scene
    const scene = new ScrollMagic.Scene({
      triggerElement: ".beyond-performance__desc",
      duration: 2500,
      triggerHook: 0,
    })
      // .setTween(tween)
      .addTo(controllerBeyondPerformance);

    // pin scene
    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".beyond-performance-v",
      duration: 500,
      triggerHook: 0,
      reverse: true,
    })
      .setPin(".beyond-performance-v")
      .addTo(controllerBeyondPerformance);
  };

  // - handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $(".js-beyond-performance-v-list");
    const _itemLength = $(
      ".js-beyond-performance-v-list .beyond-performance-v__item"
    ).length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass("owl-carousel")) {
      _selector.owlCarousel("destroy").removeClass("owl-carousel");
    }

    // check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // init carousel
      _selector.addClass("owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoWidth: false,
        touchDrag: false,
        mouseDrag: false,
        animateOut: "fadeOut",
        dots: false,
        nav: false,
        loop: false,
        rewind: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
      });
    } else {
      if (_selector.hasClass("owl-carousel")) {
        _selector.removeClass("owl-carousel");
      }
      _selector.addClass("beyond-performance-v__list--single");
    }
  };

  // - init
  const init = () => {
    if ($(".beyond-performance").length) {
      handleScrollAnimate();
      handleImgSequences();
      handleRunCarousel();
    }
  };

  return {
    init,
  };
})();

export default BeyondPerformance;
