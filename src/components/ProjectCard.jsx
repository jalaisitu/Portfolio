import React, { useId, useRef, useState } from "react";
import CardViews from "./CardViews";
import CodeViewer from "./CodeViewer";
import { useI18n } from "../i18n";
import { snippets } from "../data/snippets";

export default function ProjectCard({ project }) {
  const { t } = useI18n();
  const [mode, setMode] = useState("preview");
  const tabId = useId();
  const tabs = useRef([]);
  const snippet = snippets[project.id];

  function onModeKeyDown(event) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? "preview"
        : event.key === "End"
          ? "source"
          : mode === "preview"
            ? "source"
            : "preview";
    setMode(next);
    tabs.current[next]?.focus();
  }

  return (
    <li className="project-item">
      <article aria-labelledby={`${project.id}-title`}>
        <div className="project-body">
          {snippet && (
            <div className="project-mode-row">
              <div
                className="project-mode"
                role="tablist"
                aria-label={`${t(project.name)} ${t("display mode")}`}
              >
                {["preview", "source"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    id={`${tabId}-${item}-tab`}
                    aria-controls={`${tabId}-${item}-panel`}
                    aria-selected={mode === item}
                    tabIndex={mode === item ? 0 : -1}
                    ref={(node) => {
                      tabs.current[item] = node;
                    }}
                    onClick={() => setMode(item)}
                    onKeyDown={onModeKeyDown}
                  >
                    {t(item === "preview" ? "Preview" : "Source")}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div
            role={snippet ? "tabpanel" : undefined}
            id={snippet ? `${tabId}-preview-panel` : undefined}
            aria-labelledby={snippet ? `${tabId}-preview-tab` : undefined}
            hidden={mode !== "preview"}
            className="project-mode-panel"
          >
            <CardViews
              conceptId={project.id}
              name={t(project.name)}
              heading={
                <>
                  <p className="project-meta">{t(project.kind)}</p>
                  <h3 id={`${project.id}-title`}>{t(project.name)}</h3>
                </>
              }
            >
              <p className="project-description">{t(project.description)}</p>
              <ul className="tags" aria-label={t("Technologies")}>
                {project.tags.map((tag) => (
                  <li key={tag}>{t(tag)}</li>
                ))}
              </ul>
              <p className="project-role">
                <strong>
                  {project.id === "portfolio"
                    ? t("What you can test")
                    : t("My contribution")}
                </strong>
                {t(project.role)}
              </p>
              <div className="project-links">
                {project.evidence && (
                  <a
                    href={
                      project.evidence.url.startsWith("/")
                        ? `${import.meta.env.BASE_URL}${project.evidence.url.slice(1)}`
                        : project.evidence.url
                    }
                  >
                    {t(project.evidence.label)}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.live && (
                  <span className="live-label">
                    <span className="status-dot" aria-hidden="true" />
                    {t("You are viewing the demo")}
                  </span>
                )}
              </div>
              <details className="case-study">
                <summary>
                  {t("View the technical case")} · {t(project.name)}
                </summary>
                <dl>
                  <div>
                    <dt>{t("Problem")}</dt>
                    <dd>{t(project.problem)}</dd>
                  </div>
                  <div>
                    <dt>{t("Solution")}</dt>
                    <dd>{t(project.solution)}</dd>
                  </div>
                  <div>
                    <dt>{t("Implementation and decisions")}</dt>
                    <dd>{t(project.decisions)}</dd>
                  </div>
                  <div>
                    <dt>{t("Verifiable result")}</dt>
                    <dd>{t(project.result)}</dd>
                  </div>
                  <div>
                    <dt>{t("Scope and limitations")}</dt>
                    <dd>{t(project.limitation)}</dd>
                  </div>
                </dl>
              </details>
            </CardViews>
          </div>
          {snippet && (
            <div
              role="tabpanel"
              id={`${tabId}-source-panel`}
              aria-labelledby={`${tabId}-source-tab`}
              hidden={mode !== "source"}
              className="project-mode-panel"
            >
              <div className="project-source-heading">
                <p className="project-meta">{t(project.kind)}</p>
                <h3>{t(project.name)}</h3>
              </div>
              <CodeViewer snippet={snippet} />
            </div>
          )}
        </div>
      </article>
    </li>
  );
}
