document.addEventListener("scroll", function () {
  document.querySelectorAll("section").forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.5) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
});
