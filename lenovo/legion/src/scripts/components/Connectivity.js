/* ------------------------------------------------------------------------------
@name: Connectivity
@description: Connectivity
--------------------------------------------------------------------------------- */

const Connectivity = (() => {
  const _powerBtn = $(
    ".connectivity__svg .connectivity__svg__power-btn svg"
  ).drawsvg({
    stagger: 700,
  });

  const _audioJack1 = $(
    ".connectivity__svg .connectivity__svg__audio-jack-1 svg"
  ).drawsvg({
    stagger: 700,
  });

  const _audioJack2 = $(
    ".connectivity__svg .connectivity__svg__audio-jack-2 svg"
  ).drawsvg({
    stagger: 700,
  });

  const _usbLeft = $(
    ".connectivity__svg .connectivity__svg__usb-left svg"
  ).drawsvg({
    stagger: 700,
  });

  const _usbRight = $(
    ".connectivity__svg .connectivity__svg__usb-right svg"
  ).drawsvg({
    stagger: 700,
  });

  // - handleScrollAnimate
  const handleScrollAnimate = () => {};

  // - handleDrawSVG
  const handleDrawSVG = (_svg) => {
    _svg.drawsvg("animate");
  };

  // - handleImgSequencesConnectivity
  const handleImgSequencesConnectivity = () => {
    const _images = [];
    const _frameCount = 35;
    const currentFrame = (index) =>
      `https://bdd.capital-six.com/wp-content/uploads/2023/01/Legion-X80-Tower-5i-Graded-Power-On_${index
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
        $(".connectivity__img__el").attr("src", _images[obj.curImg]); // set the image source
      },
    });

    // init controller
    const controllerConnectivity = new ScrollMagic.Controller();

    // ttl
    const ttl = new ScrollMagic.Scene({
      triggerElement: ".connectivity__ttl",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".connectivity__ttl", "fade-in")
      .addTo(controllerConnectivity);

    // build scene
    const scene = new ScrollMagic.Scene({
      triggerElement: ".connectivity",
      duration: 1000,
      triggerHook: 1,
    })
      .setTween(tween)
      .addTo(controllerConnectivity);

    // pin scene
    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".connectivity__pin",
      duration: 1000,
      triggerHook: 0.2,
      reverse: false,
    })
      .on("enter", (event) => {
        if (
          event.type === "enter" &&
          !$(".connectivity__svg__power-btn").hasClass("show")
        ) {
          $(".connectivity__svg__power-btn").addClass("show");
          handleDrawSVG(_powerBtn);
          $(".connectivity__svg__audio-jack-1").addClass("show");
          handleDrawSVG(_audioJack1);
          $(".connectivity__svg__audio-jack-2").addClass("show");
          handleDrawSVG(_audioJack2);
          $(".connectivity__svg__usb-left").addClass("show");
          handleDrawSVG(_usbLeft);
          $(".connectivity__svg__usb-right").addClass("show");
          handleDrawSVG(_usbRight);
        }
      })
      .addTo(controllerConnectivity);
  };

  // - init
  const init = () => {
    if ($(".connectivity").length) {
      handleScrollAnimate();
      handleImgSequencesConnectivity();
    }
  };

  return {
    init,
  };
})();

export default Connectivity;
