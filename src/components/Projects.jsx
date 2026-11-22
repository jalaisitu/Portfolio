import React from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectCarousel from "./ProjectCarousel";
import SectionHeading from "./SectionHeading";
import { useI18n } from "../i18n";

export default function Projects() {
  const { t } = useI18n();
  return (
    <section
      id="projects"
      className="shell section"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        id="projects-title"
        number="02"
        label={t("PROJECTS AND EVIDENCE")}
        title={
          <>
            {t("What I have built.")}
            <br />
            <em>{t("How it works.")}</em>
          </>
        }
        aside={t(
          "Context, contribution and technical decisions. Each case clearly separates individual work from team work.",
        )}
      />
      <ProjectCarousel>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectCarousel>
    </section>
  );
}
