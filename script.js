console.log("fuckyou");
const btnNav = document.querySelector(".btn-mobile-nav ");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const sectionheroel = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("stickey");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("stickey");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionheroel);
