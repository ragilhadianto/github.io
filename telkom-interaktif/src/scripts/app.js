// --- utilities
// import { Scrollable, BrowserCheck } from "utilities";

// --- components
import {
  ScaneGlobal,
  ScaneClick,
} from "components";

// --- App
const App = (() => {
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
  const ready = () => {
    (($) => {
      // // --- disable scroll
      // Scrollable.disable();

      // // --- Global
      // runTransition();
      // showSiteContent();
      // BrowserCheck.init();

      // --- Project
      ScaneGlobal.init();
      ScaneClick.init();
    })(jQuery);
  };

  // --- load
  const load = () => {
    (($) => {
      $(window).on("load", () => {});
    })(jQuery);
  };

  // --- init
  const init = () => {
    load();
    ready();
  };

  // --- return
  return {
    init,
  };
})();

// ---  run main js
App.init();
