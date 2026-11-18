import React, { useEffect, useRef } from "react";

// El contenido permanece visible si el navegador no admite animaciones.
export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!window.IntersectionObserver || !element.animate) return;
    let animation;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        if (!motion.matches && !element.contains(document.activeElement))
          animation = element.animate(
            [
              { opacity: 0, translate: "0 26px" },
              { opacity: 1, translate: "0 0" },
            ],
            {
              duration: 750,
              delay,
              easing: "cubic-bezier(.22,1,.36,1)",
              fill: "backwards",
            },
          );
      },
      { threshold: 0.08 },
    );
    const cancel = () => animation?.cancel();
    const focus = () => {
      if (element.contains(document.activeElement)) cancel();
    };
    motion.addEventListener("change", cancel);
    element.addEventListener("focusin", focus);
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancel();
      motion.removeEventListener("change", cancel);
      element.removeEventListener("focusin", focus);
    };
  }, [delay]);
  return (
    <div ref={ref} className={className} data-scroll-scene="reveal">
      {children}
    </div>
  );
}
