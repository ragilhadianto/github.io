// init controller
var controller_global = new ScrollMagic.Controller();

//custom
// cover
$(".section__cover").each(function () {
  const ttl = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: 0,
    triggerHook: 0,
    reverse: false,
  })
    .setClassToggle(this, "active")
    // .addIndicators()
    .addTo(controller_global);
});

$(
  ".section__scale, .section__fade, .section__83, .section__akreditas__item, .section__prioritas, .section__8__bird"
).each(function () {
  const ttl = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.9,
    reverse: false,
  })
    .setClassToggle(this, "active")
    // .addIndicators()
    .addTo(controller_global);
});

$(".section__scale__abang2").each(function () {
  const ttl = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
    reverse: false,
  })
    .setClassToggle(this, "active")
    //.addIndicators()
    .addTo(controller_global);
});

// count count70
new ScrollMagic.Scene({
  triggerElement: ".count70",
  reverse: false,
  triggerHook: 1,
  duration: 0,
})
  // .addIndicators()
  .on("enter leave", function (e) {
    $(".count70")
      .prop("Counter", 0)
      .animate(
        {
          Counter: "70",
        },
        {
          duration: 1500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          complete: function () {
            setTimeout(() => {
              $(this).append(".6");
            }, 250);
          },
        }
      );
  })

  .addTo(controller_global);

// count count83
new ScrollMagic.Scene({
  triggerElement: ".count83",
  reverse: false,
  triggerHook: 1,
  duration: 0,
})
  // .addIndicators()
  .on("enter leave", function (e) {
    $(".count83")
      .prop("Counter", 0)
      .animate(
        {
          Counter: "83",
        },
        {
          duration: 1500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          complete: function () {
            setTimeout(() => {
              $(this).append(".3");
              $(".count83__text").addClass("active");
            }, 500);
          },
        }
      );
  })
  .addTo(controller_global);

// count count59
new ScrollMagic.Scene({
  triggerElement: ".count59",
  reverse: false,
  triggerHook: 1,
  duration: 0,
})
  // .addIndicators()
  .on("enter leave", function (e) {
    $(".count59")
      .prop("Counter", 0)
      .animate(
        {
          Counter: "59",
        },
        {
          duration: 1500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          complete: function () {
            $(this).append(".2");
            // setTimeout(() => {
            //   $(".section__11 .bg-dashed").removeClass("animation");
            // }, 2000);
          },
        }
      );
  })
  .addTo(controller_global);

// count count81
new ScrollMagic.Scene({
  triggerElement: ".count81",
  reverse: false,
  triggerHook: 1,
  duration: 0,
})
  // .addIndicators()
  .on("enter leave", function (e) {
    $(".count81")
      .prop("Counter", 0)
      .animate(
        {
          Counter: "81",
        },
        {
          duration: 1500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          complete: function () {
            $(this).append(".9");
            // setTimeout(() => {
            //   $(".section__11 .bg-dashed").removeClass("animation");
            // }, 2000);
          },
        }
      );
  })
  .addTo(controller_global);

// count count81
new ScrollMagic.Scene({
  triggerElement: ".count18",
  reverse: false,
  triggerHook: 1,
  duration: 0,
})
  // .addIndicators()
  .on("enter leave", function (e) {
    $(".count18")
      .prop("Counter", 0)
      .animate(
        {
          Counter: "18",
        },
        {
          duration: 1500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          complete: function () {
            $(this).append(".1");
            // setTimeout(() => {
            //   $(".section__11 .bg-dashed").removeClass("animation");
            // }, 2000);
          },
        }
      );
  })
  .addTo(controller_global);

// count count81
new ScrollMagic.Scene({
  triggerElement: ".count18b",
  reverse: false,
  triggerHook: 1,
  duration: 0,
})
  // .addIndicators()
  .on("enter leave", function (e) {
    $(".count18b")
      .prop("Counter", 0)
      .animate(
        {
          Counter: "18",
        },
        {
          duration: 1500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
          complete: function () {
            $(this).append(".1");
            // setTimeout(() => {
            //   $(".section__11 .bg-dashed").removeClass("animation");
            // }, 2000);
          },
        }
      );
  })
  .addTo(controller_global);

// paralaxcover
var paralaxhero = new TimelineMax().add([
  TweenMax.fromTo(
    ".paralax__cover1",
    3,
    { top: 100 },
    { top: 0, ease: Linear.easeNone }
  ),
  TweenMax.fromTo(
    ".paralax__cover2",
    3,
    { top: 0 },
    { top: 150, ease: Linear.easeNone }
  ),
]);

var scene = new ScrollMagic.Scene({
  triggerElement: ".paralax__hero",
  duration: 500,
  triggerHook: 1,
})
  .setTween(paralaxhero)
  //.addIndicators() // add indicators (requires plugin)
  .addTo(controller_global);

// paralax1
var tween = new TimelineMax().add([
  TweenMax.fromTo(
    ".paralax__awarding1",
    3,
    { top: -50 },
    { top: 100, ease: Linear.easeNone }
  ),
  TweenMax.fromTo(
    ".paralax__awarding2",
    3,
    { top: 200 },
    { top: 0, ease: Linear.easeNone }
  ),
]);

var scene = new ScrollMagic.Scene({
  triggerElement: ".paralax",
  duration: 1500,
  triggerHook: 1,
})
  .setTween(tween)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller_global);

//paralax2
var paralax2 = new TimelineMax().add([
  TweenMax.fromTo(
    ".paralax__sulur1",
    3,
    { top: -75 },
    { top: 0, ease: Linear.easeNone }
  ),
  TweenMax.fromTo(
    ".paralax__sulur2",
    5,
    { top: 75 },
    { top: 0, ease: Linear.easeNone }
  ),
]);
var scene = new ScrollMagic.Scene({
  triggerElement: ".paralax2",
  duration: 200,
  triggerHook: 0.9,
})
  .setTween(paralax2)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller_global);

//paralax3
var paralax3 = new TimelineMax().add([
  TweenMax.fromTo(
    ".paralax__sulur3",
    3,
    { top: 100 },
    { top: -70, ease: Linear.easeNone }
  ),
  TweenMax.fromTo(
    ".paralax__sulur4",
    5,
    { top: 0 },
    { top: -70, ease: Linear.easeNone }
  ),
]);
var scene = new ScrollMagic.Scene({
  triggerElement: ".paralax3",
  duration: 700,
  triggerHook: 0.9,
})
  .setTween(paralax3)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller_global);

//paralax section 2 matahari
var paralax__section2 = new TimelineMax().add([
  TweenMax.fromTo(
    ".paralax__section2__matahari",
    3,
    { top: -200 },
    { top: -100, ease: Linear.easeNone }
  ),
  TweenMax.fromTo(
    ".paralax__section2__star",
    5,
    { top: 300 },
    { top: 50, ease: Linear.easeNone }
  ),
  TweenMax.fromTo(
    ".paralax__section2__starbig",
    5,
    { bottom: 200 },
    { bottom: -100, ease: Linear.easeNone }
  ),
]);
var scene = new ScrollMagic.Scene({
  triggerElement: ".paralax__section2",
  duration: 1300,
  triggerHook: 0.8,
})
  .setTween(paralax__section2)
  // .addIndicators() // add indicators (requires plugin)
  .addTo(controller_global);

//paralax__abang2
var paralax__abang2 = new TimelineMax().add([
  TweenMax.fromTo(
    ".paralax__abang2__img",
    3,
    { top: -150 },
    { top: 0, ease: Linear.easeNone }
  ),
  TweenMax.fromTo(
    ".paralax__abang2__bubble",
    3,
    { top: 200 },
    { top: 100, ease: Linear.easeNone }
  ),
]);
var scene = new ScrollMagic.Scene({
  triggerElement: ".paralax__abang2",
  duration: 500,
  triggerHook: 1,
})
  .setTween(paralax__abang2)
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller_global);

// squence
var BASE_URL = "http://localhost/wbj/wp-content/themes/wbj/";

// - handleSquenceAlasanUtama1
const handleSquenceAlasanUtama1 = () => {
  const _images = [];
  const _frameCount = 90;
  let _dataImg = "";
  /* local -------------------------------------------------------------------- */
  const currentFrame = (index) =>
    BASE_URL +
    `images/alasan-utama/Chart1-AlasanUtamaPNG-img${index
      .toString()
      .padStart(5, "0")}.png`;

  for (let i = 0; i <= _frameCount; i++) {
    _images.push(currentFrame(i));
    _dataImg += "<img src='" + _images[i] + "' alt=''>";
  }
  $(".data-img-sequences").append(_dataImg);

  // TweenMax can tween any property of any object. We use this object to cycle through the array
  const obj = { curImg: 0 };

  // create tween
  const tween1 = TweenMax.to(obj, 10, {
    curImg: _images.length - 1, // animate propery curImg to number of images
    roundProps: "curImg", // only integers so it can be used as an array index
    repeat: 0, // repeat 3 times
    immediateRender: true, // load first image automatically
    ease: Linear.easeNone, // show every image the same ammount of time

    onUpdate: function () {
      $(".section__alasan__utama__chart").attr("src", _images[obj.curImg]); // set the image source
    },
  });

  // init controller
  const controller_global = new ScrollMagic.Controller();

  // build scene
  const scene1 = new ScrollMagic.Scene({
    triggerElement: ".section__alasan__utama__chart",
    duration: 0,
    triggerHook: 1,
    reverse: false,
  })
    .setTween(tween1)
    .addTo(controller_global);

  // dom
  const sceneDOM = new ScrollMagic.Scene({
    triggerElement: "body",
    duration: 0,
    triggerHook: 1,
    reverse: false,
  })
    .on("enter", (event) => {
      $("data-img-sequences").append(_dataImg);
      $("#data-img-sequences").imagesLoaded();
    })
    .addTo(controller_global);
};

// - init
handleSquenceAlasanUtama1();

// - handleSquenceAlasanUtama1
const handleSquenceIntegritas = () => {
  const _images = [];
  const _frameCount = 90;
  let _dataImg = "";
  /* local -------------------------------------------------------------------- */
  const currentFrame = (index) =>
    BASE_URL +
    `images/alasan-utama/Chart1-AlasanUtamaPNG-img${index
      .toString()
      .padStart(5, "0")}.png`;

  for (let i = 0; i <= _frameCount; i++) {
    _images.push(currentFrame(i));
    _dataImg += "<img src='" + _images[i] + "' alt=''>";
  }
  $(".data-img-sequences").append(_dataImg);

  // TweenMax can tween any property of any object. We use this object to cycle through the array
  const obj = { curImg: 0 };

  // create tween
  const tween1 = TweenMax.to(obj, 10, {
    curImg: _images.length - 1, // animate propery curImg to number of images
    roundProps: "curImg", // only integers so it can be used as an array index
    repeat: 0, // repeat 3 times
    immediateRender: true, // load first image automatically
    ease: Linear.easeNone, // show every image the same ammount of time

    onUpdate: function () {
      $(".section__integritas__chart_m").attr("src", _images[obj.curImg]); // set the image source
    },
  });

  // init controller
  const controller_global = new ScrollMagic.Controller();

  // build scene
  const scene1 = new ScrollMagic.Scene({
    triggerElement: ".section__integritas__chart_m",
    duration: 0,
    triggerHook: 1,
    reverse: false,
  })
    .setTween(tween1)
    .addTo(controller_global);

  const tween2 = TweenMax.to(obj, 10, {
    curImg: _images.length - 1, // animate propery curImg to number of images
    roundProps: "curImg", // only integers so it can be used as an array index
    repeat: 0, // repeat 3 times
    immediateRender: true, // load first image automatically
    ease: Linear.easeNone, // show every image the same ammount of time

    onUpdate: function () {
      $(".section__integritas__chart").attr("src", _images[obj.curImg]); // set the image source
    },
  });

  // build scene
  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".section__integritas__chart",
    duration: 0,
    triggerHook: 1,
    reverse: false,
  })
    .setTween(tween2)
    .addTo(controller_global);
};

// - init
handleSquenceIntegritas();
