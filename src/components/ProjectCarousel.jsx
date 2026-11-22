import React, { Children, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useI18n } from "../i18n";

const pixelsPerSecond = 84;
const edgeTolerance = 2;

export default function ProjectCarousel({ children }) {
  const { t } = useI18n();
  const viewport = useRef(null);
  const cardStep = useRef(0);
  const interactionTimer = useRef(null);
  const [firstCard, setFirstCard] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const cards = Children.toArray(children);
  const cardCount = cards.length;
  const orderedCards = [
    ...cards.slice(firstCard),
    ...cards.slice(0, firstCard),
  ];

  function move(direction, smooth) {
    const track = viewport.current;
    const position = track.scrollLeft;
    const firstOffset = track.firstElementChild.offsetLeft;
    const offsets = Array.from(
      track.children,
      (card) => card.offsetLeft - firstOffset,
    );
    const target =
      direction > 0
        ? offsets.find((offset) => offset > position + edgeTolerance)
        : offsets.findLast((offset) => offset < position - edgeTolerance);

    track.scrollTo({
      left:
        target ?? (direction > 0 ? track.scrollWidth - track.clientWidth : 0),
      behavior: smooth ? "smooth" : "instant",
    });
  }

  useEffect(() => {
    const track = viewport.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    const visibility = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio >= 0.15),
      { threshold: 0.15 },
    );
    const measure = () => {
      const [first, second] = track.children;
      cardStep.current = second
        ? second.getBoundingClientRect().left -
          first.getBoundingClientRect().left
        : 0;
    };
    const size = new ResizeObserver(measure);

    measure();
    updatePreference();
    preference.addEventListener("change", updatePreference);
    visibility.observe(track);
    size.observe(track);
    return () => {
      preference.removeEventListener("change", updatePreference);
      visibility.disconnect();
      size.disconnect();
      window.clearTimeout(interactionTimer.current);
    };
  }, []);

  useEffect(() => {
    if (
      !playing ||
      hovered ||
      focused ||
      interacting ||
      !visible ||
      reducedMotion
    )
      return;

    const track = viewport.current;
    let position = track.scrollLeft;
    let previousTime = performance.now();
    let frame;

    function advance(time) {
      // Keep fractional pixels so a slow scroll also moves on 120 Hz displays.
      const elapsed = Math.min(time - previousTime, 50);
      previousTime = time;
      position += (pixelsPerSecond * elapsed) / 1000;
      const step = cardStep.current;
      if (step > 0 && position >= step) {
        const passed = Math.floor(position / step);
        position -= passed * step;

        // Move off-screen cards to the end before the next paint. Their keys
        // preserve the selected tab and demo state without duplicating controls.
        flushSync(() =>
          setFirstCard((current) => (current + passed) % cardCount),
        );
      }
      track.scrollLeft = position;
      frame = window.requestAnimationFrame(advance);
    }

    frame = window.requestAnimationFrame(advance);
    return () => window.cancelAnimationFrame(frame);
  }, [
    playing,
    hovered,
    focused,
    interacting,
    visible,
    reducedMotion,
    cardCount,
  ]);

  function pauseDuringInteraction() {
    window.clearTimeout(interactionTimer.current);
    setInteracting(true);
    interactionTimer.current = window.setTimeout(
      () => setInteracting(false),
      2500,
    );
  }

  function handleKeyDown(event) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1, !reducedMotion);
    } else if (event.key === " " && !reducedMotion) {
      event.preventDefault();
      if (!event.repeat) setPlaying((current) => !current);
    }
  }

  function bringCardIntoView(event) {
    const card = event.target.closest(".project-item");
    if (!card) return;

    const track = event.currentTarget;
    const viewportBounds = track.getBoundingClientRect();
    const cardBounds = card.getBoundingClientRect();
    const leftClipping = Math.min(0, cardBounds.left - viewportBounds.left - 6);
    const rightClipping = Math.max(
      0,
      cardBounds.right - viewportBounds.right + 6,
    );
    track.scrollLeft += leftClipping + rightClipping;
  }

  return (
    <>
      <p id="project-track-help" className="sr-only">
        {t("Use the left and right arrow keys to browse projects.")}
        {!reducedMotion &&
          (playing
            ? t(" Press Space to turn off automatic scrolling.")
            : t(" Press Space to turn on automatic scrolling."))}
      </p>
      <ul
        id="project-track"
        ref={viewport}
        className="project-track"
        aria-label={t("Project cards")}
        aria-describedby="project-track-help"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerEnter={(event) => setHovered(event.pointerType === "mouse")}
        onPointerLeave={() => setHovered(false)}
        onFocus={(event) => {
          setFocused(true);
          if (event.target.matches(":focus-visible")) bringCardIntoView(event);
        }}
        onClick={(event) => {
          if (event.target.matches('[role="tab"]')) bringCardIntoView(event);
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setFocused(false);
        }}
        onPointerDown={(event) => {
          if (event.pointerType === "touch") pauseDuringInteraction();
        }}
        onPointerUp={(event) => {
          if (event.pointerType === "touch") pauseDuringInteraction();
        }}
        onPointerCancel={(event) => {
          if (event.pointerType === "touch") pauseDuringInteraction();
        }}
        onWheel={(event) => {
          if (event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY))
            pauseDuringInteraction();
        }}
      >
        {orderedCards}
      </ul>
    </>
  );
}
