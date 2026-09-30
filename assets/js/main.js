/* Portfolio site behaviour: mobile nav, scroll-spy, footer year.
   Progressive enhancement — every section is readable with JS disabled. */

(function () {
  "use strict";

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close after choosing a destination on small screens.
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---- Scroll-spy: highlight the section currently in view ---- */
  var sectionLinks = Array.prototype.filter.call(
    document.querySelectorAll('.nav__list a[href^="#"]'),
    function (link) { return link.getAttribute("href").length > 1; }
  );

  if (sectionLinks.length && "IntersectionObserver" in window) {
    var linkFor = {};
    var targets = [];

    sectionLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (section) {
        linkFor[id] = link;
        targets.push(section);
      }
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = linkFor[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          sectionLinks.forEach(function (other) { other.classList.remove("is-active"); });
          link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    targets.forEach(function (section) { observer.observe(section); });
  }

  /* ---- Footer year ---- */
  Array.prototype.forEach.call(document.querySelectorAll("#year"), function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
