(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _components = require("./components");
// --- utilities
// import { Scrollable, BrowserCheck } from "utilities";

// --- components

// --- App
var App = function () {
  // --- ready
  var ready = function ready() {
    (function ($) {
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
      // jump menu
      $('a[href^="#"]').on('click', function (e) {
        var target = this.hash,
          $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 55
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
      });

      // menu
      $('.menuClick').on('click', function () {
        if ($(this).attr('data-click-state') == 1) {
          $(this).attr('data-click-state', 0);
          $(this).removeClass('is-active');
          $('.menu').removeClass('active');
        } else {
          $(this).attr('data-click-state', 1);
          $(this).addClass('is-active');
          $('.menu').addClass('active');
        }
      });
      $('.menu a').click(function () {
        $('.menuClick').attr('data-click-state', 0);
        $('.menuClick').removeClass('is-active');
        $('.menu').removeClass('active');
      });

      //menu scroll state 
      $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        $(".page-section").each(function (i) {
          if ($(this).position().top - 200 <= scrollDistance) {
            $(".menu a").removeClass("active");
            $(".menu a").eq(i).addClass("active");
          }
          if ($(this).position().top - 100 <= scrollDistance) {
            $(".menu a").removeClass("active");
            $(".menu a").eq(i).addClass("active");
          }
        });
      }).scroll();

      // // magnific
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

      // end
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
  var handleScaneGlobal = function handleScaneGlobal() {};

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
