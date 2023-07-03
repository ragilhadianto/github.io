(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _components = require("./components");
// --- utilities
// import { Scrollable, BrowserCheck } from "utilities";

// --- components

// --- App
var App = function () {
  // // --- run transition
  // const runTransition = () => {
  //   $("body").removeClass("hold-transition");
  // };

  // // --- show site content
  // const showSiteContent = () => {
  //   $(".js-main-site").removeClass("main-site--hide");
  //   // --- disable scroll
  //   Scrollable.enable();
  // };

  // --- ready
  var ready = function ready() {
    (function ($) {
      // // --- disable scroll
      // Scrollable.disable();

      // // --- Global
      // runTransition();
      // showSiteContent();
      // BrowserCheck.init();

      // --- Project
      _components.ScaneGlobal.init();
      _components.ScaneClick.init();
    })(jQuery);
  };

  // --- load
  var load = function load() {
    (function ($) {
      $(window).on("load", function () {});
    })(jQuery);
  };

  // --- init
  var init = function init() {
    load();
    ready();
  };

  // --- return
  return {
    init: init
  };
}();

// ---  run main js
App.init();

},{"./components":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: ScaneClick
@description: ScaneClick
--------------------------------------------------------------------------------- */

// - ScaneClick
var ScaneClick = function () {
  var handleScaneClick = function handleScaneClick() {
    $(document).ready(function () {
      // slick-js
      $('.slick-js').slick({
        slidesToShow: 1,
        dots: false,
        infinite: false
      });

      // magnific
      $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300,
          // don't foget to change the duration also in CSS
          opener: function opener(element) {
            return element.find('img');
          }
        }
      });
      $('.zoom-gallery2').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300,
          // don't foget to change the duration also in CSS
          opener: function opener(element) {
            return element.find('img');
          }
        }
      });
      $('.zoom-gallery3').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
          verticalFit: true
        },
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300,
          // don't foget to change the duration also in CSS
          opener: function opener(element) {
            return element.find('img');
          }
        }
      });

      // fivebold-click
      $(".fivebold-click").click(function (e) {
        var $parent = $(this).parents();
        $(this).parents().children(".fivebol-desc").slideToggle("hidden");
      });
      $(".fivebol-desc img").click(function (e) {
        $(".fivebol-desc").fadeOut();
      });

      // sectionB2b
      var $backB2b = $(".backB2b");
      var $landing = $("#sectionB2b");
      var $sectionUmkm = $("#sectionUmkm");
      var $sectionKorporasi = $("#sectionKorporasi");
      var $sectionPemerintahan = $("#sectionPemerintahan");
      var $staticimg1 = $(".static-img-1");
      $(".clickUmkm").click(function (e) {
        fullpage_api.setAllowScrolling(false);
        $backB2b.fadeIn('playdown13');
        $staticimg1.addClass('playdown13');
        $landing.velocity({
          opacity: "0",
          top: "-100%"
        }, {
          delay: 0,
          duration: 400,
          begin: function begin() {
            $sectionUmkm.velocity({
              top: "0",
              opacity: "1"
            });
          }
        });
      });
      $(".clickKorporasi").click(function (e) {
        fullpage_api.setAllowScrolling(false);
        $staticimg1.addClass('playdown13');
        $backB2b.fadeIn();
        $landing.velocity({
          opacity: "0",
          top: "-100%"
        }, {
          delay: 0,
          duration: 400,
          begin: function begin() {
            $sectionKorporasi.velocity({
              top: "0",
              opacity: "1"
            });
          }
        });
      });
      $(".clickPemerintahan").click(function (e) {
        fullpage_api.setAllowScrolling(false);
        $staticimg1.addClass('playdown13');
        $backB2b.fadeIn();
        $landing.velocity({
          opacity: "0",
          top: "-100%"
        }, {
          delay: 0,
          duration: 400,
          begin: function begin() {
            $sectionPemerintahan.velocity({
              top: "0",
              opacity: "1"
            });
          }
        });
      });
      $backB2b.click(function (e) {
        fullpage_api.setAllowScrolling(true);
        $staticimg1.removeClass('playdown13');
        $backB2b.fadeOut();
        $("#sectionUmkm, #sectionKorporasi, #sectionPemerintahan").velocity({
          opacity: "0",
          top: "100%"
        }, {
          delay: 0,
          duration: 400,
          begin: function begin() {
            $landing.velocity({
              top: "0",
              opacity: "1"
            });
          }
        });
      });
    });
  };

  // - init
  var init = function init() {
    // handleScrollAnimate();
    handleScaneClick();
  };

  // return
  return {
    init: init
  };
}();
var _default = ScaneClick;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/* ------------------------------------------------------------------------------
@name: ScaneGlobal
@description: ScaneGlobal
--------------------------------------------------------------------------------- */

// - ScaneGlobal
var ScaneGlobal = function () {
  var handleScaneGlobal = function handleScaneGlobal() {
    $(window).on('load', function () {
      fullpage_api.setAllowScrolling(false);
      setTimeout(function () {
        $(".preloader").addClass("moveUp");
        $("#animationPreload").fadeOut(500, function () {
          $('.preloader').remove();
          fullpage_api.setAllowScrolling(true);
        });
      }, 1000);
    });
    $(document).ready(function () {
      new fullpage('#fullpage', {
        //options here

        autoScrolling: true,
        scrollHorizontally: true,
        //navigation: true,
        // anchors: ['cover', 'start', 'soekarno', 'soeharto', 'sby', 'jokowi', 'kalimantan', 'video', 'credit', 'ikn'],
        // lockAnchors: true,
        //scrollOverflow: true,

        onLeave: function onLeave(origin, destination, direction) {
          var leavingSection = this;
          if (origin.index == 0 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-img-1").addClass("moveDown");
            $(".static-bg-1").addClass("playdown");
            $(".logo-telkom").fadeIn();
            //parking
          } else if (origin.index == 1 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-img-1").removeClass("moveDown");
            $(".static-bg-1").removeClass("playdown");
            $(".logo-telkom").fadeOut();
            // parking
          } else if (origin.index == 1 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-img-1").addClass("playdown");
            $(".static-img-1 h2").fadeOut();
            $(".static-img-1 .text1").fadeIn();
            $(".static-bg-1").addClass("playdown2");
          } else if (origin.index == 2 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-img-1").removeClass("playdown");
            $(".static-img-1 h2").fadeIn();
            $(".static-img-1 .text1").fadeOut();
            $(".static-bg-1").removeClass("playdown2");
          } else if (origin.index == 2 && direction == 'down') {
            console.log("ini dari =" + origin.index);
          } else if (origin.index == 3 && direction == 'up') {
            console.log("ini dari =" + origin.index);
          } else if (origin.index == 3 && direction == 'down') {
            console.log("ini dari =" + origin.index);
          } else if (origin.index == 4 && direction == 'up') {
            console.log("ini dari =" + origin.index);
          } else if (origin.index == 4 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-img-1").addClass("playdown2");
            $(".static-bg-1").addClass("playdown3");
          } else if (origin.index == 5 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-img-1").removeClass("playdown2");
            $(".static-bg-1").removeClass("playdown3");
          } else if (origin.index == 5 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-bg-1").addClass("playdown4");
          } else if (origin.index == 6 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-bg-1").removeClass("playdown4");
          } else if (origin.index == 6 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-bg-1").addClass("playdown5");
          } else if (origin.index == 7 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-bg-1").removeClass("playdown5");
          } else if (origin.index == 7 && direction == 'down') {
            console.log("ini dari =" + origin.index);
          } else if (origin.index == 8 && direction == 'up') {
            console.log("ini dari =" + origin.index);
          } else if (origin.index == 8 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-img-2").addClass("moveDown");
          } else if (origin.index == 9 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-img-2").removeClass("moveDown");
          } else if (origin.index == 9 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-img-2-desc1").velocity({
              opacity: "0",
              left: "100%"
            }, {
              delay: 0,
              duration: 400,
              begin: function begin() {
                $(".static-img-2-desc2").velocity({
                  left: "0",
                  opacity: "1"
                });
              }
            });
          } else if (origin.index == 10 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-img-2-desc2").velocity({
              opacity: "0",
              left: "100%"
            }, {
              delay: 0,
              duration: 400,
              begin: function begin() {
                $(".static-img-2-desc1").velocity({
                  left: "0",
                  opacity: "1"
                });
              }
            });
          } else if (origin.index == 10 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-img-2").addClass("moveUp");
          } else if (origin.index == 11 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-img-2").removeClass("moveUp");
          } else if (origin.index == 11 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-bg-1").addClass("playdown6");
            //$(".backB2b ").fadeIn(); 
          } else if (origin.index == 12 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-bg-1").removeClass("playdown6");
            $(".backB2b ").fadeOut();
          } else if (origin.index == 12 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".static-bg-1").addClass("playdown7");
            $(".backB2b ").fadeOut();
          } else if (origin.index == 13 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".static-bg-1").removeClass("playdown7");
          } else if (origin.index == 13 && direction == 'down') {
            console.log("ini dari =" + origin.index);
            $(".logo-bisniscom").fadeIn();
            $(".clickRestart").fadeIn();
            $(".logo-58").addClass("opacity-0");
            $(".static-bg-1").addClass("playdown8");
          } else if (origin.index == 14 && direction == 'up') {
            console.log("ini dari =" + origin.index);
            $(".logo-58").removeClass("opacity-0");
            $(".logo-bisniscom").fadeOut();
            $(".clickRestart").fadeOut();
            $(".static-bg-1").removeClass("playdown8");
          }
        }
      });

      // $.fn.fullpage.setAllowScrolling(false);
    });
  };

  // - init
  var init = function init() {
    handleScaneGlobal();
  };

  // return
  return {
    init: init
  };
}();
var _default = ScaneGlobal;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ScaneClick", {
  enumerable: true,
  get: function get() {
    return _ScaneClick["default"];
  }
});
Object.defineProperty(exports, "ScaneGlobal", {
  enumerable: true,
  get: function get() {
    return _ScaneGlobal["default"];
  }
});
var _ScaneGlobal = _interopRequireDefault(require("./ScaneGlobal"));
var _ScaneClick = _interopRequireDefault(require("./ScaneClick"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./ScaneClick":2,"./ScaneGlobal":3}]},{},[1])

//# sourceMappingURL=maps/app.js.map
