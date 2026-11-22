import React, { useState } from "react";
import { concepts } from "../data/concepts";
import { useI18n } from "../i18n";

export default function ConceptPreview({ id }) {
  const { t } = useI18n();
  const [selected, setSelected] = useState(0);
  const { label, prompt, steps } = concepts[id];
  const { result, detail, scores, palette, lanes } = steps[selected];

  return (
    <div className="concept">
      <p className="concept-label">{t(label)}</p>
      <p className="concept-prompt">{t(prompt)}</p>
      <div className="concept-controls" role="group" aria-label={t(label)}>
        {steps.map((step, index) => (
          <button
            key={step.control}
            type="button"
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
          >
            {t(step.control)}
          </button>
        ))}
      </div>
      <div
        className="concept-result"
        data-palette={palette}
        role="status"
        aria-atomic="true"
      >
        <strong>{t(result)}</strong>
        {lanes && (
          <ul className="concept-lanes">
            {lanes.map((lane) => (
              <li key={lane}>{t(lane)}</li>
            ))}
          </ul>
        )}
        {scores && (
          <ul className="concept-scores">
            {scores.map(({ label: name, value }) => (
              <li key={name}>
                <span>{t(name)}</span>
                <span className="score-track" aria-hidden="true">
                  <span style={{ width: `${value}%` }} />
                </span>
                <span>{value}%</span>
              </li>
            ))}
          </ul>
        )}
        <p>{t(detail)}</p>
      </div>
    </div>
  );
}
