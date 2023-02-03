/* ------------------------------------------------------------------------------
@name: Introduction
@description: Introduction
--------------------------------------------------------------------------------- */

const Introduction = (() => {
  // - handleRunTextTransition
  const handleRunTextTransition = () => {
    const _video = document.getElementById("vid");
    _video.play();
    const _timer = setInterval(() => {
      const _currentTime = Math.round(_video.currentTime);
      if (_currentTime >= 4) {
        /* text inside section */
        const stepsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".introduction .introduction__item",
            start: "top center",
            end: "+=" + pinDistance,
            scrub: true,
            invalidateOnRefresh: true,
            delay: 2,
          },
        });

        const steps = gsap.utils.toArray(".introduction .introduction__item");

        steps.forEach((step, i) => {
          stepsTimeline.add(() => {
            // if scrolling backward, we need to invert which element fades in or out
            const forward = stepsTimeline.scrollTrigger.direction > 0;
            const inEl = forward ? step : steps[i - 1];
            const outEl = forward ? steps[i - 1] : step;
            outEl &&
              gsap.to(".introduction .introduction__item:nth-child(1)", {
                autoAlpha: 0,
                y: 80,
                scale: 0.9,
                duration: 0.5,
                delay: 0.1,
              }) &&
              gsap.to(".introduction .introduction__item:nth-child(2)", {
                autoAlpha: 0,
                y: 80,
                scale: 0.9,
                duration: 0.5,
              });

            inEl &&
              gsap.to(inEl, {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                delay: 0.3,
              });
          }, i || 0.001);
        });

        stepsTimeline.to({}, { duration: 1 });
      }
    }, 1000);
    setTimeout(() => {
      clearInterval(_timer);
    }, 6000);

    const pinDistance = 1000;

    /* section */
    ScrollTrigger.create({
      trigger: ".introduction",
      start: 0,
      end: "+=" + pinDistance,
      pin: ".introduction",
      // markers: true,
      toggleActions: "restart pause reverse pause",
      id: "introduction",
      invalidateOnRefresh: true,
      // onEnter: () => console.log("entering"),
      // onLeave: () => console.log("leaving"),
    });
  };

  // - init
  const init = () => {
    handleRunTextTransition();
  };

  return {
    init,
  };
})();

export default Introduction;
