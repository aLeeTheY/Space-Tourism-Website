"use strict";
(() => {
  // src/ts/reset_focus_on_the_page.ts
  window.onpageshow = function(event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
})();
