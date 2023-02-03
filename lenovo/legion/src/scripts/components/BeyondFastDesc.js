/* ------------------------------------------------------------------------------
@name: BeyondFastDesc
@description: BeyondFastDesc
--------------------------------------------------------------------------------- */

const BeyondFastDesc = (() => {
  // - handleScrollAnimate
  const handleScrollAnimate = () => {
    // init controller
    const controllerBeyondFastDesc = new ScrollMagic.Controller();

    const gradientTop = $(".beyond-fast-desc__gradient-top img");
    const gradientBottom = $(".beyond-fast-desc__gradient-bottom img");

    const tw1 = new TweenMax.to(gradientTop, 1, {
      y: "-100%",
      stagger: {
        from: "top",
        amount: 0.1,
      },
    });
    const tw2 = new TweenMax.to(gradientBottom, 1, {
      y: "-50%",
      stagger: {
        from: "bottom",
        amount: 0.1,
      },
    });
    var tlBeyondFast = new TimelineMax().add(tw1).add(tw2);

    // inner
    const inner = new ScrollMagic.Scene({
      triggerElement: ".beyond-fast-desc",
      triggerHook: 0.8,
      reverse: true,
      duration: 1000,
    })
      .setTween(tlBeyondFast)
      .addTo(controllerBeyondFastDesc);
  };

  // - init
  const init = () => {
    if ($(".beyond-fast-desc").length) {
      handleScrollAnimate();
    }
  };

  return {
    init,
  };
})();

export default BeyondFastDesc;
