import React, { useId, useRef, useState } from "react";
import ConceptPreview from "./ConceptPreview";
import { useI18n } from "../i18n";

const views = ["Overview", "Concept"];

export default function CardViews({ conceptId, name, heading, children }) {
  const { t } = useI18n();
  const [selected, setSelected] = useState(0);
  const tabs = useRef([]);
  const id = useId();

  function handleKeyDown(event) {
    const { key } = event;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) return;

    event.preventDefault();
    const next = key === "Home" ? 0 : key === "End" ? 1 : 1 - selected;
    setSelected(next);
    tabs.current[next].focus();
  }

  return (
    <>
      <div
        className="card-views"
        role="tablist"
        aria-label={`${name} ${t("views")}`}
        data-view={selected === 0 ? "overview" : "concept"}
      >
        {views.map((view, index) => (
          <button
            key={view}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={selected === index}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={selected === index ? 0 : -1}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            onClick={() => setSelected(index)}
            onKeyDown={handleKeyDown}
          >
            {t(view)}
          </button>
        ))}
      </div>
      {heading}
      <div
        role="tabpanel"
        id={`${id}-panel-0`}
        aria-labelledby={`${id}-tab-0`}
        hidden={selected !== 0}
      >
        {children}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel-1`}
        aria-labelledby={`${id}-tab-1`}
        hidden={selected !== 1}
      >
        <ConceptPreview id={conceptId} />
      </div>
    </>
  );
}
