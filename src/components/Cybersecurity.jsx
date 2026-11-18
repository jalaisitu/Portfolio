import React from "react";
import { labs } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Cybersecurity() {
  return (
    <section
      id="cybersecurity"
      className="shell section cyber-section"
      aria-labelledby="cyber-title"
    >
      <SectionHeading
        id="cyber-title"
        number="02"
        label="CYBERSECURITY"
        title={
          <>
            Understand the risks.
            <br />
            <em>Build with awareness.</em>
          </>
        }
        aside="Academic labs completed in training environments as a complement to my web development studies."
      />
      <div className="cyber-grid">
        {labs.map((lab, index) => (
          <Reveal className="cyber-card" key={lab.id} delay={index * 70}>
            <article>
              <p className="eyebrow">Academic lab · 2026</p>
              <h3>{lab.name}</h3>
              <dl className="lab-details">
                <div>
                  <dt>Objective</dt>
                  <dd>{lab.problem}</dd>
                </div>
                <div>
                  <dt>My work</dt>
                  <dd>{lab.work}</dd>
                </div>
                <div>
                  <dt>Result and scope</dt>
                  <dd>{lab.result}</dd>
                </div>
              </dl>
              <ul className="tags" aria-label="Areas of work">
                {lab.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
