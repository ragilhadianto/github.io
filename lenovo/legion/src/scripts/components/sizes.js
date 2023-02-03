/* ------------------------------------------------------------------------------
@name: Sizes
@description: Sizes
--------------------------------------------------------------------------------- */

const Sizes = (() => {
  // init controller
  const controllerSizes = new ScrollMagic.Controller();

  // - handleScrollAnimate
  const handleScrollAnimate = () => {
    // ttl
    const ttl = new ScrollMagic.Scene({
      triggerElement: ".sizes__ttl",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".sizes__ttl", "fade-in")
      .addTo(controllerSizes);

    // desc
    const desc = new ScrollMagic.Scene({
      triggerElement: ".sizes__desc",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".sizes__desc", "fade-in")
      .addTo(controllerSizes);
  };

  // - handleImgSequenceSizes
  const handleImgSequenceSizes = () => {
    const _images = [];
    const _frameCount = 142;
    const currentFrame = (index) =>
      `https://bdd.capital-six.com/wp-content/uploads/2022/12/two-sizes${index
        .toString()
        .padStart(4, "0")}.png`;
    for (let i = 31; i <= _frameCount; i++) {
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
        $(".js-sizes-sequences .sizes__img__el").attr(
          "src",
          _images[obj.curImg]
        ); // set the image source
      },
    });

    if ($(window).width() >= 992) {
      // img
      const scene = new ScrollMagic.Scene({
        triggerElement: ".sizes",
        duration: 1000,
        triggerHook: 0,
      })
        .setTween(tween)
        .addTo(controllerSizes);
    } else {
      // img
      const scene = new ScrollMagic.Scene({
        triggerElement: ".introduction-desc",
        duration: 1000,
        triggerHook: 0,
      })
        .setTween(tween)
        .addTo(controllerSizes);
    }
  };

  // - init
  const init = () => {
    if ($(".sizes").length) {
      handleScrollAnimate();
      handleImgSequenceSizes();
    }
  };

  return {
    init,
  };
})();

export default Sizes;
