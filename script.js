const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function revealAll() {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}

if (prefersReducedMotion.matches) {
  revealAll();
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
