/* ------------------------------------------------------------------------------
@name: PerformanceSummary
@description: PerformanceSummary
--------------------------------------------------------------------------------- */

const PerformanceSummary = (() => {
  // - handleScrollAnimate
  const handleScrollAnimate = () => {
    // init controller
    const controllerPerformanceSummary = new ScrollMagic.Controller();

    // ttl
    var ttl = new ScrollMagic.Scene({
      triggerElement: ".performance-summary__ttl",
      triggerHook: 0.9,
      reverse: true,
    })
      .setClassToggle(".performance-summary__ttl", "fade-in")
      .addTo(controllerPerformanceSummary);

    // item
    $(".performance-summary__item").each(function () {
      // build a scene
      const item = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.9,
        reverse: false,
      })
        .setClassToggle(this, "fade-in")
        .addTo(controllerPerformanceSummary);
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

export default PerformanceSummary;
