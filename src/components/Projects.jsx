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
        label="PROJECTS AND EVIDENCE"
        title={
          <>
            What I have built.
            <br />
            <em>How it works.</em>
          </>
        }
        aside="Context, contribution and technical decisions. Each case clearly separates individual work from team work."
      />
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
