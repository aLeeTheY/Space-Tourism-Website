"use strict";
(() => {
  // src/ts/link_transition_delay__explore_btn.ts
  var isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  if (isTouchDevice) {
    document.querySelector(".explore-btn")?.addEventListener("click", function(e) {
      e.preventDefault();
      const link = this;
      const href = link.getAttribute("href") ?? "#";
      const delay = 300;
      link.classList.add("is-clicked");
      setTimeout(function() {
        window.location.href = href;
      }, delay);
    });
  }
})();
