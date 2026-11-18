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
      scene.style.setProperty("--hero-primary-x", "0vw");
      scene.style.setProperty("--hero-accent-x", "0vw");
      scene.style.setProperty("--hero-title-scale", "1");
      scene.style.setProperty("--hero-title-opacity", "1");
      scene.style.setProperty("--hero-details-opacity", "1");
      scene.style.setProperty("--hero-cue-opacity", "1");
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
          const travel = Math.max(rect.height - window.innerHeight, 1);
          const progress = clamp(-rect.top / travel);
          const split = easeOut(clamp((progress - 0.08) / 0.72));
          const detailsFade = clamp((progress - 0.05) / 0.28);
          const titleFade = clamp((progress - 0.76) / 0.24);
          scene.style.setProperty("--scene-progress", String(progress));
          scene.style.setProperty("--hero-primary-x", `${split * -15}vw`);
          scene.style.setProperty("--hero-accent-x", `${split * 12}vw`);
          scene.style.setProperty(
            "--hero-title-scale",
            String(1 + split * 0.14),
          );
          scene.style.setProperty(
            "--hero-title-opacity",
            String(1 - titleFade),
          );
          scene.style.setProperty(
            "--hero-details-opacity",
            String(1 - detailsFade),
          );
          scene.style.setProperty(
            "--hero-cue-opacity",
            String(1 - clamp(progress / 0.14)),
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
