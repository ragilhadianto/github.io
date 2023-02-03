/* ------------------------------------------------------------------------------
@name: LegionVideos
@description: LegionVideos
--------------------------------------------------------------------------------- */

const LegionVideos = (() => {
  // - handleControlVideo
  const handleControlVideo = () => {
    const _legion = document.querySelector(".legion-videos");
    const _video = _legion.querySelector("video");
    const controller = new ScrollMagic.Controller();
    const _scene = new ScrollMagic.Scene({
      duration: 3000,
      triggerElement: _legion,
      triggerHook: 0,
    })
      .addIndicators()
      .setPin(_legion)
      .addTo(controller);

    // Video Animation
    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");
    const frameCount = 51;
    const currentFrame = (index) =>
      `https://bdd.capital-six.com/wp-content/uploads/2022/12/ezgif-frame-${index
        .toString()
        .padStart(3, "0")}-scaled.jpg`;
    // let accelamount = 0.1;
    // let scrollpos = 0;
    // let delay = 0;

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    _scene.on("update", (e) => {
      console.log(e);
      const scrollTop = e.scrollPos;
      const maxScrollTop = e.endPos;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });
    preloadImages();

    // setInterval(() => {
    //   delay += (scrollpos - delay) * accelamount;
    //   _video.currentTime = delay;
    //   console.log(scrollpos, delay);
    // }, 33.3);
  };

  const handleTestAirpod = () => {
    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const context = canvas.getContext("2d");

    const frameCount = 51;
    // const frameCount = 148;
    const currentFrame = (index) =>
      `https://bdd.capital-six.com/wp-content/uploads/2022/12/ezgif-frame-${index
        .toString()
        .padStart(3, "0")}-scaled.jpg`;
    console.log(currentFrame);
    // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    preloadImages();
  };

  // - init
  const init = () => {
    if ($(".legion-videos").length) {
    }
    handleControlVideo();
    // handleTestAirpod();
  };

  return {
    init,
  };
})();

export default LegionVideos;
