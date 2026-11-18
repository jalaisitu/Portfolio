import React from "react";
import { skills } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="shell section"
      aria-labelledby="skills-title"
    >
      <SectionHeading
        id="skills-title"
        number="04"
        label="SKILLS"
        title={
          <>
            Tools with <em>context.</em>
          </>
        }
      />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Reveal className="skill" key={skill.number} delay={index * 70}>
            <span className="skill-number">{skill.number} /</span>
            <h3>{skill.name}</h3>
            <p>{skill.text}</p>
            <ul className="tags" aria-label={skill.name}>
              {skill.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
