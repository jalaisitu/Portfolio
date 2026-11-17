import React from "react";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }) {
  return (
    <Reveal className={`project-item project-${project.id}`} delay={index * 70}>
      <article aria-labelledby={`${project.id}-title`}>
        <div className="project-body">
          <p className="project-meta">{project.kind}</p>
          <h3 id={`${project.id}-title`}>{project.name}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="tags" aria-label="Tecnologías">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <p className="project-role">
            <strong>
              {project.id === "portfolio"
                ? "Qué puedes comprobar"
                : "Mi participación"}
            </strong>
            {project.role}
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
                {project.evidence.label} <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.live && (
              <span className="live-label">
                <span className="status-dot" aria-hidden="true" />
                Estás viendo la demo
              </span>
            )}
          </div>
          <details className="case-study">
            <summary>Ver caso técnico de {project.name}</summary>
            <dl>
              <div>
                <dt>Problema</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt>Solución</dt>
                <dd>{project.solution}</dd>
              </div>
              <div>
                <dt>Implementación y decisiones</dt>
                <dd>{project.decisions}</dd>
              </div>
              <div>
                <dt>Resultado verificable</dt>
                <dd>{project.result}</dd>
              </div>
              <div>
                <dt>Alcance y limitaciones</dt>
                <dd>{project.limitation}</dd>
              </div>
            </dl>
          </details>
        </div>
      </article>
    </Reveal>
  );
}
