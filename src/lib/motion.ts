export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Only content the reader has not reached yet may be hidden for an entrance animation. */
export function canAnimateEntrance(element: Element) {
  return element.getBoundingClientRect().top >= window.innerHeight && !prefersReducedMotion();
}

export function onFirstVisible(element: Element, callback: () => void) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      callback();
    },
    { rootMargin: "0px 0px -8% 0px" },
  );
  observer.observe(element);
  return () => observer.disconnect();
}
