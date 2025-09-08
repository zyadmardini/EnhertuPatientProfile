import { gsap } from 'gsap';

type Opts = {
  root?: Element | Document;
  duration?: number;
  y?: number;
  scale?: number;
  stagger?: number;
  ease?: string;
  swipeBaseDelay?: number;
};

const ensureElement = (el: Element | Document) =>
  (el as Element).querySelectorAll ? (el as Element) : document;

export function animateEnter(opts: Opts = {}) {
  if (typeof window === 'undefined') return;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

  const {
    root = document,
    duration = 0.6,
    y = 12,
    scale = 0.98,
    stagger = 0.06,
    ease = 'power2.out',
    swipeBaseDelay = 1.5,
  } = opts;

  const rootEl = ensureElement(root);

  // Singles: any element marked data-enter but not inside a group
  const singles = Array.from(
    rootEl.querySelectorAll<HTMLElement>('[data-enter]')
  )
    .filter((el) => !el.closest('[data-enter-group]'))
    .sort(
      (a, b) =>
        parseFloat(a.dataset.enterOrder || '0') -
        parseFloat(b.dataset.enterOrder || '0')
    );

  // Swipe elements: elements marked data-enter-swipe
  const swipeElements = Array.from(
    rootEl.querySelectorAll<HTMLElement>('[data-enter-swipe]')
  )
    .sort(
      (a, b) =>
        parseFloat(a.dataset.enterOrder || '0') -
        parseFloat(b.dataset.enterOrder || '0')
    );

  // Groups: containers whose children should stagger
  const groups = Array.from(
    rootEl.querySelectorAll<HTMLElement>('[data-enter-group]')
  );

  const groupChildren = groups.flatMap((g) =>
    (Array.from(g.children) as HTMLElement[]).filter(
      (el) => !el.hasAttribute('data-enter-swipe')
    )
  );

  const allTargets = [...singles, ...groupChildren];
  if (!allTargets.length && !swipeElements.length) return;

  // Mark root as entering so CSS baseline applies only during animation
  if ((rootEl as Element).setAttribute) {
    (rootEl as Element).setAttribute('data-entering', '');
  }

  // Set initial state for regular elements
  if (allTargets.length) {
    gsap.set(allTargets, { opacity: 0, y, scale });
  }
  
  // Set initial state for swipe elements (scaled from left, hidden)
  if (swipeElements.length) {
    gsap.set(swipeElements, { 
      scaleX: 0, 
      transformOrigin: 'left center',
      opacity: 0 // Start hidden
    });
  }

  const tl = gsap.timeline({
    defaults: { duration, ease },
    onComplete: () => {
      if ((rootEl as Element).removeAttribute) {
        (rootEl as Element).removeAttribute('data-entering');
      }
    },
  });

  if (singles.length) {
    tl.to(singles, { opacity: 1, y: 0, scale: 1, stagger }, 0);
  }

  groups.forEach((group, i) => {
    const children = (Array.from(group.children) as HTMLElement[]).filter(
      (el) => !el.hasAttribute('data-enter-swipe')
    );
    const groupDelay =
      parseFloat(group.getAttribute('data-enter-delay') || '0') || 0;
    const groupStagger =
      parseFloat(group.getAttribute('data-enter-stagger') || `${stagger}`) ||
      stagger;
    const at = i * (stagger * 2) + groupDelay;
    tl.to(children, { opacity: 1, y: 0, scale: 1, stagger: groupStagger }, at);
  });

  // Add swipe animations
  if (swipeElements.length) {
    swipeElements.forEach((element, i) => {
      const elementDelay = parseFloat(element.dataset.enterDelay || '0') || 0;
      const at = swipeBaseDelay + elementDelay + (i * stagger); // Start at base delay
      tl.to(element, { 
        opacity: 1,
        scaleX: 1, 
        duration: duration * 1 // Slightly faster for swipe effect
      }, at);
    });
  }

  return tl;
}
