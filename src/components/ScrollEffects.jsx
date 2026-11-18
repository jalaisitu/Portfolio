import { useEffect } from "react";

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const easeOut = (value) => 1 - Math.pow(1 - value, 3);

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let scenes = [];

    const collectScenes = () => {
      scenes = [...document.querySelectorAll("[data-scroll-scene]")];
    };

    const resetScene = (scene) => {
      scene.style.setProperty("--scene-progress", "1");
      scene.style.setProperty("--scene-shift", "0px");
      scene.style.setProperty("--scene-clip", "0%");
      scene.style.setProperty("--scene-opacity", "1");
      scene.style.setProperty("--hero-shift", "0px");
      scene.style.setProperty("--hero-opacity", "1");
    };

    const update = () => {
      frame = 0;
      const scrollable = root.scrollHeight - window.innerHeight;
      const pageProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--page-progress", String(clamp(pageProgress)));

      if (reducedMotion.matches) {
        scenes.forEach(resetScene);
        return;
      }

      scenes.forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const type = scene.dataset.scrollScene;

        if (type === "hero") {
          const travel = Math.max(rect.height - window.innerHeight * 0.55, 1);
          const progress = clamp(-rect.top / travel);
          scene.style.setProperty("--scene-progress", String(progress));
          scene.style.setProperty("--hero-shift", `${progress * -72}px`);
          scene.style.setProperty(
            "--hero-opacity",
            String(1 - progress * 0.62),
          );
          return;
        }

        const rawProgress = clamp(
          (window.innerHeight - rect.top) / (window.innerHeight * 0.62),
        );
        const progress = easeOut(rawProgress);
        scene.style.setProperty("--scene-progress", String(progress));
        scene.style.setProperty("--scene-shift", `${(1 - progress) * 44}px`);
        scene.style.setProperty("--scene-clip", `${(1 - progress) * 9}%`);
        scene.style.setProperty(
          "--scene-opacity",
          String(0.35 + progress * 0.65),
        );
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const handleResize = () => {
      collectScenes();
      requestUpdate();
    };

    collectScenes();
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", handleResize);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);
      reducedMotion.removeEventListener("change", requestUpdate);
      window.cancelAnimationFrame(frame);
      root.style.removeProperty("--page-progress");
    };
  }, []);

  return null;
}
