/* ------------------------------------------------------------------------------
@name: BeyondFast
@description: BeyondFast
--------------------------------------------------------------------------------- */

const BeyondFast = (() => {
  // - handleScrollAnimate
  const handleScrollAnimate = () => {
    // init controller
    const controllerBeyondFast = new ScrollMagic.Controller();

    // ttl
    const ttl = new ScrollMagic.Scene({
      triggerElement: ".beyond-fast__ttl",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".beyond-fast__ttl", "fade-in")
      .addTo(controllerBeyondFast);

    // desc
    const desc = new ScrollMagic.Scene({
      triggerElement: ".beyond-fast__desc",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".beyond-fast__desc", "fade-in")
      .addTo(controllerBeyondFast);

    // img
    const img = new ScrollMagic.Scene({
      triggerElement: ".beyond-fast__sequences",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".beyond-fast__sequences", "fade-in")
      .addTo(controllerBeyondFast);
  };

  // - handleImgSequencesBeyondFast
  const handleImgSequencesBeyondFast = () => {
    const _images = [];
    const _frameCount = 35;
    const currentFrame = (index) =>
      `https://bdd.capital-six.com/wp-content/uploads/2023/01/0-Legion-X80-Tower-5i-Graded-RGB-Interior_${index
        .toString()
        .padStart(5, "0")}.png`;
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
        $(".beyond-fast__img__el").attr("src", _images[obj.curImg]); // set the image source
      },
    });

    const tween2 = TweenMax.to(".beyond-fast", 1, {
      scale: 0.6,
      transformOrigin: "top center",
    });

    // init controller
    const controller = new ScrollMagic.Controller();

    // build scene
    const scene = new ScrollMagic.Scene({
      triggerElement: ".beyond-fast",
      duration: 1000,
      triggerHook: 0,
    })
      .setTween(tween)
      .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".beyond-fast",
      duration: 1000,
      triggerHook: 0,
    })
      .setTween(tween2)
      .addTo(controller);

    const scene3 = new ScrollMagic.Scene({
      triggerElement: ".beyond-fast",
      duration: 1100,
      triggerHook: 0,
    })
      .setPin(".beyond-fast")
      .addTo(controller);
  };

  // - init
  const init = () => {
    if ($(".beyond-fast").length) {
      handleScrollAnimate();
      handleImgSequencesBeyondFast();
    }
  };

  return {
    init,
  };
})();

export default BeyondFast;
