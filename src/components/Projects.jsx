import React from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="shell section"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        id="projects-title"
        number="01"
        label="PROYECTOS Y EVIDENCIAS"
        title={
          <>
            Qué he construido.
            <br />
            <em>Cómo funciona.</em>
          </>
        }
        aside="Contexto, participación y decisiones técnicas. Cada caso distingue el trabajo individual del trabajo del equipo."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
