type RevealOptions = {
  rootSelector?: string;
  itemSelector?: string;
  delayStep?: number;
  threshold?: number;
};

export function initReveal(options: RevealOptions = {}) {
  const {
    rootSelector = '[data-reveal-root]',
    itemSelector = '.reveal-item',
    delayStep = 100,
    threshold = 0.2,
  } = options;

  const roots = document.querySelectorAll<HTMLElement>(rootSelector);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  roots.forEach((root) => {
    if (root.dataset.revealReady === 'true') return;
    root.dataset.revealReady = 'true';

    const items = root.querySelectorAll<HTMLElement>(itemSelector);
    if (!items.length) return;

    if (prefersReducedMotion) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        items.forEach((item, idx) => {
          setTimeout(() => item.classList.add('is-visible'), idx * delayStep);
        });

        io.disconnect();
      },
      { threshold }
    );

    io.observe(root);
  });
}