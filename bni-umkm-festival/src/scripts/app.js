// --- utilities
// import { Scrollable, BrowserCheck } from "utilities";

// --- components
import {
  ScaneGlobal,
  ScaneClick,
} from "components";

// --- App
const App = (() => {
  
  // --- ready
  const ready = () => {
    (($) => {
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
