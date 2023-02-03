/* ------------------------------------------------------------------------------
@name: LegionVideos
@description: LegionVideos
--------------------------------------------------------------------------------- */

const LegionVideos = (() => {
  // - handleTestApple
  const handleTestApple = () => {
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    canvas.width = 1158;
    canvas.height = 770;

    const frameCount = 147;
    const currentFrame = (index) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
        index + 1
      )
        .toString()
        .padStart(4, "0")}.jpg`;

    const images = [];
    const airpods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
    // init controller
    const controller = new ScrollMagic.Controller();

    // build scene
    const scene = new ScrollMagic.Scene({
      triggerElement: ".headline",
      duration: 7000,
      triggerHook: 0,
      reverse: true,
    })
      // .setTween(tween)
      .setPin(".headline")
      .addTo(controller);

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }
  };

  // - handleScrollAnimate
  const handleScrollAnimate = () => {};

  // - handleSquenceLegionVideos
  const handleSquenceLegionVideos = () => {
    const _images = [];
    const _frameCount = 74;
    const currentFrame = (index) =>
      `https://bdd.capital-six.com/wp-content/uploads/2023/01/180-${index
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
        $(".legion-videos__el").attr("src", _images[obj.curImg]); // set the image source
      },
    });
    const tween2 = TweenMax.to(".legion-videos__el", 1, {
      scale: 1,
    });

    // init controller
    const controllerLegionVideos = new ScrollMagic.Controller();

    // build scene
    const scene = new ScrollMagic.Scene({
      triggerElement: ".performance-summary__item:nth-child(2)",
      duration: 5000,
      triggerHook: 0,
    })
      .setTween(tween)
      .addTo(controllerLegionVideos);

    // pin scene
    const scene2 = new ScrollMagic.Scene({
      triggerElement: "#legion-videos",
      duration: 4000,
      triggerHook: 0,
      reverse: true,
    })
      .setTween(tween2)
      .setPin("#legion-videos")
      .addTo(controllerLegionVideos);
  };

  // - init
  const init = () => {
    if ($(".legion-videos").length) {
      handleScrollAnimate();
      handleSquenceLegionVideos();
    }
  };

  return {
    init,
  };
})();

export default LegionVideos;
