import React from "react";
import { skills } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { useI18n } from "../i18n";

export default function Skills() {
  const { t } = useI18n();
  return (
    <section
      id="skills"
      className="shell section"
      aria-labelledby="skills-title"
    >
      <SectionHeading
        id="skills-title"
        number="04"
        label={t("SKILLS")}
        title={
          <>
            {t("Tools with")} <em>{t("context.")}</em>
          </>
        }
      />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Reveal className="skill" key={skill.number} delay={index * 70}>
            <span className="skill-number">{skill.number} /</span>
            <h3>{t(skill.name)}</h3>
            <p>{t(skill.text)}</p>
            <ul className="tags" aria-label={t(skill.name)}>
              {skill.tags.map((tag) => (
                <li key={tag}>{t(tag)}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
