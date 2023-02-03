/* ------------------------------------------------------------------------------
@name: IntroductionDesc
@description: IntroductionDesc
--------------------------------------------------------------------------------- */

const IntroductionDesc = (() => {
  // - handleScrollAnimate
  const handleScrollAnimate = () => {
    // init controller
    const controllerIntroductionDesc = new ScrollMagic.Controller();
    const gradientTop = $(".introduction-desc__gradient-top img");
    const gradientBottom = $(".introduction-desc__gradient-bottom img");

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
    var tl = new TimelineMax().add(tw1).add(tw2);

    // pin introduction body
    const introductionBody = new ScrollMagic.Scene({
      triggerElement: "#introduction-desc",
      duration: 1250,
      triggerHook: 0.7,
      reverse: true,
    })
      .setTween(tl)
      .addTo(controllerIntroductionDesc);
  };

  // - init
  const init = () => {
    handleScrollAnimate();
  };

  return {
    init,
  };
})();

export default IntroductionDesc;
