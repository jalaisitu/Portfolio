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
        label="CIBERSEGURIDAD"
        title={
          <>
            Entender los riesgos.
            <br />
            <em>Desarrollar con criterio.</em>
          </>
        }
        aside="Laboratorios académicos en entornos de entrenamiento, como complemento a mi formación en desarrollo web."
      />
      <div className="cyber-grid">
        {labs.map((lab, index) => (
          <Reveal className="cyber-card" key={lab.id} delay={index * 70}>
            <article>
              <p className="eyebrow">Laboratorio académico · 2026</p>
              <h3>{lab.name}</h3>
              <dl className="lab-details">
                <div>
                  <dt>Objetivo</dt>
                  <dd>{lab.problem}</dd>
                </div>
                <div>
                  <dt>Mi trabajo</dt>
                  <dd>{lab.work}</dd>
                </div>
                <div>
                  <dt>Resultado y alcance</dt>
                  <dd>{lab.result}</dd>
                </div>
              </dl>
              <ul className="tags" aria-label="Áreas de trabajo">
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
