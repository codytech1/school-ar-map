document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("flex-box")) {
          entry.target.classList.add(
            entry.target.dataset.slide === "left" ? "slide-in-left" : "slide-in-right"
          );
        }
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".flex-box").forEach((box) => {
    observer.observe(box);
  });
});