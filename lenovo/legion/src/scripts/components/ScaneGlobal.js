/* ------------------------------------------------------------------------------
@name: ScaneGlobal
@description: ScaneGlobal
--------------------------------------------------------------------------------- */

// - ScaneGlobal
const ScaneGlobal = (() => {

  // init controller
  const controllerSizes = new ScrollMagic.Controller();

  //---------------scane 1
  const handleScaneGlobal = () => {

    // laptop img
    var laptop_images = [
      "../assets/images/section1/1.png",
      "../assets/images/section1/2.png",
      "../assets/images/section1/3.png",
      "../assets/images/section1/4.png",
      "../assets/images/section1/5.png",
      "../assets/images/section1/6.png",
      "../assets/images/section1/7.png",
      "../assets/images/section1/8.png",
      "../assets/images/section1/9.png",
      "../assets/images/section1/10.png",
      "../assets/images/section1/11.png",
      "../assets/images/section1/12.png",
      "../assets/images/section1/13.png",
      "../assets/images/section1/14.png",
      "../assets/images/section1/15.png",
      "../assets/images/section1/16.png",
      "../assets/images/section1/17.png",
      "../assets/images/section1/18.png",
      "../assets/images/section1/19.png",
      "../assets/images/section1/20.png",
      "../assets/images/section1/21.png",
      "../assets/images/section1/22.png",
    ];

    // TweenMax can tween any property of any object. We use this object to cycle through the array
    var obj = {curImg: 0};

    // create tween
    var tween = TweenMax.to(obj, 2,
      {
        curImg: laptop_images.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 0,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          $("#section__1__video__img").attr("src", laptop_images[obj.curImg]); // set the image source
        }
      }
    );

    // init controller
	  var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".section__1__video", duration: 0})
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


    // text animation
    TweenLite.fromTo((".section__1__text h3"), { 
        y: 100,
        alpha: 0, 
      },
      {
        y: 0,
        alpha: 1, 
        ease: "power3.out", 
        delay: 1.5 
      });

    TweenLite.fromTo((".section__1__text p"),{
      y: 100,
      alpha: 0, 
      },
      {
        y: 0,
        alpha: 1, 
        ease: "power3.out", 
        delay: 2 
      });

      //---------------scane 2
      const section__2__text = new ScrollMagic.Scene({
        triggerElement: ".section__2__text",
        triggerHook: 0.9,
        reverse: true,
        ease: "power3.out", 
      })
        .setClassToggle(".section__2__text", "fade-in")
        .addTo(controllerSizes);
  };

  // - init
  const init = () => {
    handleScaneGlobal();
  };

  // return
  return {
    init,
  };
})();

export default ScaneGlobal;
