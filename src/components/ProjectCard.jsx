import React from "react";
import CardViews from "./CardViews";
import { useI18n } from "../i18n";

export default function ProjectCard({ project }) {
  const { t } = useI18n();
  return (
    <li className="project-item">
      <article aria-labelledby={`${project.id}-title`}>
        <div className="project-body">
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
                  {t(project.evidence.label)} <span aria-hidden="true">↗</span>
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
      </article>
    </li>
  );
}
