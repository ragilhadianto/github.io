/* ------------------------------------------------------------------------------
@name: Introduction
@description: Introduction
--------------------------------------------------------------------------------- */

// Done

const Introduction = (() => {
  // - handleFirstLoad
  const handleFirstLoad = () => {
    setTimeout(() => {
      $(".introduction__headline").addClass("show-first");
    }, 5000);
    // console.log("test");
    // var video = document.getElementById("vid");
    // video.addEventListener("progress", function () {
    //   var range = 0;
    //   var bf = this.buffered;
    //   var time = this.currentTime;

    //   while (!(bf.start(range) <= time && time <= bf.end(range))) {
    //     range += 1;
    //   }
    //   var loadStartPercentage = bf.start(range) / this.duration;
    //   var loadEndPercentage = bf.end(range) / this.duration;
    //   var loadPercentage = loadEndPercentage - loadStartPercentage;
    //   console.log(loadPercentage);
    //   console.log(loadEndPercentage);
    //   if (loadPercentage === loadEndPercentage) {
    //     setTimeout(() => {
    //       $(".introduction__headline").addClass("show-first");
    //     }, 4500);
    //   }
    // });
  };

  // - handleScrollAnimate
  const handleScrollAnimate = () => {
    const controllerIntroduction = new ScrollMagic.Controller();

    if ($(window).width() >= 992) {
      // pin introduction body
      const introductionBody = new ScrollMagic.Scene({
        triggerElement: "#introduction",
        duration: 750,
        triggerHook: 0,
        reverse: true,
      })
        .setPin(".introduction__body")
        .addTo(controllerIntroduction);

      // control text
      $(".js-introduction-list .introduction__item").each((i, v) => {
        const ourScene = new ScrollMagic.Scene({
          triggerElement: v,
          triggerHook: 0.2,
          duration: "10%",
          reverse: true,
        })
          .setClassToggle(v, "fade-in")
          // .addIndicators()
          .on("enter", (event) => {
            // new design
            if (i === 0) {
              $(".js-introduction-headline").trigger("to.owl.carousel", 0);
            }
            // superb performance
            if (i === 1) {
              $(".js-introduction-headline").trigger("to.owl.carousel", 1);
            }
          })
          .addTo(controllerIntroduction);
      });
    } else {
      // control text
      $(".js-introduction-list .introduction__item").each((i, v) => {
        const ourScene = new ScrollMagic.Scene({
          triggerElement: v,
          triggerHook: 0.5,
          duration: "10%",
          reverse: true,
        })
          .setClassToggle(v, "fade-in")
          .on("enter", (event) => {
            // new design
            if (i === 0) {
              $(".js-introduction-headline").trigger("to.owl.carousel", 0);
            }
            // superb performance
            if (i === 1) {
              $(".js-introduction-headline").trigger("to.owl.carousel", 1);
            }
          })
          .addTo(controllerIntroduction);
      });
    }
  };

  // - handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $(".js-introduction-headline");
    const _itemLength = $(
      ".js-introduction-headline .introduction__inner"
    ).length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass("owl-carousel")) {
      _selector.owlCarousel("destroy").removeClass("owl-carousel");
    }

    // check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // init carousel
      _selector.addClass("owl-carousel").owlCarousel({
        items: 1,
        autoplay: false,
        autoWidth: false,
        touchDrag: false,
        mouseDrag: false,
        animateOut: "fadeOut",
        dots: false,
        nav: false,
        loop: false,
        rewind: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
      });
    } else {
      if (_selector.hasClass("owl-carousel")) {
        _selector.removeClass("owl-carousel");
      }
    }
  };

  // - init
  const init = () => {
    handleFirstLoad();
    handleScrollAnimate();
    handleRunCarousel();
  };

  return {
    init,
  };
})();

export default Introduction;
