/* Motion is an enhancement: content, links and scrolling work without it. */
(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const hero = document.querySelector('.hero');
  const lightSwitch = document.getElementById('portrait-switch');
  const progress = document.getElementById('reading-progress');
  const pending = new Map();
  const surfaces = [];
  const active = new Set();
  const magnets = [];
  let pointerFrame = 0;
  let scrollFrame = 0;
  let lightPinned = false;
  let heroVisible = true;

  function canFollow(event) {
    return fine.matches && !reduced.matches && event.pointerType !== 'touch';
  }
  function resetPointer(element) {
    pending.delete(element);
    active.delete(element);
    element.classList.remove('is-pointer');
    ['--magnet-x', '--magnet-y', '--portrait-x', '--portrait-y', '--rx', '--ry'].forEach(name => element.style.removeProperty(name));
  }
  function flushPointers() {
    pointerFrame = 0;
    // Read all geometry before writing styles to avoid repeated layout work.
    const updates = Array.from(pending, ([element, data]) => ({ element, data, rect: element.getBoundingClientRect() }));
    pending.clear();
    if (reduced.matches || !fine.matches) return;
    updates.forEach(({ element, data, rect }) => {
      if (!rect.width || !rect.height) return;
      const x = Math.max(0, Math.min(data.x - rect.left, rect.width));
      const y = Math.max(0, Math.min(data.y - rect.top, rect.height));
      const dx = x / rect.width - .5;
      const dy = y / rect.height - .5;
      if (data.kind === 'magnet') {
        element.style.setProperty('--magnet-x', `${(dx * 12).toFixed(2)}px`);
        element.style.setProperty('--magnet-y', `${(dy * 10).toFixed(2)}px`);
      } else {
        element.style.setProperty('--x', `${x.toFixed(1)}px`);
        element.style.setProperty('--y', `${y.toFixed(1)}px`);
        element.style.setProperty('--rx', `${(-dy * 5).toFixed(2)}deg`);
        element.style.setProperty('--ry', `${(dx * 5).toFixed(2)}deg`);
        if (element === hero) {
          element.style.setProperty('--portrait-x', `${(-dx * 12).toFixed(2)}px`);
          element.style.setProperty('--portrait-y', `${(-dy * 8).toFixed(2)}px`);
        }
      }
    });
  }
  function track(element, kind, event) {
    if (!canFollow(event)) return;
    element.classList.add('is-pointer');
    active.add(element);
    pending.set(element, { x: event.clientX, y: event.clientY, kind });
    if (!pointerFrame) pointerFrame = requestAnimationFrame(flushPointers);
  }
  function bindPointer(element, kind) {
    element.addEventListener('pointerenter', event => track(element, kind, event), { passive: true });
    element.addEventListener('pointermove', event => track(element, kind, event), { passive: true });
    element.addEventListener('pointerleave', () => resetPointer(element), { passive: true });
    element.addEventListener('pointercancel', () => resetPointer(element), { passive: true });
    (kind === 'magnet' ? magnets : surfaces).push(element);
  }

  document.querySelectorAll('.hero, .case-cover, .skill-card, .quote-card').forEach(element => bindPointer(element, 'surface'));
  document.querySelectorAll('.hero-primary, .portrait-switch, .lang-switch, .menu-button, .contact-links a:first-child, .footer-bottom a').forEach(element => {
    element.classList.add('magnetic');
    bindPointer(element, 'magnet');
  });

  lightSwitch.addEventListener('click', () => {
    lightPinned = !lightPinned;
    hero.classList.toggle('is-lit', lightPinned);
    lightSwitch.setAttribute('aria-pressed', String(lightPinned));
  });

  document.querySelectorAll('.skills-grid .reveal, .paired-cases .reveal').forEach((element, index) => {
    element.style.setProperty('--reveal-delay', `${index % 2 * 95}ms`);
  });

  // A heading enters line by line without splitting Persian glyphs or translations.
  document.querySelectorAll('.hero-content h1 > span, .hero-content h1 > em').forEach((element, index) => {
    element.style.setProperty('--line-delay', `${120 + index * 130}ms`);
  });

  function updateScroll() {
    scrollFrame = 0;
    const y = window.scrollY;
    const distance = root.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, y / distance)) : 0})`;
    if (!reduced.matches) {
      root.style.setProperty('--scroll-turn', `${(y * .045 % 360).toFixed(1)}deg`);
      if (heroVisible) hero.style.setProperty('--scroll-lift', `${Math.min(y * .13, 85).toFixed(1)}px`);
    }
  }
  function scheduleScroll() {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll);
  }
  window.addEventListener('scroll', () => {
    active.forEach(resetPointer);
    scheduleScroll();
  }, { passive: true });
  window.addEventListener('resize', scheduleScroll, { passive: true });
  window.addEventListener('blur', () => [...surfaces, ...magnets].forEach(resetPointer));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) [...surfaces, ...magnets].forEach(resetPointer);
  });
  if ('ResizeObserver' in window) new ResizeObserver(scheduleScroll).observe(document.body);

  // Offscreen artwork is not updated; the learning cycle runs once on entry.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      heroVisible = entries[0].isIntersecting;
      if (heroVisible) scheduleScroll();
    }).observe(hero);
    const cycle = document.querySelector('.lean-framework');
    const cycleObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        cycle.classList.add('cycle-entered');
        cycleObserver.unobserve(cycle);
      });
    }, { threshold: .45 });
    cycleObserver.observe(cycle);
  }

  function syncMotion() {
    root.classList.toggle('has-motion', !reduced.matches);
    if (reduced.matches) {
      [...surfaces, ...magnets].forEach(resetPointer);
      root.style.removeProperty('--scroll-turn');
      hero.style.removeProperty('--scroll-lift');
      document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
    }
    scheduleScroll();
  }
  reduced.addEventListener('change', syncMotion);
  fine.addEventListener('change', () => [...surfaces, ...magnets].forEach(resetPointer));
  syncMotion();
})();
