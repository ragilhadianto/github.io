/* ------------------------------------------------------------------------------
@name: LovelyArchitecture
@description: LovelyArchitecture
--------------------------------------------------------------------------------- */

const LovelyArchitecture = (() => {
  // - handleScrollAnimate
  const handleScrollAnimate = () => {
    // init controller
    const controllerLovelyArchitecture = new ScrollMagic.Controller();

    // banner
    const banner = new ScrollMagic.Scene({
      triggerElement: ".beyond-fast-desc",
      triggerHook: 1,
      reverse: true,
    })
      .setClassToggle(".lovely-architecture-banner", "fade-in")
      .addTo(controllerLovelyArchitecture);

    // ttl
    const ttl = new ScrollMagic.Scene({
      triggerElement: ".lovely-architecture-banner__ttl",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".lovely-architecture-banner__ttl", "fade-in")
      .addTo(controllerLovelyArchitecture);

    // img
    const img = new ScrollMagic.Scene({
      triggerElement: ".lovely-architecture__img",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".lovely-architecture__img", "fade-in")
      .addTo(controllerLovelyArchitecture);

    // item
    $(".lovely-architecture__item").each(function () {
      const item = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 1,
        offset: 0,
        reverse: true,
      })
        .setClassToggle(this, "fade-in")
        .addTo(controllerLovelyArchitecture);
    });
  };

  // - init
  const init = () => {
    handleScrollAnimate();
  };

  return {
    init,
  };
})();

export default LovelyArchitecture;
