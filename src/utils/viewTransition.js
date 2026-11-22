import { flushSync } from "react-dom";

let inProgress = false;

// Reveal the new document snapshot from the clicked control with straight edges.
// The native fallback applies the preference immediately when transitions are unavailable.
export function changeWithTransition(event, apply) {
  if (inProgress) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduce) {
    apply();
    return;
  }

  const bounds = event.currentTarget.getBoundingClientRect();
  const x = bounds.left + bounds.width / 2;
  const y = bounds.top + bounds.height / 2;
  const radius =
    Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) *
    1.16;
  const octagon = (size) => {
    const points = [
      [-0.42, -1],
      [0.42, -1],
      [1, -0.42],
      [1, 0.42],
      [0.42, 1],
      [-0.42, 1],
      [-1, 0.42],
      [-1, -0.42],
    ];
    return `polygon(${points.map(([px, py]) => `${x + px * size}px ${y + py * size}px`).join(",")})`;
  };

  inProgress = true;
  const transition = document.startViewTransition(() => flushSync(apply));
  transition.ready
    .then(() =>
      document.documentElement.animate(
        [{ clipPath: octagon(0) }, { clipPath: octagon(radius) }],
        {
          duration: 680,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      ),
    )
    .catch(() => {});
  transition.finished.finally(() => {
    inProgress = false;
  });
}
