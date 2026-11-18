import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let lenis;

    const createScroller = () => {
      if (reducedMotion.matches || lenis) return;

      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.075,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
        anchors: {
          offset: -88,
          duration: 1.15,
        },
      });
    };

    const handleMotionChange = () => {
      lenis?.destroy();
      lenis = undefined;
      createScroller();
    };

    createScroller();
    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      reducedMotion.removeEventListener("change", handleMotionChange);
      lenis?.destroy();
    };
  }, []);

  return null;
}
