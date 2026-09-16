/* Backmark website. The page works without this; it only adds the fade in. */
(function () {
  "use strict";
  var targets = document.querySelectorAll(".reveal");
  var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (calm || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var delay = Number(entry.target.dataset.delay || 0);
      setTimeout(function () { entry.target.classList.add("is-in"); }, delay);
      seen.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
  targets.forEach(function (el) { seen.observe(el); });
})();
